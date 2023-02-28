import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { PrivateRoutes } from "./private.routes";
import { PublicRoutes } from "./public.routes";
import { getStorage } from "../utils";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/createStore";
import { initialState, setLogin } from "../redux/modules/auth/reducer";

export default function Routes() {
  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await getStorage("user").then((response) => {
        dispatch(response ? setLogin(response) : setLogin(initialState));
      });
    })();
  }, []);

  return (
    <NavigationContainer>
      {auth.userId ? <PrivateRoutes /> : <PublicRoutes />}
    </NavigationContainer>
  );
}

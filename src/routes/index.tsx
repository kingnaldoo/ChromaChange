import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { PrivateRoutes } from "./private.routes";
import { PublicRoutes } from "./public.routes";
import { initialState, useAuth } from "../context";
import { getStorage } from "../utils";

export default function Routes() {
  const { user, setUser } = useAuth();

  useEffect(() => {
    (async () => {
      await getStorage("user").then((response) => {
        response ? setUser(response) : setUser(initialState);
      });
    })();
  }, []);

  return (
    <NavigationContainer>
      {user.userId ? <PrivateRoutes /> : <PublicRoutes />}
    </NavigationContainer>
  );
}

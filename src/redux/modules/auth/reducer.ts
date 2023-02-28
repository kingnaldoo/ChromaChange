import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../../@types";

export const initialState: User = {
  userId: "",
  colors: {
    cube: "red",
    cone: "green",
    dodecahedron: "blue",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, { payload }) => {
      return {
        ...state,
        userId: payload.userId,
        colors: {
          cube: payload.colors.cube,
          cone: payload.colors.cone,
          dodecahedron: payload.colors.dodecahedron,
        }
      };
    },
  },
});

export const { setLogin } = authSlice.actions;

export default authSlice.reducer;

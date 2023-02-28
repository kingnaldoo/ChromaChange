import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../../@types";

export const initialState: User = {
  userId: "",
  colors: {
    cube: "",
    cone: "",
    dodecahedron: "",
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
        colors: payload.colors,
      };
    },
  },
});

export const { setLogin } = authSlice.actions;

export default authSlice.reducer;

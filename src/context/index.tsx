import React from "react";
import { AuthContextProvider } from "./AuthContext";

export * from "./AuthContext";

type ContextProps = {
  children: React.ReactNode;
};

export function Context({ children }: ContextProps) {
  return <AuthContextProvider>{children}</AuthContextProvider>;
}

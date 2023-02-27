import React from "react";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebase-config";
import { Auth, getAuth } from "firebase/auth";

export type User = {
  userId: string;
  email: string;
  password: string;
};

type AuthContextData = {
  user: User | null | void;
  setUser: (user: User | null | void | undefined) => void;
  auth: Auth;
};

type AuthContextProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = React.createContext({} as AuthContextData);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = React.useState<User | null | void>(null);

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ user, setUser, auth }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = React.useContext(AuthContext);

  return context;
}

import React from "react";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebase-config";
import { Auth, getAuth } from "firebase/auth";
import {Firestore, getFirestore} from 'firebase/firestore';

export type Colors = {
  cube: string;
  cone: string;
  dodecahedron: string;
}

export type User = {
  userId: string;
  colors: Colors;
};

type AuthContextData = {
  user: User;
  setUser: (user: User) => void;
  auth: Auth;
  firestore: Firestore;
};

type AuthContextProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = React.createContext({} as AuthContextData);

export const initialState: User = {
  userId: "",
  colors: {
    cube: "#000000",
    cone: "#000000",
    dodecahedron: "#000000",
  },
};

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = React.useState<User>(initialState);

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const firestore = getFirestore(app);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ user, setUser, auth, firestore }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = React.useContext(AuthContext);

  return context;
}

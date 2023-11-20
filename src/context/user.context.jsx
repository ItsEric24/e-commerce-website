/* eslint-disable react/prop-types */
import {
  onAuthStateChangedListener,
  createUserDocumentAuth,
} from "../utils/firebase/firebase";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  });

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

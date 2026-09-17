import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isSignedIn, setIsSignedIn] = useState(
    localStorage.getItem("isSignedIn") === "true",
  );

  function signIn() {
    localStorage.setItem("isSignedIn", "true");
    setIsSignedIn(true);
  }

  function signOut() {
    localStorage.removeItem("isSignedIn");
    setIsSignedIn(false);
  }

  return (
    <AuthContext.Provider
      value={{
        isSignedIn,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}

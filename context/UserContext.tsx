import { createContext, useContext, useState, useEffect } from "react";
import { User } from "@supabase/supabase-js";
import { AuthChangeEvent, Session } from "@supabase/supabase-js";

import supabase from "@/config/supabaseClient";

type UserContextValue = {
  userLogged: User | null;
  setUserLogged: React.Dispatch<React.SetStateAction<User | null>>;
};

const UserContext = createContext<UserContextValue | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
};

type UserProviderProps = {
  children: React.ReactNode;
};

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [userLogged, setUserLogged] = useState<User | null>(null);

  useEffect(() => {
    const { data: subscription } = supabase.auth.onAuthStateChange(
      (event: AuthChangeEvent, session: Session | null) => {
        setUserLogged(session?.user || null);
      }
    );

    return () => {
      if (typeof subscription?.unsubscribe === "function") {
        subscription.unsubscribe();
      }
    };
  }, []);

  return (
    <UserContext.Provider value={{ userLogged, setUserLogged }}>
      {children}
    </UserContext.Provider>
  );
};

import React, { createContext, useContext, useState, useEffect } from 'react';
import  supabase  from '../config/supabaseClient'; // Adjust the import path as needed
import { User, Session, AuthChangeEvent } from '@supabase/supabase-js'; // Ensure correct import

type UserProviderProps = {
  children: React.ReactNode;
};

interface UserContextValue {
  userLogged: User | null;
  
  setUserLogged: React.Dispatch<React.SetStateAction<User | null>>;
}


const UserContext = createContext<UserContextValue | undefined>(undefined);

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [userLogged, setUserLogged] = useState<User | null>(null);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event: AuthChangeEvent, session: Session | null) => {
        setUserLogged(session?.user || null);
      }
    );

    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ userLogged, setUserLogged }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextValue => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
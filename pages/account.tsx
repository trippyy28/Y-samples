import Link from "next/link";
import { useUser } from "../pages/context/UserContext";
import { useEffect, useState } from "react";
import { AuthChangeEvent, Session, User } from "@supabase/supabase-js";

import supabase from "@/config/supabaseClient";
const Account: React.FC = () => {
  const { user } = useUser();

  function logOutUser() {
    supabase.auth.signOut();
  }

  console.log("hi", user);

  if (user) {
    return (
      <div>
        <h1>Welcome back, {user.email}!</h1>
        <button onClick={() => logOutUser()}>Log Out</button>
      </div>
    );
  }
  return (
    <div className="font-sans flex justify-center items-center gap-8 flex-col text-lg w-20 m-auto relative top-10">
      <Link href="/signup">
        <h3 className="bg-black text-white rounded w-28 h-12 flex justify-center items-center">
          Sign up
        </h3>
      </Link>
      <Link href="/login">
        <h3 className="bg-black text-white rounded w-28 h-12 flex justify-center items-center">
          Log in
        </h3>
      </Link>
    </div>
  );
};

export default Account;

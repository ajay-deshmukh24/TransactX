"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { Appbar } from "@repo/ui/Appbar";
import { Mybutton } from "@repo/ui/Mybutton";

export default function Home() {
  const session = useSession();
  return (
    <>
      <Appbar onSignin={signIn} onSignout={signOut} user={session.data?.user} />
      <div className="text-8xl bg-red-600 text-white font-semibold">
        hi there
      </div>
      <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold text-lg rounded-xl shadow-lg hover:from-indigo-600 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-blue-300">
        Click Me
      </button>
      <Mybutton></Mybutton>
    </>
  );
}

"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";

export const Header = () => {
  const router = useRouter();
  const SignOut = () => {
    localStorage.removeItem("isLoggedIn");
    router.push("/");
    toast.success("successfully signed out");
  };

  return (
    <div className="w-full bg-gray-200 h-12 p-3 flex items-center justify-between">
      <p>Do you want to sign out?</p>
      <button
        onClick={SignOut}
        className="bg-gray-500 text-white p-2 rounded-md hover:bg-red-600"
      >
        Sign Out
      </button>
    </div>
  );
};

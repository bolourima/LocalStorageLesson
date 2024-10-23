"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "react-toastify";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      toast.success("you already login");
      router.push("/dashboard");
    }
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-black">
          Welcome to the Geld
        </h1>
        <div className="flex justify-around">
          <Link href="/signup">
            <button className="bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-600">
              Sign Up
            </button>
          </Link>
          <Link href="/login">
            <button className="bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-600">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

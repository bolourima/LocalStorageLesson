"use client";

import { Header } from "@/components/Header";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";

const Dashboard = () => {
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      // Redirect to login if not logged in
      toast.warning("Login please!");
      router.push("/login");
    }
  }, [router]);
  return (
    <>
      <Header />
      <div className="h-screen w-screen flex justify-center items-center text-2xl font-medium">
        Dashboard bn
      </div>
    </>
  );
};

export default Dashboard;

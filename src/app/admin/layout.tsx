import { assets } from "@/assets/assets";
import Sidebar from "@/components/admin/Sidebar";
import Image from "next/image";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="flex">
        <ToastContainer theme="dark" />
        <Sidebar />
        <div className="flex-1 min-h-screen p-8">
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-3xl font-bold text-white">
              Welcome to the Admin Dashboard
            </h1>
            <Image src={assets.profile_icon} alt="" width={40}></Image>
          </div>
          {children}
        </div>
      </div>
    </>
  );
}

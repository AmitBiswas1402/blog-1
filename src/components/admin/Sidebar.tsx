"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="w-64 h-screen bg-white text-black flex flex-col px-6 py-8 shadow-lg">
      <div className="text-2xl font-bold mb-12 ml-4 text-black">Logo</div>

      <div className="flex flex-col gap-2">
        <Link
          href="/admin/addBlog"
          className={`flex items-center gap-3 px-4 py-3 rounded-md hover:bg-gray-200 ${
            pathname === "/admin/addBlog" ? "bg-gray-300" : ""
          }`}
        >
          <Image src={assets.add_icon} alt="Add Blog" width={28} />
          <p>Add Blogs</p>
        </Link>

        <Link
          href="/admin/blogList"
          className={`flex items-center gap-3 px-4 py-3 rounded-md hover:bg-gray-200 ${
            pathname === "/admin/blogList" ? "bg-gray-300" : ""
          }`}
        >
          <Image src={assets.blog_icon} alt="Your Blogs" width={28} />
          <p>Your Blogs</p>
        </Link>

        <Link
          href="/admin/subscription"
          className={`flex items-center gap-3 px-4 py-3 rounded-md hover:bg-gray-200 ${
            pathname === "/admin/subscription" ? "bg-gray-300" : ""
          }`}
        >
          <Image src={assets.email_icon} alt="Subscribe Now" width={28} />
          <p>Subscribe Now</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;

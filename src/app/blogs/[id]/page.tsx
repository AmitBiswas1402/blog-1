"use client";

import { assets, blog_data } from "@/assets/assets";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

const Blogs = () => {
  const { id } = useParams();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const blogId = Number(id);
    const blog = blog_data.find((item) => item.id === blogId);
    setData(blog);
    console.log(blog);
  }, [id]);

  return data ? (
    <div className="min-h-screen text-white scrollbar-hide overflow-y-scroll h-screen">
      {/* Navbar */}
      <div className="flex justify-between items-center px-10 py-6 shadow-md">
        <Link href="/">
          <div className="text-2xl font-bold">Logo</div>
        </Link>
        <button className="bg-blue-600 px-5 py-2 rounded-lg text-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>

      {/* Blog Header */}
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-6">{data.title}</h1>

        <div className="flex items-center gap-4 mb-10">
          <Image
            src={data.author_img}
            width={60}
            height={60}
            alt={data.author}
            className="rounded-full"
          />
          <div>
            <p className="text-lg font-semibold">{data.author}</p>
            <p className="text-sm text-white">Published on Jan 1, 2025</p>
          </div>
        </div>

        <Image
          src={data.image}
          width={1280}
          height={720}
          alt="Blog Cover"
          className="w-full rounded-xl mb-8 object-cover max-h-[500px]"
        />

        <p className="text-lg text-gray-100 leading-relaxed mb-6">
          {data.description} Lorem ipsum dolor sit amet.
        </p>

        {/* Blog Content */}
        <div className="space-y-6 text-base text-gray-100 leading-relaxed">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Architecto vel culpa quae? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quod, quae.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Architecto vel culpa quae? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quod, quae.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Architecto vel culpa quae? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quod, quae.
            </p>
          </div>
        </div>

        {/* Social Share */}
        <div className="mt-12">
          <p className="text-lg font-medium mb-4">Share this article</p>
          <div className="flex gap-4">
            <Image
              src={assets.facebook_icon}
              width={40}
              height={40}
              alt="Facebook"
            />
            <Image
              src={assets.twitter_icon}
              width={40}
              height={40}
              alt="Twitter"
            />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-lg text-gray-600">Loading blog post...</p>
    </div>
  );
};

export default Blogs;

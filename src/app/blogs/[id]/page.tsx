"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import axios from "axios";

interface Blog {
  _id: string;
  title: string;
  image: string;
  description: string;
  category: string;
  author: string;
  authorImg: string;
  createdAt: string;
}

const Blogs = () => {
  const { id } = useParams();
  const [data, setData] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`/api/blog/${id}`);
        setData(response.data.blog);
      } catch (error) {
        console.error("Failed to fetch blog:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-600">Loading blog post...</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-red-600">Blog not found.</p>
      </div>
    );
  }

  const formattedDate = new Date(data.createdAt).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="min-h-screen text-white overflow-y-scroll h-screen">
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
            src={data.authorImg}
            width={60}
            height={60}
            alt={data.author}
            className="rounded-full"
          />
          <div>
            <p className="text-lg font-semibold">{data.author}</p>
            <p className="text-sm text-white">Published on {formattedDate}</p>
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
          {data.description}
        </p>

        {/* Placeholder Content */}
        <div className="space-y-6 text-base text-gray-100 leading-relaxed">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              More Details Coming Soon
            </h3>
            <p>
              This is a placeholder for full blog content. You can extend this
              section to render HTML or markdown content from the database.
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
  );
};

export default Blogs;

"use client";

import BlogItem from "./BlogItem";
import { useEffect, useState } from "react";
import axios from "axios";

// Blog type
interface Blog {
  _id: string;
  title: string;
  description: string;
  category: string;
  image: string;
}

const BlogList = () => {
  const [menu, setMenu] = useState<string>("All");
  const [blogs, setBlogs] = useState<Blog[]>([]);

  // Fetch blogs from API
  const fetchBlogs = async () => {
    try {
      const response = await axios.get("/api/blog");
      if (response.data.success) {
        setBlogs(response.data.blogs);
        console.log("Fetched blogs:", response.data.blogs);
      } else {
        console.error("Failed to fetch blogs:", response.data.error);
      }
    } catch (err) {
      console.error("Error fetching blogs:", err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Filter blogs by category
  const filteredBlogs =
    menu === "All" ? blogs : blogs.filter((item) => item.category === menu);

  return (
    <>
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 my-8 px-4">
        {["All", "Technology", "Startup", "Life Style"].map((category) => (
          <button
            key={category}
            onClick={() => setMenu(category)}
            className={`px-4 py-2 rounded-lg transition font-medium ${
              menu === category
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-100 text-blue-600 hover:bg-blue-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Cards */}
      <div className="flex flex-wrap justify-start gap-6 xl:mx-24 px-4 mb-16">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((item) => (
            <BlogItem
              key={item._id}
              id={item._id}
              image={item.image}
              title={item.title}
              description={item.description}
              category={item.category}
            />
          ))
        ) : (
          <p className="text-gray-500 text-center w-full">
            No blogs found in this category.
          </p>
        )}
      </div>
    </>
  );
};

export default BlogList;

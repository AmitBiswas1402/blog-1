"use client";

import BlogTable from "@/components/admin/BlogTable";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get("/api/blog");
      setBlogs(response.data.blogs);
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    }
  };

  const deleteBlog = async (mongoId: string): Promise<void> => {
    try {
      const response = await axios.delete(`/api/blog/${mongoId}`);
      toast.success(response.data.message);
      fetchBlogs();
    } catch (error) {
      toast.error("Failed to delete blog");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-white">
        All Blogs
      </h1>
      <div className="max-h-[70vh] overflow-y-auto overflow-x-auto shadow-lg rounded-lg custom-scroll">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="sticky top-0 z-10 bg-blue-600 text-white">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider"
              >
                Author
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider"
              >
                Blog Title
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider"
              >
                Date
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {blogs.map((blog: any) => (
              <BlogTable
                key={blog._id}
                id={blog._id}
                title={blog.title}
                authorImg={blog.authorImg}
                date={blog.date}
                deleteBlog={deleteBlog}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogList;

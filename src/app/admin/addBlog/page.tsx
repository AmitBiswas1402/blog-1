"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import { useState, ChangeEvent } from "react";

interface BlogData {
  title: string;
  description: string;
  category: string;
  author: string;
  authorImg: string;
}

const AddBlog = () => {
  const [image, setImage] = useState<File | null>(null);
  const [data, setData] = useState<BlogData>({
    title: "",
    description: "",
    category: "Startup",
    author: "Alex Bennett",
    authorImg: "/profile_icon.png",
  });

  const onChangeHandler = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  return (
    <form className="p-4 rounded-lg w-full max-w-lg space-y-4 max-h-screen overflow-y-auto">
      {/* Upload */}
      <div>
        <p className="text-base font-semibold mb-2">Upload Thumbnail</p>
        <label
          htmlFor="image"
          className="flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-400 rounded-md cursor-pointer"
        >
          <Image
            src={image ? URL.createObjectURL(image) : assets.upload_area}
            alt="Upload Thumbnail"
            width={150}
            height={80}
            className="object-contain"
          />
        </label>
        <input
          type="file"
          id="image"
          accept="image/*"
          hidden
          onChange={handleImageChange}
          required
        />
      </div>

      {/* Title */}
      <div>
        <label htmlFor="title" className="text-sm font-medium">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={data.title}
          onChange={onChangeHandler}
          required
          placeholder="Blog title..."
          className="w-full p-2 text-sm border border-gray-300 rounded-md"
        />
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="text-sm font-medium">Content</label>
        <textarea
          id="description"
          name="description"
          value={data.description}
          onChange={onChangeHandler}
          required
          rows={4}
          placeholder="Blog content..."
          className="w-full p-2 text-sm border border-gray-300 rounded-md resize-none"
        />
      </div>

      {/* Category */}
      <div>
        <label htmlFor="category" className="text-sm font-medium">Category</label>
        <select
          id="category"
          name="category"
          value={data.category}
          onChange={onChangeHandler}
          className="w-full p-2 text-sm border border-gray-300 rounded-md"
        >
          <option value="Startup">Startup</option>
          <option value="Technology">Technology</option>
          <option value="Life Style">Life Style</option>
        </select>
      </div>

      {/* Button */}
      <button
        type="submit"
        className="w-full py-2 bg-white text-black text-sm rounded-md hover:bg-gray-200 transition"
      >
        ADD BLOG
      </button>
    </form>
  );
};

export default AddBlog;

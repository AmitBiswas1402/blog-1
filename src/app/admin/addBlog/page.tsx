"use client";

import { assets } from "@/assets/assets";
import axios from "axios";
import Image from "next/image";
import { useState, ChangeEvent} from "react";
import { toast } from "react-toastify";
import { FormEvent } from "react";

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

  interface SubmitResponse {
    status: number;
  }

  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
  
    if (!image) {
      toast.error("Please upload an image");
      return;
    }
  
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("author", data.author);
    formData.append("authorImg", data.authorImg);
    formData.append("image", image); 
  
    try {
      const response: SubmitResponse = await axios.post("/api/blog", formData);
  
      if (response.status === 201) {
        toast.success("Blog added successfully!");
        setImage(null)
        setData({
          title: "",
          description: "",
          category: "Startup",
          author: "Alex Bennett",
          authorImg: "/profile_icon.png",
        })
      } else {
        toast.error("Failed to add blog");
      }
    } catch (error: unknown) {
      console.error("Submit error:", error);
      toast.error("Something went wrong");
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      encType="multipart/form-data"
      className="p-4 rounded-lg w-full max-w-lg space-y-4 max-h-screen overflow-y-auto"
    >
      {/* Upload */}
      <div>
        <p className="text-base font-semibold mb-2">Upload Thumbnail</p>
        <label htmlFor="image" className="cursor-pointer">
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
        <label htmlFor="title" className="text-sm font-medium">
          Title
        </label>
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
        <label htmlFor="description" className="text-sm font-medium">
          Content
        </label>
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
        <label htmlFor="category" className="text-sm font-medium">
          Category
        </label>
        <select
          id="category"
          name="category"
          value={data.category}
          onChange={onChangeHandler}
          className="w-full p-2 text-sm border rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 hover:bg-gray-200 transition"
        >
          <option value="Startup" className="bg-white text-black">Startup</option>
          <option value="Technology" className="bg-white text-black">Technology</option>
          <option value="Life Style" className="bg-white text-black">Life Style</option>
        </select>
      </div>

      {/* Button */}
      <button
        type="submit"
        className="w-full py-2 bg-white text-black text-sm rounded-md hover:bg-gray-400 hover:text-white transition cursor-pointer"
      >
        ADD BLOG
      </button>
    </form>
  );
};

export default AddBlog;

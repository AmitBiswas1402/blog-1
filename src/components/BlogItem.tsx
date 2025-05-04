import { blog_data } from "@/assets/assets";
import BlogList from "./BlogList";
import { useState } from "react";

const BlogItem = () => {
  const [menu, setMenu] = useState("All");

  // Filter logic
  const filteredBlogs = menu === "All"
    ? blog_data
    : blog_data.filter((item) => item.category === menu);

  return (
    <>
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 my-8 px-4">
        {["All", "Technology", "Startup", "LifeStyle"].map((category) => (
          <button
            key={category}
            onClick={() => setMenu(category)}
            className={`px-4 py-2 rounded-lg transition font-medium ${
              menu === category
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-100 text-blue-600 hover:bg-blue-200"
            }`}
          >
            {category === "LifeStyle" ? "Life Style" : category}
          </button>
        ))}
      </div>

      {/* Blog Cards */}
      <div className="flex flex-wrap justify-start gap-6 xl:mx-24 px-4 mb-16">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((item) => (
            <BlogList
              key={item.title}
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

export default BlogItem;

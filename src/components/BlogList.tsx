import Image from "next/image";
import { assets } from "@/assets/assets";

type BlogListProps = {
  title: string;
  description: string;
  image: string;
  category: string;
};

const BlogList = ({ title, description, category, image }: BlogListProps) => {
  return (
    <div className="w-[300px] bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Blog Image */}
      <Image
        src={image}
        alt="Blog Cover"
        width={300}
        height={200}
        className="w-full h-48 object-cover rounded-t-xl"
      />

      {/* Blog Content */}
      <div className="p-4">
        <p className="text-sm text-blue-600 font-medium mb-1">{category}</p>
        <h5 className="text-lg font-bold text-gray-800 mb-2">{title}</h5>
        <p className="text-gray-600 text-sm mb-4">{description}</p>

        {/* Read More */}
        <div className="flex items-center gap-2 text-blue-600 font-semibold hover:underline cursor-pointer">
          <span>Read More</span>
          <Image src={assets.arrow} alt="arrow" width={16} height={16} />
        </div>
      </div>
    </div>
  );
};

export default BlogList;

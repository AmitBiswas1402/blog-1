import { assets } from "@/assets/assets";
import Image from "next/image";

type BlogTableProps = {
  id: string;
  title: string;
  authorImg?: string;
  date: string;
  deleteBlog: (id: string) => void;
};

const BlogTable = ({
  id,
  title,
  authorImg,
  date,
  deleteBlog,
}: BlogTableProps) => {
  const BlogDate = new Date(date);
  return (
    <tr className="border-b cursor-pointer transition hover:bg-blue-900/30">
      <td className="px-6 py-4">
        <Image
          src={authorImg || assets.profile_icon}
          alt="Author"
          width={40}
          height={40}
          className="rounded-full"
        />
      </td>
      <td className="px-6 py-4 font-medium text-white">
        {title || "No title"}
      </td>
      <td className="px-6 py-4 text-white">{BlogDate.toDateString()}</td>
      <td
        className="px-6 py-4 text-red-500 cursor-pointer"
        onClick={() => deleteBlog(id)}
      >
        ✖
      </td>
    </tr>
  );
};

export default BlogTable;

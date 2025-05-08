import { assets } from "@/assets/assets";
import Image from "next/image";

type BlogTableProps = {
  title: string;
  authorImg?: string;
  date: string;
};

const BlogTable = ({ title, authorImg, date }: BlogTableProps) => {
  const BlogDate = new Date(date);
  return (
    <tr className="border-b cursor-pointer transition">
      <th className="px-6 py-4">
        <Image
          src={authorImg || assets.profile_icon}
          alt="Author"
          width={40}
          height={40}
          className="rounded-full"
        />
      </th>
      <td className="px-6 py-4 font-medium text-white">{title || "No title"}</td>
      <td className="px-6 py-4 text-white">{BlogDate.toDateString()}</td>
      <td className="px-6 py-4 text-red-500 cursor-pointer">✖</td>
    </tr>
  );
};

export default BlogTable;

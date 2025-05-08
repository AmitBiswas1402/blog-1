import Image from "next/image"

const BlogTable = () => {
  return (
    <tr className="bg-white border-b">
        <th>
            <Image src={authorImg?authorImg:assets.profile_icon} alt=""></Image>
        </th>
        <td>{title?title: "no title"}</td>
        <td>{"Random Data"}</td>
        <td>x</td>
    </tr>
  )
}
export default BlogTable
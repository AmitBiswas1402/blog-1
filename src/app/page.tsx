"use client"
import BlogItem from "@/components/BlogList"
import Navbar from "@/components/Navbar"

const HomePage = () => {
  return (
    <div className="scrollbar-hide overflow-y-scroll h-screen">
      <Navbar />
      <BlogItem />
    </div>
  )
}
export default HomePage
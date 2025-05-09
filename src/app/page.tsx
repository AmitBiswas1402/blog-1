"use client"
import BlogItem from "@/components/BlogList"
import Header from "@/components/Header"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

const HomePage = () => {
  return (
    <div className="scrollbar-hide overflow-y-scroll h-screen">
      <ToastContainer theme="dark" />
      <Header />
      <BlogItem />
    </div>
  )
}
export default HomePage
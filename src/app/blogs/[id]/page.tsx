"use client";
import { blog_data } from "@/assets/assets";
import { use, useEffect, useState } from "react";

type BlogPageProps = {
  params: {
    id: string;
  };
};

const Blogs = ({ params }: BlogPageProps) => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    for(let i = 0; i<blog_data.length; i++) {
        if (Number(params.id) === blog_data[i].id) {
            setData(blog_data[i]);
        }
    }
  }

  useEffect(() => {

  }, [])

  const { id } = use(params);

  return (<div>{id}</div>);
};

export default Blogs;

import { connectDB } from "@/lib/db/db";
import Blog from "@/lib/models/blog.model";
import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

// GET a Blog
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();

    const blog = await Blog.findById(params.id);

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, blog });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to fetch blog" },
      { status: 500 }
    );
  }
}

// DELETE a Blog
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  await connectDB();

  try {
    const blog = await Blog.findById(params.id);

    if (!blog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    if (blog.image) {
      const imagePath = path.join(process.cwd(), "public", blog.image);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath); // delete the file
      }
    }

    await Blog.findByIdAndDelete(params.id);

    return NextResponse.json(
      { message: "Blog and image deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error deleting blog", error },
      { status: 500 }
    );
  }
}

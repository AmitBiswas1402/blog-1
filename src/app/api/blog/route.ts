import { connectDB } from "@/lib/db/db";
import { writeFile } from "fs/promises";
import path from "path";
import { NextRequest, NextResponse } from "next/server";
import Blog from "@/lib/models/blog.model";

// Connect to DB on load
connectDB().catch((err) => {
  console.error("Database connection failed:", err);
});

// GET handler
export async function GET() {
  return NextResponse.json({ message: "API Working" });
}

// POST handler
export async function POST(request: NextRequest) {
  try {
    await connectDB(); // Ensure DB is connected

    const formData = await request.formData();

    // Get form fields
    const title = formData.get("title")?.toString() || "";
    const category = formData.get("category")?.toString() || "";
    const author = formData.get("author")?.toString() || "";
    const authorImg = formData.get("authorImg")?.toString() || "";
    const description = formData.get("description")?.toString() || "";
    const file = formData.get("image");

    // Validate fields
    if (!file || !(file instanceof File)) {
      return NextResponse.json({ error: "No image file provided" }, { status: 400 });
    }

    if (!title || !category || !author || !authorImg || !description) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Handle image file
    const timestamp = Date.now();
    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = `${timestamp}_${file.name}`;
    const filePath = path.join(process.cwd(), "public", fileName);
    await writeFile(filePath, buffer);
    const imgUrl = `/${fileName}`;

    // Create blog in DB
    const newBlog = await Blog.create({
      title,
      category,
      author,
      authorImg,
      description,
      image: imgUrl,
    });

    return NextResponse.json(newBlog, { status: 201 });
  } catch (error) {
    console.error("Blog Upload Error:", error);
    return NextResponse.json({ error: "Failed to upload and save blog" }, { status: 500 });
  }
}

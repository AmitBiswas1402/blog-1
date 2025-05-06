import { connectDB } from "@/lib/db/db";
import { writeFile } from "fs/promises";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

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
    const formData = await request.formData();

    // Get form fields
    const title = formData.get("title")?.toString() || "";
    const category = formData.get("category")?.toString() || "";
    const author = formData.get("author")?.toString() || "";
    const authorImg = formData.get("authorImg")?.toString() || "";
    const description = formData.get("description")?.toString() || "";

    const file = formData.get("image");

    // Validate file existence and type
    if (!file || !(file instanceof File)) {
      return NextResponse.json({ error: "No image file provided" }, { status: 400 });
    }

    const timestamp = Date.now();
    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = `${timestamp}_${file.name}`;
    const filePath = path.join(process.cwd(), "public", fileName);

    // Save file to public directory
    await writeFile(filePath, buffer);
    const imgUrl = `/${fileName}`;

    console.log("Blog data received:", { title, category, author, authorImg, description, imgUrl });

    return NextResponse.json({
      title,
      category,
      author,
      authorImg,
      description,
      imgUrl,
    });
  } catch (error) {
    console.error("Upload Error:", error);
    return NextResponse.json({ error: "Failed to upload image" }, { status: 500 });
  }
}

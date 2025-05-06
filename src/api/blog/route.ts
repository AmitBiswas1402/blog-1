import { connectDB } from "@/lib/db/db";
import { NextRequest, NextResponse } from "next/server";

connectDB().catch((err) => {
  console.error("Database connection failed:", err);
});

export async function GET(){
  return NextResponse.json({ message: "API Working" });
}

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const timestamp = Date.now();

  const image = formData.get('image')
  const imgByData = await image.arrayBuffer();
}
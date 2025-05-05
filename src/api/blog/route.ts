import { connectDB } from "@/lib/db/db";
import { NextRequest, NextResponse } from "next/server";

const db = async() => {
    await connectDB();
}

db();

export async function GET(){
  return NextResponse.json({ msg: "API Working" });
}


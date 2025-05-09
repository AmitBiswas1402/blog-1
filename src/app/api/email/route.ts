import { connectDB } from "@/lib/db/db";
import EmailSubscriber from "@/lib/models/email.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    await connectDB();

    const formData = await request.formData();
    const email = formData.get("email");

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { success: false, message: "Invalid or missing email" },
        { status: 400 }
      );
    }

    // Check for duplicates
    const existing = await EmailSubscriber.findOne({ email });
    if (existing) {
      return NextResponse.json(
        { success: false, message: "Email already subscribed" },
        { status: 409 }
      );
    }

    await EmailSubscriber.create({ email });

    return NextResponse.json({
      success: true,
      message: "Email subscribed successfully",
    });
  } catch (error) {
    console.error("Email subscription error:", error);
    return NextResponse.json(
      { success: false, message: "Server error", error },
      { status: 500 }
    );
  }
}

export async function GET(): Promise<NextResponse> {
  try {
    await connectDB();
    const emails = await EmailSubscriber.find().sort({ date: -1 });
    return NextResponse.json({ emails });
  } catch (error) {
    console.error("Fetching emails failed:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch emails", error },
      { status: 500 }
    );
  }
}

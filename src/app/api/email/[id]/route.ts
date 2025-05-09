import { connectDB } from "@/lib/db/db";
import EmailSubscriber from "@/lib/models/email.model";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  try {
    await connectDB();

    const deletedEmail = await EmailSubscriber.findByIdAndDelete(params.id);

    if (!deletedEmail) {
      return NextResponse.json(
        { success: false, message: "Email not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Email deleted successfully",
    });
  } catch (error) {
    console.error("Delete email error:", error);
    return NextResponse.json(
      { success: false, message: "Server error", error },
      { status: 500 }
    );
  }
}

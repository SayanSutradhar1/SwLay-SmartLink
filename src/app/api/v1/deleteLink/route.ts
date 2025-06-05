import { ApiResponse } from "@/interfaces/api.interface";
import { connectDb } from "@/lib/db";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { username, handle } = await request.json();
  console.log(username, handle);
  
  try {
    await connectDb();
    const user = await User.findOne({
      username,
    });
    if (!user) {
      return NextResponse.json<ApiResponse>({
        message: "User not found",
      });
    }
    const existingLink = user.links.find(
      (linkObj) => linkObj.handle === handle
    );
    if (!existingLink) {
      return NextResponse.json<ApiResponse>({
        message: "Link not found",
      });
    }
    user.links = user.links.filter((linkObj) => linkObj.handle !== handle);
    await user.save();
    return NextResponse.json<ApiResponse<typeof user>>({
      message: "Link deleted successfully",
      data: user,
    });
  } catch (error) {
    console.error("Error deleting link:", error);
    return NextResponse.json<ApiResponse>({
      message: "Error deleting link",
      error: (error as Error).message,
    });
  }
}

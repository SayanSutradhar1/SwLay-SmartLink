import { ApiResponse } from "@/interfaces/api.interface";
import { connectDb } from "@/lib/db";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { username, handle, url } = await req.json();
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

    if (existingLink) {
      return NextResponse.json<ApiResponse>({
        message: "Link already exists",
      });
    }

    user.links.push({ handle, url });
    await user.save();

    return NextResponse.json<ApiResponse<typeof user>>({
      message: "Link added successfully",
      data: user,
    });
  } catch (error) {
    console.error("Error adding link:", error);
    return NextResponse.json<ApiResponse>({
      message: "Error adding link",
      error: (error as Error).message,
    });
  }
}


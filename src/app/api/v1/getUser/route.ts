import { ApiResponse } from "@/interfaces/api.interface";
import { connectDb } from "@/lib/db";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { username } = await req.json();
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

    return NextResponse.json<ApiResponse<typeof user>>({
      message: `User fetched successfully`,
      data: user,
    });
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json<ApiResponse>({
      message: "Error fetching user",
      error: (error as Error).message,
    });
  }
}

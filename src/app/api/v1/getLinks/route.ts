import { ApiResponse } from "@/interfaces/api.interface";
import { connectDb } from "@/lib/db";
import User from "@/models/user.model";
import { NextResponse, type NextRequest } from "next/server";

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

    return NextResponse.json<ApiResponse<typeof user.links>>({
      message: `Links fetched successfully for the user ${user.name}`,
      data: user.links,
    });
  } catch (error) {
    console.error("Error fetching links:", error);
    return NextResponse.json<ApiResponse>({
      message: "Error fetching links",
      error: (error as Error).message,
    });
  }
}

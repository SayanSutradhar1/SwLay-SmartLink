import { NextRequest, NextResponse } from "next/server";
import { ApiResponse } from "./interfaces/api.interface";

export default async function middleware(req:NextRequest){
    const { pathname } = req.nextUrl;

    const isAuthenticated = false

    // Check if the request is for a Next.js internal route or an API route
    // If so, allow it to pass through without any middleware processing
    if(pathname.startsWith("/_next") || pathname.startsWith("/api") || pathname.includes("favicon.ico")){
        return NextResponse.next()
    }

    console.log("Middleware triggered for path:", pathname);

    if(pathname === "/song"){
        return NextResponse.redirect(new URL("/song/New", req.url));
    }

    if(isAuthenticated && pathname === "/"){
        return NextResponse.redirect(new URL("/admin", req.url));
    }

    return NextResponse.next()
}
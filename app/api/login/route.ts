// app/api/login/route.ts
import { NextRequest, NextResponse } from "next/server";
import { generateToken } from "@/app/utils/jsonWebToken";
import { serialize } from "cookie";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();
  // Example: Check the user in the database (replace with actual DB check)
  if (username === "admin" && password === "password") {
    const token = generateToken({ id: 1 }); // Simulate user id as 1

    // Set the cookie
    const cookie = serialize("authToken", token, {
      httpOnly: true, // for security
      //   secure: process.env.NODE_ENV === "production", // send over HTTPS in production
      maxAge: 3600, // 1 hour
      path: "/", // cookie available throughout the app
    });

    const response = NextResponse.json({ success: true });
    response.headers.set("Set-Cookie", cookie); // Attach the cookie

    return response;
  }

  return NextResponse.json(
    { success: false, message: "Invalid credentials" },
    { status: 401 }
  );
}
export async function GET() {
  return NextResponse.json(
    { message: "GET method not supported" },
    { status: 405 }
  );
}

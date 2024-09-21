// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "@/app/utils/jsonWebToken"; // Adjust the import path as needed

export default async function middleware(req: NextRequest) {
  const token = req.cookies.get("authToken")?.value || "";
  const user = verifyToken(token);
  console.log(user, token);

  // If the token is invalid or missing, redirect to login page
  if (!user) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  // Attach user to request for use in the application
  return NextResponse.next();
}

// Specify which paths the middleware should be applied to
export const config = {
  matcher: ["/"], // Apply to specific paths
};

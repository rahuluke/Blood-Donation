// File: middleware.js
import { NextResponse } from "next/server";

// This middleware only handles routing based on cookies
export function middleware(request) {
  // Get token from cookies (if it exists)
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;

  // 1️⃣ Redirect logged-in users away from /login
  if (pathname.startsWith("/login") && token) {
    return NextResponse.redirect(new URL("/admin/bloods", request.url));
  }

  // 2️⃣ Protect /admin routes (redirect to login if no token)
  if (pathname.startsWith("/admin") && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // 3️⃣ Redirect /admin → /admin/bloods
  if (pathname === "/admin") {
    return NextResponse.redirect(new URL("/admin/bloods", request.url));
  }

  // 4️⃣ Let everything else pass through
  return NextResponse.next();
}

// Optional: define which paths this middleware applies to
export const config = {
  matcher: ["/login", "/admin/:path*"], // middleware will run for /login and all /admin routes
};

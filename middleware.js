import { NextResponse } from "next/server";

export async function middleware(request) {
  const verifyToken = async (token) => {
    return await fetch(`${request.nextUrl.origin}/api/verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });
  };

  if (request.nextUrl.pathname.startsWith("/login")) {
    const token = request.cookies.get("token");

    if (token) {
      const response = await verifyToken(token.value);
      if (response.status === 200) {
        return NextResponse.redirect(new URL("/admin/bloods", request.url));
      }
    }
  }

  if (request.nextUrl.pathname.startsWith("/admin")) {
    const token = request.cookies.get("token");

    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    const response = await verifyToken(token.value);
    if (response.status !== 200) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  if (request.nextUrl.pathname === "/admin") {
    return NextResponse.redirect(new URL("/admin/bloods", request.url));
  }
}

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (!request.nextUrl.pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  // Allow authentication endpoints without API key
  if (request.nextUrl.pathname.startsWith("/api/auth")) {
    return NextResponse.next();
  }

  const expectedApiKey = process.env.API_KEY;

  if (!expectedApiKey) {
    return NextResponse.json(
      { error: "Server configuration missing API key" },
      { status: 500 }
    );
  }

  const providedApiKey = request.headers.get("x-api-key");

  if (providedApiKey !== expectedApiKey) {
    return NextResponse.json(
      { error: "Unauthorized request" },
      { status: 401 }
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};

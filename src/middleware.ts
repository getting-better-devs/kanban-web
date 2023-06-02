import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/boards")) {
    const [, boardIdParam] = request.nextUrl.pathname
      .split("/")
      .filter(Boolean);

    const hasToken = true;

    if ((!!boardIdParam && !hasToken) || !boardIdParam) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/boards/:id*", "/profile"],
};

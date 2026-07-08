import { NextRequest, NextResponse } from "next/server";
import { PAGES } from "./config/pages.config";

const PUBLIC_PATHS = [PAGES.SIGN_IN];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const session = req.cookies.get("session_user")?.value;

  const isPublicPath = PUBLIC_PATHS.some((path) => pathname.startsWith(path));

  if (!session && !isPublicPath) {
    const signInUrl = new URL(PAGES.SIGN_IN, req.url);
    signInUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(signInUrl);
  }

  if (session && isPublicPath) {
    return NextResponse.redirect(new URL(PAGES.KPI, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
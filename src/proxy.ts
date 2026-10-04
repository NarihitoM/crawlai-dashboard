import { NextResponse, type NextRequest } from "next/server";
import { site } from "@/shared/lib/site";

const SESSION_MAX_AGE = 30 * 24 * 60 * 60;

export function proxy(request: NextRequest) {
  const sid = request.cookies.get("sid")?.value;

  if (!sid) {
    const signIn = new URL(site.signInUrl);
    signIn.searchParams.set("next", `${request.nextUrl.pathname}${request.nextUrl.search}`);
    return NextResponse.redirect(signIn);
  }

  const response = NextResponse.next();
  response.cookies.set("sid", sid, {
    httpOnly: true,
    secure: request.nextUrl.protocol === "https:",
    sameSite: "lax",
    maxAge: SESSION_MAX_AGE,
  });
  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|img/|icon.png|apple-icon.png|favicon.ico).*)"],
};

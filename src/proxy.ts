import { NextResponse, type NextRequest } from "next/server";
import { site } from "@/shared/lib/site";

export function proxy(request: NextRequest) {
  if (request.cookies.has("sid")) return NextResponse.next();

  const signIn = new URL(site.signInUrl);
  signIn.searchParams.set("next", `${request.nextUrl.pathname}${request.nextUrl.search}`);
  return NextResponse.redirect(signIn);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|img/|icon.png|apple-icon.png|favicon.ico).*)"],
};

import { NextResponse, type NextRequest } from "next/server";
import { site } from "@/shared/lib/site";

const SESSION_MAX_AGE = 30 * 24 * 60 * 60;
const LANDING_SYNCED = "landing_synced";

export function proxy(request: NextRequest) {
  const sid = request.cookies.get("sid")?.value;
  const path = `${request.nextUrl.pathname}${request.nextUrl.search}`;

  if (!sid) {
    const signIn = new URL(site.signInUrl);
    signIn.searchParams.set("next", path);
    return NextResponse.redirect(signIn);
  }

  const cookie = {
    httpOnly: true,
    secure: request.nextUrl.protocol === "https:",
    sameSite: "lax" as const,
  };
  const needsSync =
    !request.cookies.has(LANDING_SYNCED) && request.headers.get("sec-fetch-mode") === "navigate";

  const response = needsSync
    ? NextResponse.redirect(`${site.signedInUrl}?next=${encodeURIComponent(path)}`)
    : NextResponse.next();
  response.cookies.set("sid", sid, { ...cookie, maxAge: SESSION_MAX_AGE });
  if (needsSync)
    response.cookies.set(LANDING_SYNCED, "1", { ...cookie, maxAge: 365 * 24 * 60 * 60 });
  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|img/|icon.png|apple-icon.png|favicon.ico).*)"],
};

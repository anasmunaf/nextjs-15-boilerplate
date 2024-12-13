import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { appRoute, authRoute } from "./constants/routes";

const protectedRoutes = Object.values(authRoute);

const publicRoutes = Object.values(appRoute);

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  const cookie = await cookies();
  const isToken = !!cookie.get("token")?.value;

  if (isPublicRoute && !isToken) {
    return NextResponse.redirect(
      new URL(authRoute.login, process.env.BASE_URL).href
    );
  } else if (isProtectedRoute && isToken) {
    return NextResponse.redirect(
      new URL(appRoute.dashboard, process.env.BASE_URL).href
    );
  }

  return NextResponse.next();
}

export default middleware;

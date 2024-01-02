import { NextRequest, NextResponse } from "next/server";

const session = false;
const protectedRoutes = ["/admin/*"];

const AuthMiddleware = (req: NextRequest) => {
  if (session && protectedRoutes.includes(req.nextUrl.pathname)) {
    const absolutePath = new URL("/", req.nextUrl.origin);
    return NextResponse.redirect(absolutePath.toString());
  }
};

export default AuthMiddleware;

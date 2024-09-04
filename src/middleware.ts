import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// sub middlewares
import { signUpMiddleware } from "@/middleware/auth.middleware"

export function middleware(req: NextRequest) {
	if (req.nextUrl.pathname.startsWith("/auth/signup")) {
		return signUpMiddleware(req)
	}
}

// See "Matching Paths" below to learn more
export const config = {
	matcher: [`/auth/signup/:path*`]
}

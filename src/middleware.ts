import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import { withAuth } from "next-auth/middleware"

export function customMiddleware(req: NextRequest) {
	console.log("customMiddleware :  ----->")
	return NextResponse.next()
}

export default withAuth(
	function middleware(req: NextRequest) {
		const res = customMiddleware(req)
		if (res) return res
		return NextResponse.next()
	},
	{
		callbacks: {
			authorized: ({ req, token }) => {
				// "/auth/:path*" 경로에 대해 인증을 무시하고 접근을 허용합니다.
				if (req.nextUrl.pathname.startsWith("/auth/")) {
					console.log("in authorized callback - auth")
					return true // 인증 없이 접근 허용
				}
				// 그 외의 경로에 대해서는 인증된 사용자만 접근 가능
				return !!token
			}
		}
	}
	// (req: NextRequest) => {
	// 	console.log("auth middleware: ", req)
	// 	const res = customMiddleware(req)
	// 	if (res) return res
	// 	return NextResponse.next()
	// },
	// {
	// 	pages: {
	// 		signIn: "/auth/login" // Redirect to /auth/login if not authenticated
	// 	}
	// }
)

// See "Matching Paths" below to learn more
export const config = {
	matcher: ["/auth/:path*"]
}

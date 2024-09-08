import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import { withAuth } from "next-auth/middleware"

export function customMiddleware(req: NextRequest) {
	return NextResponse.next()
}

export default withAuth(
	(req: NextRequest) => {
		console.log("auth middleware: ", req)
		const res = customMiddleware(req)
		if (res) return res
		return NextResponse.next()
	},
	{
		pages: {
			signIn: "/auth/login" // Redirect to /auth/login if not authenticated
		}
	}
)

// See "Matching Paths" below to learn more
export const config = {
	matcher: []
}

import { NextRequest, NextResponse } from "next/server"
import _ from "lodash"

const authSignupPath = "/auth/signup"

export function signUpMiddleware(req: NextRequest) {
	const queryParam: { [key: string]: any } = req.nextUrl.search
		? _.reduce(
				_.split(req.nextUrl.search.slice(1), "&"),
				(result, param) => {
					const [key, value] = _.split(param, "=")
					_.assignIn(result, { [key]: value })
					return result
				},
				{}
			)
		: {}
	if (!queryParam["step"]) {
		return NextResponse.redirect(new URL(`/auth/signup?step=1`, req.url))
	}
}

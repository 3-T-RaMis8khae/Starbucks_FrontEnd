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
)

export const config = {
	/*
		"/auth/:path*"
	 */
	matcher: []
}

/*

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { routes } from './config/routes';
import { getToken } from 'next-auth/jwt';

const withAuth = async (req: NextRequest, token: boolean) => {
  const url = req.nextUrl.clone();
  const { pathname } = req.nextUrl;
  if (!token) {
    url.pathname = routes.signIn;
    url.search = `callbackUrl=${pathname}`;

    return NextResponse.redirect(url);
  }
};

const FALLBACK_URL = '/';
const withOutAuth = async (
  req: NextRequest,
  token: boolean,
  to: string | null
) => {
  const url = req.nextUrl.clone();

  if (token) {
    url.pathname = to ?? FALLBACK_URL;
    url.search = '';

    return NextResponse.redirect(url);
  }
};

const withAuthList = [routes.cart, routes.mypage];
const withOutAuthList = [routes.signIn];

export default async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });
  const accessToken = token?.accessToken;
  const { searchParams } = request.nextUrl;
  const callbackUrl = searchParams.get('callbackUrl');
  const { pathname } = request.nextUrl;
  const isWithAuth = withAuthList.includes(pathname);
  const isWithOutAuth = withOutAuthList.includes(pathname);

  if (isWithAuth) return withAuth(request, !!accessToken);
  else if (isWithOutAuth)
    return withOutAuth(request, !!accessToken, callbackUrl);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|fonts|images).*)'],
};



 */

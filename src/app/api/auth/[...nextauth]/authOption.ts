import CredentialsProvider from "next-auth/providers/credentials"
import { NextAuthOptions } from "next-auth"

export const authOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				username: { label: "LoginId", type: "text" },
				password: { label: "Password", type: "password" }
			},
			async authorize(
				credentials: Record<string, string> | undefined,
				req: any
			): Promise<any> {
				console.log("authorize", credentials, req)
				if (!isCredentialsExist(credentials)) return null

				// todo : requet sigin api  and get user data
				// -- example --
				// const res = await fetch(`http://localhost:8080/api/v1/auth/sign-in`, {
				// 	method: 'POST',
				// 	headers: {
				// 		'Content-Type': 'application/json',
				// 	},
				// 	body: JSON.stringify({
				// 		email: credentials.email,
				// 		password: credentials.password,
				// 	}),
				// });
				//
				// if (res.ok) {
				// 	const user = (await res.json()) as commonResType<userDataType>;
				// 	console.log('user', user.data);
				// 	const data = user.data as userDataType;
				// 	return data;
				// }
				const user = { id: 1, name: "Test User" }
				return user
			}
		})
	],
	secret: process.env.NEXTAUTH_SECRET,
	callbacks: {
		async signIn({ user, account, profile, email, credentials }: any) {
			console.log("signIn", user, account, profile, email, credentials)
			return true
		},
		async jwt({ token, user }: { token: any; user: any }) {
			// console.log("token", token, "user", user)
			return { ...token, ...user }
		},
		async session({ session, token }: { session: any; token: any }) {
			// console.log("session", session, "token", token)
			session.user = token
			return session
		}
	},
	pages: {
		signIn: "/auth/login"
	}
}

const isCredentialsExist = (
	credentials: Record<string, string> | undefined
): boolean => {
	if (!credentials) return false
	return !!(credentials.loginId && credentials.password)
}

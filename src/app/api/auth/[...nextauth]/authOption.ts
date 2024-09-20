import CredentialsProvider from "next-auth/providers/credentials"
import { NextAuthOptions } from "next-auth"
import { signInAction } from "@/action/auth/signInAction"
import { MemberType } from "@/type/member/member"

export const authOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				username: { label: "LoginId", type: "text" },
				password: { label: "Password", type: "password" }
			},
			async authorize(
				credentials: Record<string, string> | undefined
			): Promise<any> {
				console.log("authorize : \n\n", credentials, "\n\n")
				// console.log("request : \n\n", req, "\n\n\n\n")
				if (!isCredentialsExist(credentials)) return null

				const res = await signInAction({
					loginId: credentials?.loginId as string,
					password: credentials?.password as string
				})

				if (res.ok) {
					const signInReturn = await res.json()
					return signInReturn.res as MemberType
				} else {
					return null
				}
			}
		})
	],
	secret: process.env.NEXTAUTH_SECRET,
	callbacks: {
		async signIn({ user, account, profile, email, credentials }) {
			console.log(
				"signIn callback in authOption",
				user,
				account,
				profile,
				email,
				credentials
			)

			return true
		},
		async jwt({ token, user }) {
			// console.log(
			// 	"\n\n jwt token in authOption : \n\n",
			// 	token,
			// 	"\n\nuser\n\n",
			// 	user
			// )
			return { ...token, ...user }
		},
		async session({ session, token }) {
			// console.log(
			// 	"\n\nsession in authOption\n\n",
			// 	session,
			// 	"\n\ntoken\n\n",
			// 	token
			// )
			session.user = token
			return session
		}
	},
	pages: {
		signIn: "/auth/login",
		error: "/auth/error"
	}
}

const isCredentialsExist = (
	credentials: Record<string, string> | undefined
): boolean => {
	if (!credentials) return false
	return !!(credentials.loginId && credentials.password)
}

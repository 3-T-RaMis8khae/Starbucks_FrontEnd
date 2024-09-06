import NextAuth from "next-auth"
import { CredentialsProvider } from "next-auth/providers/credentials"

const handler = NextAuth({
	providers: [],
	// Add more configuration options here
	secret: process.env.NEXTAUTH_SECRET
})

export { handler as GET, handler as POST }

import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import React from "react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/authOption"
import AuthContextProvider from "@/provider/AuthContextProvider"
import { DialogContextProvider } from "@/provider/dialogContextProvider"
import { GlobalDialog } from "@/components/molecule/dialog/globalDialog"
import { QueryProvider } from "@/provider/QueryProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: {
		default: "SPHAROS 5TH STARBUCKS APP",
		template: "%s | SPHAROS 5TH STARBUCKS APP"
	},
	description: "1차프로젝트 SPHAROS 5TH",
	icons: { icon: "/assets/images/icons/icon.png" },
	metadataBase: new URL("https://spharos5th.com"),
	openGraph: {
		url: "https://spharos5th.com",
		title: "SPHAROS 5TH",
		description: "1차프로젝트 SPHAROS 5TH",
		images: [{ url: "/assets/images/og/og_image.png" }]
	}
}

export default async function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	const session = await getServerSession(authOptions)
	const isAuth = !!session?.user
	return (
		<html lang="en">
			<body className={inter.className}>
				<AuthContextProvider isAuth={isAuth}>
					<QueryProvider>
						<DialogContextProvider>
							{children}
							<GlobalDialog />
						</DialogContextProvider>
					</QueryProvider>
				</AuthContextProvider>
			</body>
		</html>
	)
}

import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import AuthProvider from "@/provider/authProvider"
import React from "react"

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

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<AuthProvider>{children}</AuthProvider>
			</body>
		</html>
	)
}

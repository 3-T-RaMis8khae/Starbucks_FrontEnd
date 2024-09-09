import React from "react"
import ShopMainNav from "@/components/atom/nav/shopMainNav"

export default function MainLayout({
	children
}: {
	children: Readonly<React.ReactNode>
}) {
	return (
		<>
			<ShopMainNav />
			{children}
		</>
	)
}

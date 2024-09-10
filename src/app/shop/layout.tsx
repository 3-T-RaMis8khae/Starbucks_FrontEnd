import React from "react"
import ShopBaseHeader from "@/components/molecule/header/shopBaseHeader"

export default function StoreLayout({
	children
}: {
	children: Readonly<React.ReactNode>
}) {
	return (
		<main>
			<ShopBaseHeader />
			{children}
		</main>
	)
}

import React from "react"
import ProductEventLinkList from "@/components/atom/link/productEventLinkList"

export default function BestLayout({
	children
}: {
	children: Readonly<React.ReactNode>
}) {
	return (
		<>
			<ProductEventLinkList />
			{children}
		</>
	)
}

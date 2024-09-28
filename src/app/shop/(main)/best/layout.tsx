import React from "react"
import ProductEventLinkList from "@/components/atom/link/productEventLinkList"
import { bestProductNavItems } from "@/dummy/best-product-data"

export default function BestLayout({
	children
}: {
	children: Readonly<React.ReactNode>
}) {
	return (
		<>
			<ProductEventLinkList productNavItems={bestProductNavItems} />
			{children}
		</>
	)
}

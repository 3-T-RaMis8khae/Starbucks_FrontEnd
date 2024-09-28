import React from "react"
import ProductEventLinkList from "@/components/atom/link/productEventLinkList"
import { productNavItems } from "@/dummy/product-data"

export default function BestLayout({
	children
}: {
	children: Readonly<React.ReactNode>
}) {
	return (
		<>
			<ProductEventLinkList productNavItems={productNavItems} />
			{children}
		</>
	)
}

import React from "react"
import ProductDetail from "@/components/organism/product/productDetail"

interface PageProps {
	params: {
		productId: string
	}
}

function Page({ params }: PageProps) {
	return (
		<div>
			<ProductDetail />
		</div>
	)
}

export default Page

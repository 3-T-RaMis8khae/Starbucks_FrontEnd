import React from "react"
import ProductDetail from "@/components/organism/product/productDetail"

interface PageProps {
	params: {
		productId: string
	}
}

function Page({ params }: PageProps) {
	return (
		<div className="hidden-y-scroll">
			<ProductDetail />
		</div>
	)
}

export default Page

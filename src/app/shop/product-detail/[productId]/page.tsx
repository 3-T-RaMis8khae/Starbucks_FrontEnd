import React from "react"
import ProductDetail from "@/components/organism/product/productDetail"
import ProductOrderButton from "@/components/molecule/product/productOrderButton"

interface PageProps {
	params: {
		productId: string
	}
}

function Page({ params }: PageProps) {
	const productId = params.productId
	return (
		<main className="pb-[105px]">
			<ProductDetail productId={productId} />
			<ProductOrderButton productId={productId} />
		</main>
	)
}

export default Page

import React from "react"
import ProductDetail from "@/components/organism/product/productDetail"
import ProductOrderButton from "@/components/molecule/product/productOrderButton"

interface PageProps {
	params: {
		productId: string
	}
}

function Page({ params }: PageProps) {
	return (
		<main className="pb-[105px]">
			<ProductDetail />
			<ProductOrderButton />
		</main>
	)
}

export default Page

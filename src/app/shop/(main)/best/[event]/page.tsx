import React from "react"
import ProductList from "@/components/atom/product/productList"
import ProductItemDy from "@/components/atom/product/productItemDy"
import { bestProductObj } from "@/dummy/best-product-data"

interface PageProps {
	params: {
		event: string
	}
}

function Page({ params }: PageProps) {
	const productItems =
		bestProductObj.find((productObj) => productObj.query === params.event)
			?.items || bestProductObj[0].items
	return (
		<section>
			<div className="px-[30px] py-[30px]">
				<ProductList>
					{productItems.map((productItem) => (
						<ProductItemDy key={productItem.uuid} item={productItem} />
					))}
				</ProductList>
			</div>
		</section>
	)
}

export default Page

import React from "react"
import ProductList from "@/components/atom/product/productList"
import { mainProductsObj, productNavItems } from "@/dummy/product-data"
import ProductItemDy from "@/components/atom/product/productItemDy"
import ProductEventLinkList from "@/components/atom/link/productEventLinkList"

interface PageProps {
	params: {
		event: string
	}
}

function Page({ params }: PageProps) {
	const productItems =
		mainProductsObj.find((productObj) => productObj.query === params.event)
			?.items || mainProductsObj[0].items
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

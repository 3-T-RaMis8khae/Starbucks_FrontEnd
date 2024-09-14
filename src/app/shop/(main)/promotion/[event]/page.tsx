import React from "react"
import ProductList from "@/components/atom/product/productList"
import { productItems } from "@/dummy/product-data"
import ProductItem from "@/components/atom/product/productItem"

interface PageProps {
	params: {
		event: string
	}
}

function Page({ params }: PageProps) {
	return (
		<section>
			<div>Page params : {params.event} image</div>
			<div className="px-[30px] py-4">
				<ProductList>
					{productItems.map((productItem) => (
						<ProductItem key={productItem.uuid} item={productItem} />
					))}
				</ProductList>
			</div>
		</section>
	)
}

export default Page

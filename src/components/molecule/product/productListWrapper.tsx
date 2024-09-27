import React from "react"

import ProductItem from "@/components/atom/product/productItem"
import ProductList from "@/components/atom/product/productList"

interface ProductListWrapperProps {
	productIds: number[]
}

function ProductListWrapper({ productIds }: ProductListWrapperProps) {
	console.log("ProductListWrapper --  productIds : \n", productIds)

	return (
		<ProductList>
			{productIds.map((id) => (
				<ProductItem key={id} id={id} />
			))}
		</ProductList>
	)
}

export default ProductListWrapper

"use client"

import React from "react"
import { useQueries } from "@tanstack/react-query"
import { getProductInfoAndThumbnail } from "@/action/product/productAction"
import ProductList from "@/components/atom/product/productList"
import ProductItemSkeleton from "@/components/atom/product/ProductItemSkeleton"
import {
	GetProductInfoResponse,
	GetProductThumbnailResponse
} from "@/type/shop/product"
import ProductItemCL from "@/components/page/product/listpage/productItemCL"

interface ProductItemsWrapperProps {
	productItemIds: number[]
}

function ProductItemsWrapper({ productItemIds }: ProductItemsWrapperProps) {
	const productItemQueries = useQueries({
		queries: productItemIds.map((id) => ({
			queryKey: ["productInfo", id],
			queryFn: () => getProductInfoAndThumbnail(id),
			refetchOnWindowFocus: false,
			refetchOnMount: false
		}))
	})

	if (productItemQueries.find((query) => query.isLoading)) {
		return (
			<ProductList>
				{productItemQueries.map((query, index) => {
					return <ProductItemSkeleton key={index} />
				})}
			</ProductList>
		)
	}

	return (
		<>
			<ProductList>
				{productItemQueries.map((query, index) => (
					<ProductItemCL
						key={index}
						productInfo={query?.data?.productInfo as GetProductInfoResponse}
						productThumbnail={
							query?.data?.productThumbnail as GetProductThumbnailResponse
						}
					/>
				))}
			</ProductList>
		</>
	)
}

export default ProductItemsWrapper

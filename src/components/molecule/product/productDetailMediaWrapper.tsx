import React from "react"
import ProductDetailMedia from "@/components/atom/product/productDetailMedia"

export interface ProductDetailMediaWrapperProps {
	media: Array<{ uuid: string; url: string }>
}

function ProductDetailMediaWrapper({ media }: ProductDetailMediaWrapperProps) {
	return (
		<div className="flex flex-col gap-4 pt-6">
			<span className="text-sb-black-100 font-bold text-xl app-px">상품</span>

			{media.map((item) => (
				<ProductDetailMedia key={item.uuid} media={item} />
			))}
		</div>
	)
}

export default ProductDetailMediaWrapper

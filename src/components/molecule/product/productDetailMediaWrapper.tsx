import React from "react"
import ProductDetailMedia from "@/components/atom/product/productDetailMedia"
import ShowMoreButton from "@/components/atom/button/showMoreButton"
import ShowMoreProductWrapper from "@/components/molecule/product/showMoreProductWrapper"

export interface ProductDetailMediaWrapperProps {
	media: Array<{ uuid: string; url: string }>
}

function ProductDetailMediaWrapper({ media }: ProductDetailMediaWrapperProps) {
	return (
		<div className="flex flex-col gap-4 pt-6">
			<span className="text-sb-black-100 font-bold text-xl app-px">상품</span>

			<ShowMoreProductWrapper>
				{media.map((item) => (
					<ProductDetailMedia key={item.uuid} media={item} />
				))}
			</ShowMoreProductWrapper>
		</div>
	)
}

export default ProductDetailMediaWrapper

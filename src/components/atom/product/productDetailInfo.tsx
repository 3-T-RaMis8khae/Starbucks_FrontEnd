import React from "react"
import { toPrice } from "@/lib/productUtils"

export interface ProductDetailInfoProps {
	wrapperProps?: React.HTMLAttributes<HTMLDivElement>
	product: {
		title: string
		description: string
		price: number
	}
}

function ProductDetailInfo({ product, wrapperProps }: ProductDetailInfoProps) {
	return (
		<div
			{...wrapperProps}
			className={`flex flex-col gap-4 app-px ${wrapperProps?.className ?? ""}`}
		>
			<div className="flex justify-between items-start gap-2">
				<span className="text-sb-black-100 font-bold text-2xl">
					{product.title}
				</span>
			</div>
			{product.description && (
				<p className="text-sb-black-100 text-base">{product.description}</p>
			)}
			<span className="text-sb-black-100 font-bold text-2xl">
				{toPrice(product.price)}원
			</span>
		</div>
	)
}

export default ProductDetailInfo

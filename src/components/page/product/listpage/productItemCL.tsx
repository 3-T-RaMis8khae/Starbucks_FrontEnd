"use client"

import React from "react"
import Link from "next/link"
import ProductThumbnail from "@/components/atom/product/productThumbnail"
import { toDiscountPercent, toDiscountPrice, toPrice } from "@/lib/productUtils"
import {
	GetProductInfoResponse,
	GetProductThumbnailResponse
} from "@/type/shop/product"

interface ProductItemProps {
	productInfo: GetProductInfoResponse
	productThumbnail: GetProductThumbnailResponse
	wrapperClass?: string
}

function ProductItemCL({
	wrapperClass,
	productInfo,
	productThumbnail
}: ProductItemProps) {
	return (
		<Link
			href={`/shop/product-detail/${productThumbnail.productId}`}
			className={`flex flex-col flex-1 gap-1 ${wrapperClass}`}
		>
			<ProductThumbnail
				imageProps={{
					src: String(productThumbnail?.src),
					alt: `${String(productInfo?.name)}.png`
				}}
			/>
			<span className="text-sb-black-100 font-normal text-base break-words ">
				{productInfo?.name}
			</span>

			{productInfo?.isDiscounted ? (
				<div>
					<span className="text-sb-gray-100 font-normal text-base line-through">
						{toPrice(productInfo?.price)}원
					</span>
					<div className="flex justify-between items-center gap-1">
						<span className="text-sb-black-100 font-bold text-base">
							{toDiscountPrice(productInfo?.price, productInfo?.discountRate)}원
						</span>
						<span className="text-sb-green-100 font-bold text-base">
							{toDiscountPercent(productInfo?.discountRate)}
						</span>
					</div>
				</div>
			) : (
				<div className="flex justify-between items-center gap-1">
					<span className="text-sb-black-100 font-bold text-base">
						{toPrice(Number(productInfo?.price))}원
					</span>
				</div>
			)}
		</Link>
	)
}

export default ProductItemCL

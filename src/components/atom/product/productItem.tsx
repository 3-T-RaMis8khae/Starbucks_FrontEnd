import React from "react"
import Link from "next/link"
import { ProductItemType } from "@/type/shop/product"
import ProductThumbnail from "@/components/atom/product/productThumbnail"
import { toDiscountPercent, toDiscountPrice, toPrice } from "@/lib/productUtils"
import {
	getProductInfo,
	getProductThumbnail
} from "@/action/product/productAction"

interface ProductItemProps {
	id: number
	wrapperClass?: string
}

async function ProductItem({ wrapperClass, id }: ProductItemProps) {
	const productInfo = await getProductInfo(id)
	const productImage = await getProductThumbnail(id)
	return (
		<Link
			href={`/shop/product-detail/${id}`}
			className={`flex flex-col flex-1 gap-1 ${wrapperClass}`}
		>
			<ProductThumbnail
				imageProps={{
					src: productImage.src,
					alt: `${productInfo.name}.png`
				}}
			/>
			<span className="text-sb-black-100 font-normal text-base break-words ">
				{productInfo?.name}
			</span>

			{productInfo.isDiscounted ? (
				<div>
					<span className="text-sb-gray-100 font-normal text-base line-through">
						{toPrice(productInfo?.price)}원
					</span>
					<div className="flex justify-between items-center gap-1">
						<span className="text-sb-black-100 font-bold text-base">
							{toDiscountPrice(productInfo.price, productInfo.discountRate)}원
						</span>
						<span className="text-sb-green-100 font-bold text-base">
							{toDiscountPercent(productInfo.discountRate)}
						</span>
					</div>
				</div>
			) : (
				<div className="flex justify-between items-center gap-1">
					<span className="text-sb-black-100 font-bold text-base">
						{toPrice(productInfo.price)}원
					</span>
				</div>
			)}
		</Link>
	)
}

export default ProductItem

import React from "react"
import Link from "next/link"
import { ProductItemType } from "@/type/shop/product"
import ProductThumbnail from "@/components/atom/logo/productThumbnail"
import { toDiscountPercent, toDiscountPrice, toPrice } from "@/lib/productUtils"

interface ProductItemProps {
	item: ProductItemType
	wrapperClass?: string
}

function ProductItem({ item, wrapperClass }: ProductItemProps) {
	return (
		<Link
			href={`/shop/product-detail/${item.uuid}`}
			className={`flex flex-col flex-1 gap-1 ${wrapperClass}`}
		>
			<ProductThumbnail
				imageProps={{
					src: item.thumbnail,
					alt: `${item.name}.png`
				}}
			/>
			<span className="text-sb-black-100 font-normal text-base break-words ">
				{item.name}
			</span>

			{item.discountRate ? (
				<div>
					<span className="text-sb-gray-100 font-normal text-base line-through">
						{toPrice(item.price)}원
					</span>
					<div className="flex justify-between items-center gap-1">
						<span className="text-sb-black-100 font-bold text-base">
							{toDiscountPrice(item.price, item.discountRate)}원
						</span>
						<span className="text-sb-green-100 font-bold text-base">
							{toDiscountPercent(item.discountRate)}
						</span>
					</div>
				</div>
			) : (
				<div className="flex justify-between items-center gap-1">
					<span className="text-sb-black-100 font-bold text-base">
						{toPrice(item.price)}원
					</span>
				</div>
			)}
		</Link>
	)
}

export default ProductItem

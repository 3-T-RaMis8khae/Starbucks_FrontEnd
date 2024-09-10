import React from "react"
import Link from "next/link"
import { ProductItemType } from "@/type/shop/product"
import ProductThumbnail from "@/components/atom/logo/productThumbnail"
import { toPrice } from "@/lib/productUtils"

interface ProductItemProps {
	item: ProductItemType
}

function ProductItem({ item }: ProductItemProps) {
	return (
		<Link
			href={`/shop/product-detail/${item.uuid}`}
			className="flex flex-col flex-1 gap-1.5"
		>
			<ProductThumbnail
				imageProps={{ src: item.thumbnail, alt: `${item.name}.png` }}
			/>
			<span className="text-sb-black-100 font-medium text-base break-words ">
				{item.name}
			</span>
			<span className="text-sb-black-100 font-bold text-base">
				{toPrice(item.price)}원
			</span>
		</Link>
	)
}

export default ProductItem

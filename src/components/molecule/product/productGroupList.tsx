import React from "react"
import { ProductGroupType } from "@/type/shop/product"
import ProductItem from "@/components/atom/product/productItem"

interface ProductGroupListProps {
	groupItem: ProductGroupType
}

function ProductGroupList({ groupItem }: ProductGroupListProps) {
	return (
		<div className="flex flex-col gap-4 overflow-x-hidden w-full">
			<span className="text-1xl font-bold">{groupItem.title}</span>
			<div className="grid grid-rows-1 gap4 hidden-x-scroll">
				{groupItem.items.map((item) => (
					<ProductItem key={item.uuid} item={item} />
				))}
			</div>
		</div>
	)
}

export default ProductGroupList

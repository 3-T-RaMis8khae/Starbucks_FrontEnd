import React from "react"
import { ProductGroupType } from "@/type/shop/product"
import ProductItemDy from "@/components/atom/product/productItemDy"

interface ProductGroupListProps {
	groupItem: ProductGroupType
}

function ProductGroupList({ groupItem }: ProductGroupListProps) {
	return (
		<div className="flex flex-col gap-4 overflow-x-hidden w-full">
			<span className="text-2xl font-bold app-px">{groupItem.title}</span>
			<div className="grid grid-rows-1 gap-4 hidden-x-scroll grid-flow-col app-px">
				{groupItem.items.map((item) => (
					<ProductItemDy key={item.uuid} item={item} wrapperClass={"w-48"} />
				))}
			</div>
		</div>
	)
}

export default ProductGroupList

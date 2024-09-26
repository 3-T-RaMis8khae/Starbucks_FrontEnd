import React from "react"
import { getAllTopProductCategoriesAction } from "@/action/product-category/productCategoryAction"
import { mapProductCategoryFrom } from "@/lib/productCategoryUtils"
import {
	BottomProductCategoryType,
	MiddleProductCategoryType,
	ProductCategoryType,
	TopProductCategoryType
} from "@/type/shop/product-category"
import _ from "lodash"
import { redirect } from "next/navigation"
import ProductCateg from "@/components/atom/category/productCateg"

interface ProductCategWrapperProps {
	params: {
		categCode: Array<string> | undefined
	}
}

async function ProductCategWrapper({ params }: ProductCategWrapperProps) {
	const res = await getAllTopProductCategoriesAction(params.categCode ?? [])
	const categoryList: ProductCategoryType[][] = res.map(
		(
			item:
				| TopProductCategoryType[]
				| MiddleProductCategoryType[]
				| BottomProductCategoryType[]
		) => {
			if (_.isNull(item) || _.isUndefined(item)) redirect("/not-found")

			const productCateg = item.map((categ) => mapProductCategoryFrom(categ))
			return productCateg
		}
	)

	return (
		<>
			{categoryList.map(
				(item, index) =>
					item.length > 0 && (
						<ProductCateg
							key={index}
							categoryList={item}
							categoryCodeList={params.categCode ?? []}
							type={item[0].type}
						/>
					)
			)}
		</>
	)
}

export default ProductCategWrapper
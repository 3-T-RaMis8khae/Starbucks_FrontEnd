import React from "react"

import { getTopProductCategoriesAction } from "@/action/product-category/productCategoryAction"
import { trimTopCategory } from "@/lib/actionUtils"
import {
	AllTopProductCategory,
	ProductCategoryDepthType,
	ProductCategoryType
} from "@/type/shop/product-category"
import _ from "lodash"
import { getCategoryPath } from "@/lib/productCategoryUtils"
import Link from "next/link"

export interface ProductCategProps {
	categoryList: ProductCategoryType[]
	categoryCodeList: string[]
	type: ProductCategoryDepthType
}

async function ProductCateg({
	categoryList,
	categoryCodeList,
	type
}: ProductCategProps) {
	// if (type === "top") {
	// 	categoryList = _.concat([AllTopProductCategory], categoryList)
	// }
	// let topCategories = _.concat([AllTopProductCategory])
	// console.log("ProductCateg -=--=-= ", categoryList, categoryCodeList)

	return (
		<ul className="h-11 hidden-x-scroll flex items-center border-b-[1px] border-b-sb-gray-0 select-none">
			{categoryList.map((item) => {
				return (
					<li key={item.code} className="whitespace-nowrap px-3">
						<Link
							href={getCategoryPath(item, categoryCodeList)}
							replace={true}
							className={`text-sb-gray-200 font-normal text-base ${_.some(categoryCodeList, (categCode) => categCode === item.code) && "text-sb-green-100"}`}
						>
							{trimTopCategory(item.name)}
						</Link>
					</li>
				)
			})}
		</ul>
	)
}

export default ProductCateg

import React from "react"

import { getTopProductCategoriesAction } from "@/action/product-category/productCategoryAction"
import { trimTopCategory } from "@/lib/actionUtils"
import { AllTopProductCategory } from "@/type/shop/product-category"
import _ from "lodash"

async function ProductListCateg() {
	let topCategories = _.concat(
		[AllTopProductCategory],
		await getTopProductCategoriesAction()
	)

	return (
		<ul className="h-11 hidden-x-scroll flex items-center border-b-[1px] border-b-sb-gray-0 select-none">
			{topCategories.map((item) => {
				return (
					<li key={item.topCategoryCode} className="whitespace-nowrap px-3">
						<button className="text-sb-gray-200 font-normal text-base">
							{trimTopCategory(item.topCategoryName)}
						</button>
					</li>
				)
			})}
		</ul>
	)
}

export default ProductListCateg

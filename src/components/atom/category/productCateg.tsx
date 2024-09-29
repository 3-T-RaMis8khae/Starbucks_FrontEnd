import React from "react"

import {
	ProductCategoryDepthType,
	ProductCategoryQuery,
	ProductCategoryType
} from "@/type/shop/product-category"
import _ from "lodash"
import { getCategoryPath } from "@/lib/productCategoryUtils"
import Link from "next/link"

export interface ProductCategProps {
	categoryList: ProductCategoryType[]
	categoryCodeObj: ProductCategoryQuery
	type: ProductCategoryDepthType
}

async function ProductCateg({
	categoryList,
	categoryCodeObj
}: ProductCategProps) {
	const categList = _.map(_.values(categoryCodeObj), (value) => value)

	// todo : make this component client to implement focus scroll usability
	return (
		<ul className="h-11 hidden-x-scroll flex items-center border-b-[1px] border-b-sb-gray-0 select-none">
			{categoryList.map((item) => {
				return (
					<li key={item.code} className="whitespace-nowrap px-3">
						<Link
							href={getCategoryPath(item, categoryCodeObj)}
							replace={true}
							className={`text-sb-gray-200 font-normal text-base ${_.some(categList, (categCode) => String(categCode) === item.code) && "text-sb-green-100"}`}
						>
							{item.name}
						</Link>
					</li>
				)
			})}
		</ul>
	)
}

export default ProductCateg

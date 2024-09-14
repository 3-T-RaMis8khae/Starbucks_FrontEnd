import React from "react"

// dummy-data
import { testProductCategs } from "@/dummy/product-category-data"

function ProductListCateg() {
	return (
		<ul className="h-[45px] hidden-x-scroll flex items-center border-b-[1px] border-b-sb-gray-0 select-none">
			{testProductCategs.map((item) => {
				return (
					<li key={item.id} className="whitespace-nowrap px-3">
						<button className="text-sb-gray-200 font-normal text-base">
							{item.name}
						</button>
					</li>
				)
			})}
		</ul>
	)
}

export default ProductListCateg

"use client"

import React, { useState } from "react"
import Image from "next/image"

import CaretDownURL from "@/assets/svg/caret-down.svg?url"
import CaretUpURL from "@/assets/svg/caret-up.svg?url"

// dummy-data
import { testProductCategFilter } from "@/dummy/product-category-data"

function ProductCategFilter() {
	const [isOpenAll, setIsOpenAll] = useState<boolean>(false)

	const getProductCategFilter = (
		endIdx: number = testProductCategFilter.length,
		isAlone: boolean = false
	) =>
		testProductCategFilter.slice(0, endIdx).map((item) => {
			return (
				<div
					key={item.filter.id}
					className={`
							flex items-center h-[50px]
							text-sb-gray-200 font-normal text-base
							border-b-sb-gray-0 border-b-[1px] select-none
							${isAlone && "last-of-type:border-b-sb-gray-100"}
						`}
				>
					<div className="whitespace-nowrap text-left px-3 min-w-[80px] font-bold z-1 bg-white">
						{item.filter.name}
					</div>
					<ul className="px-1 hidden-x-scroll flex items-center bg-white">
						{item.items.map((item) => {
							return (
								<li key={item.id} className="whitespace-nowrap px-3">
									<button>{item.name}</button>
								</li>
							)
						})}
					</ul>
				</div>
			)
		})

	return (
		<>
			{testProductCategFilter.length > 2 ? (
				<>
					{getProductCategFilter(isOpenAll ? testProductCategFilter.length : 2)}

					<button
						onClick={() => setIsOpenAll(!isOpenAll)}
						className="
							flex items-center justify-center gap-2
							text-sb-gray-200 font-bold text-base h-[50px] w-full
							border-b-sb-gray-100 border-b-[1px]
						"
					>
						{isOpenAll ? "접기" : "필터 더보기"}
						<Image
							priority
							width={20}
							height={20}
							src={isOpenAll ? CaretUpURL : CaretDownURL}
							alt={isOpenAll ? "caret-up.svg" : "caret-down.svg"}
						/>
					</button>
				</>
			) : (
				getProductCategFilter(testProductCategFilter.length, true)
			)}
		</>
	)
}

export default ProductCategFilter

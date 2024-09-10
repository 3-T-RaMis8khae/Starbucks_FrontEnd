"use client"

import React, { useState } from "react"
import Image from "next/image"

import CaretDownURL from "@/assets/svg/caret-down.svg?url"
import CaretUpURL from "@/assets/svg/caret-up.svg?url"

interface ProductListCategItem {
	id: string
	name: string
}

interface ProductListCategFilterItem {
	id: string
	name: string
}

const testProductCategFilter: Array<{
	filter: ProductListCategItem
	items: Array<ProductListCategFilterItem>
}> = [
	{
		filter: { id: "1", name: "용량" },
		items: [
			{ id: "2", name: "Short" },
			{ id: "3", name: "Tall" },
			{ id: "4", name: "Grande" },
			{ id: "5", name: "Venti" },
			{ id: "6", name: "Trenta" }
		]
	},
	{
		filter: { id: "2", name: "가격" },
		items: [
			{ id: "1", name: "1만원 미만" },
			{ id: "2", name: "2만원대" },
			{ id: "3", name: "3만원대" },
			{ id: "4", name: "4만원대" },
			{ id: "5", name: "5만원 이상" }
		]
	},
	{
		filter: { id: "3", name: "카테고리" },
		items: [
			{ id: "1", name: "플라스틱 텀블러" },
			{ id: "2", name: "스테인리스 텀블러" },
			{ id: "3", name: "보온병" },
			{ id: "4", name: "머그컵" },
			{ id: "5", name: "티포트" },
			{ id: "6", name: "커피포트" }
		]
	}
]

function ProductListCategFilter() {
	const [isOpenAll, setIsOpenAll] = useState<boolean>(false)

	const getProductCategFilter = (
		endIdx: number = testProductCategFilter.length,
		isAlone: boolean = false
	) => {
		return testProductCategFilter.slice(0, endIdx).map((item) => {
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
	}

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

export default ProductListCategFilter

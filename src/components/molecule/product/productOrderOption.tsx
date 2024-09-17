"use client"

import React from "react"
import IconButton from "@/components/atom/icon/iconButton"
import BaseHr from "@/components/atom/divider/baseHr"

import MinusCircleURL from "@/assets/svg/minus-circle.svg?url"
import PlusCircleURL from "@/assets/svg/plus-circle.svg?url"

interface ProductOrderOptionProps {}

function ProductOrderOption(props: ProductOrderOptionProps) {
	const [isOptionOpen, setIsOptionOpen] = React.useState(false)
	const [productCount, setProductCount] = React.useState(1)
	return (
		<>
			<div
				className="w-full h-8 flex items-center justify-center"
				onClick={() => {
					setIsOptionOpen(!isOptionOpen)
				}}
			>
				<span className="w-[40px] h-1 bg-sb-gray-100 rounded-lg"></span>
			</div>

			<div
				className={`w-full transition-max-height duration-700 ease-in-out z-0 ${isOptionOpen ? "max-h-[1000px]" : "max-h-0 overflow-hidden"} `}
			>
				{/* Product info box */}
				<div className="flex flex-col gap-4 app-mx p-3 bg-gray-50 rounded-lg">
					<span className=" text-sm text-sb-gray-200 font-norma break-words">
						애니버서리 가디언 글라스 콜드컵 473ml
					</span>

					{/* Product price and count*/}
					<div className=" flex items-center justify-between gap-2">
						<div className="flex items-center justify-between w-[100px]">
							<IconButton
								buttonProps={{
									onClick: () => {
										if (productCount > 1) setProductCount(productCount - 1)
									}
								}}
								imageProps={{
									src: MinusCircleURL,
									alt: "minus-circle.svg",
									width: 24,
									height: 24,
									className: `${productCount === 1 ? "opacity-50" : ""}`
								}}
							/>
							<span className="text-base text-sb-black-100 font-bold">
								{productCount}
							</span>
							<IconButton
								buttonProps={{
									onClick: () => {
										setProductCount(productCount + 1)
									}
								}}
								imageProps={{
									src: PlusCircleURL,
									alt: "plus-circle.svg",
									width: 24,
									height: 24
								}}
							/>
						</div>
						<span className="text-sm text-sb-black-100 font-bold">
							20,000원
						</span>
					</div>
				</div>

				<BaseHr className="my-4 border-b-gray-200" />

				{/* Product */}
				<div className="flex items-baseline justify-end gap-2 app-px">
					<span className="text-sm text-sb-black-100 font-bold">합계</span>
					<span className="text-xl text-sb-black-100 font-bold">32,000원</span>
				</div>
			</div>
		</>
	)
}

export default ProductOrderOption

import React from "react"

import CaretRightURL from "@/assets/svg/caret-right.svg?url"
import Link from "next/link"
import Image from "next/image"
import BaseHr from "@/components/atom/divider/baseHr"

interface ProductCategoryNavBoxProps {}

// todo : might need to apply interceptor routing for it
function ProductCategoryNavList(props: ProductCategoryNavBoxProps) {
	const categoryList: { title: string; subTitle: string; href: string }[] = [
		{
			title: "기획전",
			subTitle: "진행중인 기획적을 만나보세요.",
			href: "/shop/promotion"
		},
		{
			title: "베스트",
			subTitle: "스타벅스의 베스트 상품을 만나보세요.",
			href: "/shop/best"
		}
	]

	return (
		<nav className="w-full p-6 bg-gray-50 flex flex-col">
			{categoryList.map((category, index) => (
				<>
					<Link
						key={index}
						href={category.href}
						className="flex justify-between items-center"
					>
						<div className="flex flex-col justify-center gap-1">
							<span className="text-lg font-semibold">{category.title}</span>
							<span className="text-sm font-normal text-sb-gray-100">
								{category.subTitle}
							</span>
						</div>

						<Image
							src={CaretRightURL}
							alt={"caret-right.svg"}
							width={24}
							height={24}
						/>
					</Link>
					{index !== categoryList.length - 1 && <BaseHr className="my-6" />}
				</>
			))}
		</nav>
	)
}

export default ProductCategoryNavList

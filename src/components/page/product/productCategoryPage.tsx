import React from "react"
import ProductCategoryTitle from "@/components/atom/title/productCategoryTitle"
import BaseHr from "@/components/atom/divider/baseHr"
import Link from "next/link"
import Image from "next/image"
import ProductCategoryNavList from "@/components/molecule/nav/productCategoryNavList"
import CaretRightURL from "@/assets/svg/caret-right.svg?url"

interface ProductCategoryPageProps {
	children?: React.ReactNode
}

function ProductCategoryPage({ children }: ProductCategoryPageProps) {
	return (
		<section className="h-lvh flex flex-col justify-between">
			<div className="app-px">
				<ProductCategoryTitle />

				<BaseHr className="my-6" />

				<div className="flex justify-end">
					<Link href={"/shop/product-list"} className="flex gap-2 w-fit">
						<span className="text-sm text-sb-gray-100">전체 상품 보기</span>
						<Image
							src={CaretRightURL}
							alt={"caret-right.svg"}
							width={20}
							height={20}
						/>
					</Link>
				</div>
				<ul className="grid grid-cols-3 gap-4 pt-4 pb-10">{children}</ul>
			</div>
			<ProductCategoryNavList />
		</section>
	)
}

export default ProductCategoryPage

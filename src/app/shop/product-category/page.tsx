import ProductCategoryTitle from "@/components/atom/title/productCategoryTitle"
import BaseHr from "@/components/atom/divider/baseHr"
import Image from "next/image"
import CaretRightURL from "@/assets/svg/caret-right.svg?url"
import Link from "next/link"

import ProductCategoryLink from "@/components/atom/product/productCategoryLink"
import ProductCategoryNavList from "@/components/molecule/nav/productCategoryNavList"

// dummy-data
import { productCategoryList } from "@/dummy/product-catogory-nav"

// note : might need to change h-lvh to another for ux
export default function ProductCategoryPage() {
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
				<div className="grid grid-cols-3 gap-4 pt-4 pb-10">
					{productCategoryList.map((item, index) => (
						<ProductCategoryLink
							key={index}
							linkProps={{ href: item.href }}
							imageProps={{ src: item.imgURL, alt: item.alt }}
							title={item.title}
						/>
					))}
				</div>
			</div>
			<ProductCategoryNavList />
		</section>
	)
}

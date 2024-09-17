import React from "react"
import { ProductReviewType } from "@/type/shop/review"
import Image from "next/image"

import CaretRightURL from "@/assets/svg/caret-right.svg?url"

interface ProductReviewItemProps {
	productReview: ProductReviewType
}

function ProductReviewItem({ productReview }: ProductReviewItemProps) {
	return (
		<div className="flex flex-col gap-2 w-full">
			<div>
				<div className="">
					<span>score comp</span>
					<span className="text-xs font-normal text-sb-black-100">
						{productReview.userName}
					</span>
				</div>

				<Image
					src={CaretRightURL}
					alt={"caret-right.svg"}
					width={18}
					height={18}
				/>
			</div>

			<span className="text-sm font-normal text-sb-black-100">
				{productReview.content}
			</span>
			{productReview.images?.map((image) => (
				<img key={image} src={image} alt="review" />
			))}
			<span className="text-xs font-normal text-sb-gray-200">
				{productReview.createdAt}
			</span>
		</div>
	)
}

export default ProductReviewItem

import React from "react"
import Image from "next/image"
import Rating from "@mui/material/Rating"

import CaretRightURL from "@/assets/svg/caret-right.svg?url"
import ReviewThumbnail from "@/components/atom/review/reviewThumbnail"
import HorizontalScrollWrapper from "@/components/atom/wrapper/horizontalScrollWrapper"
import { getReviewImage, getReviewInfo } from "@/action/review/revewAction"
import { getCreatedAt } from "@/lib/dayjsUtils"

interface ProductReviewItemProps {
	reviewId: string | number
	wrapperProps?: React.HTMLProps<HTMLDivElement>
}

async function ProductReviewItem({
	wrapperProps,
	reviewId
}: ProductReviewItemProps) {
	const reviewInfo = await getReviewInfo(reviewId)
	const reviewImages = await getReviewImage(reviewId)

	return (
		<div
			{...wrapperProps}
			className={`flex flex-col gap-2 w-full ${wrapperProps?.className ?? ""}`}
		>
			<div className="flex justify-between app-px">
				<div className="flex items-center gap-2">
					<Rating
						name="review-rating"
						value={reviewInfo.star}
						readOnly
						precision={0.1}
						size={"small"}
					/>
					<span className="text-xs font-normal text-sb-black-100 self-end">
						{reviewInfo.nickName}
					</span>
				</div>

				<Image
					src={CaretRightURL}
					alt={"caret-right.svg"}
					width={14}
					height={14}
				/>
			</div>

			<span className="w-full text-sm font-normal text-sb-black-100 app-px">
				{reviewInfo.content}
			</span>
			{reviewImages.imageUrl.length > 0 && (
				<HorizontalScrollWrapper>
					{reviewImages.imageUrl?.map((image, idx) => (
						<ReviewThumbnail
							key={idx}
							wrapperProps={{ className: "w-20 h-20" }}
							imageProps={{ src: image, alt: image }}
						/>
					))}
				</HorizontalScrollWrapper>
			)}

			<span className="text-xs font-normal text-sb-gray-200 app-px">
				{getCreatedAt(reviewInfo.createAt)}
			</span>
		</div>
	)
}

export default ProductReviewItem

import React from "react"
import Rating from "@mui/material/Rating"
import HorizontalScrollWrapper from "@/components/atom/wrapper/horizontalScrollWrapper"

import ReviewThumbnail from "@/components/atom/review/reviewThumbnail"
import { thumbnails } from "@/dummy/product-group-data"
import { reviews } from "@/dummy/product-review-data"
import ProductReviewItem from "@/components/molecule/review/productReviewItem"
import BaseHr from "@/components/atom/divider/baseHr"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import CaretRightURL from "@/assets/svg/caret-right.svg?url"
import {
	getReviewIds,
	getReviewImage,
	getReviewInfo,
	getReviewSummaryResponse
} from "@/action/review/revewAction"
import _ from "lodash"
import { defaultPaginationRequest } from "@/type/common/request"
import { GetReviewIdsRequest } from "@/type/shop/review"

interface ProductReviewProps {
	productId: string
}

async function ProductReview({ productId }: ProductReviewProps) {
	const defaultPagination = _.assign(defaultPaginationRequest, { size: 5 })
	const req: GetReviewIdsRequest = {
		showPhoto: false,
		...defaultPagination
	}

	const reviewIds = await getReviewIds(productId, req)
	const reviewSummary = await getReviewSummaryResponse(productId)

	const totalReviewRating = _.round(reviewSummary.averageStar, 1)

	console.log("ProductReview ----- : \n", reviewIds, "\n\n", reviewSummary)

	return (
		<div className="flex flex-col py-4 border-t-[16px] border-t-sb-gray-0 ">
			<h1
				id="review-title"
				className="flex items-end min-h-16 mb-6 text-sb-black-100 font-bold text-xl app-px"
			>
				고객 리뷰
			</h1>
			<div id="review-total-score" className="flex items-end app-px">
				<Rating
					name="review-rating"
					value={totalReviewRating}
					readOnly
					precision={0.1}
					size={"large"}
				/>
				<span
					id="total-review-rating-score"
					className="text-sb-black-100 font-bold text-xl mx-2"
				>
					{totalReviewRating}
				</span>
				<span
					id="total-review-rating-count"
					className="text-sb-gray-200 font-medium text-base"
				>
					{reviewSummary.reviewCount}
				</span>
			</div>
			{/*<div id="review-media" className="flex flex-col pb-6">*/}
			{/*	<h2 className="text-sb-black-100 font-bold text-lg app-px py-5">*/}
			{/*		포토&동영상 리뷰*/}
			{/*	</h2>*/}
			{/*	<HorizontalScrollWrapper>*/}
			{/*		{thumbnails.map((thumbnail, index) => (*/}
			{/*			<ReviewThumbnail*/}
			{/*				key={thumbnail.id}*/}
			{/*				wrapperProps={{ className: "w-20 h-20" }}*/}
			{/*				imageProps={{ src: thumbnail.url, alt: thumbnail.url }}*/}
			{/*			/>*/}
			{/*		))}*/}
			{/*	</HorizontalScrollWrapper>*/}
			{/*</div>*/}
			<div id="review-list" className="flex flex-col ">
				{reviewIds.content.map((id, index, arr) => (
					<div key={index} className="flex flex-col">
						<ProductReviewItem
							reviewId={id}
							wrapperProps={{ className: "pt-4" }}
						/>
						{arr.length - 1 !== index && (
							<div className="w-full app-px">
								<BaseHr className={`border-sb-gray-100 pb-4`} />
							</div>
						)}
					</div>
				))}
			</div>

			<div className="w-full app-px">
				<Button
					variant={"ghost"}
					className="w-full h-10 flex items-center justify-center gap-4 px-0 mt-6 border-[1px] border-sb-gray-100"
				>
					<span className="text-sb-black-100 font-semibold text-base">
						더보기 ({reviewSummary.reviewCount})
					</span>
					<Image
						src={CaretRightURL}
						alt="caret-right.svg"
						width={20}
						height={20}
					/>
				</Button>
			</div>
		</div>
	)
}

export default ProductReview

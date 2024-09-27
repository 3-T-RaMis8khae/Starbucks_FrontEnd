import React from "react"

import { productDetailData_tumbler1 } from "@/dummy/product-detail-data"
import ProductDetailThumbnail from "@/components/atom/product/productDetailThumbnail"
import ProductDetailThumbnailCarousel from "@/components/atom/carousel/productDetailThumbnailCarousel"
import ProductDetailInfo from "@/components/atom/product/productDetailInfo"
import ProductDetailMediaWrapper from "@/components/molecule/product/productDetailMediaWrapper"
import ProductReview from "@/components/organism/review/productReview"
import {
	getProductDetailDescriptionAction,
	getProductDetailInfoAction,
	getProductDetailThumbnailAction
} from "@/action/product/productAction"
import _ from "lodash"

export interface ProductDetailProps {
	productId: string
}

async function ProductDetail({ productId }: ProductDetailProps) {
	const info = await getProductDetailInfoAction(productId)
	const thumbnails = await getProductDetailThumbnailAction(productId)
	const desc = await getProductDetailDescriptionAction(productId)

	const descList = _.split(desc.detail, ",").map((item, index) => ({
		uuid: index.toString(),
		url: item
	}))

	// todo : 상세 이미지 정보가 없으면 어떻게 하지 ?

	return (
		<div className="flex flex-col">
			{thumbnails.length > 1 ? (
				<ProductDetailThumbnailCarousel
					thumbnails={thumbnails.map((thumbnailObj, index) => ({
						src: thumbnailObj.url,
						alt: `${info.name + index}.png`
					}))}
				/>
			) : (
				<ProductDetailThumbnail
					imageProps={{
						src: thumbnails[0].url,
						alt: `${info.name}.png`
					}}
				/>
			)}

			<ProductDetailInfo
				wrapperProps={{ className: "py-6" }}
				product={{
					title: info.name,
					description: info.shortDescription,
					price: info.price
				}}
			/>

			<ProductDetailMediaWrapper media={descList} />

			<ProductReview productId={productId} />
		</div>
	)
}

export default ProductDetail

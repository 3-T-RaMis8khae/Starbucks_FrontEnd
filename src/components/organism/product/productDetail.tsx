import React from "react"

import {
	productDetailData_tumbler1,
	productDetailData_tumbler2
} from "@/dummy/product-detail-data"
import ProductDetailThumbnail from "@/components/atom/product/productDetailThumbnail"
import ProductDetailThumbnailCarousel from "@/components/atom/carousel/productDetailThumbnailCarousel"
import ProductDetailInfo from "@/components/atom/product/productDetailInfo"
import ProductDetailMediaWrapper from "@/components/molecule/product/productDetailMediaWrapper"

function ProductDetail() {
	return (
		<div className="flex flex-col">
			{productDetailData_tumbler1.thumbnails.length > 1 ? (
				<ProductDetailThumbnailCarousel
					thumbnails={productDetailData_tumbler1.thumbnails.map(
						(thumbnail, index) => ({
							src: thumbnail,
							alt: `${productDetailData_tumbler1.name + index}.png`
						})
					)}
				/>
			) : (
				<ProductDetailThumbnail
					imageProps={{
						src: productDetailData_tumbler1.thumbnails[0],
						alt: `${productDetailData_tumbler1.name}.png`
					}}
				/>
			)}

			<ProductDetailInfo
				wrapperProps={{ className: "py-6" }}
				product={{
					title: productDetailData_tumbler1.name,
					description: productDetailData_tumbler1.description,
					price: productDetailData_tumbler1.price
				}}
			/>

			<ProductDetailMediaWrapper media={productDetailData_tumbler1.images} />
		</div>
	)
}

export default ProductDetail

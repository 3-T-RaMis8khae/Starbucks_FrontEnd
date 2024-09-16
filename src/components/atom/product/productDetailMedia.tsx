import React from "react"
import Image, { ImageProps } from "next/image"

export interface ProductDetailMediaProps {
	media: { uuid: string; url: string }
	imageProps?: ImageProps
}

function ProductDetailMedia({ media, imageProps }: ProductDetailMediaProps) {
	return (
		<div className="relative w-full">
			<Image
				priority
				layout="fill"
				objectFit={"contain"}
				sizes="100%"
				{...imageProps}
				alt={imageProps?.alt ?? "product-detail.png"}
				src={media?.url ?? ""}
			/>
		</div>
	)
}

export default ProductDetailMedia

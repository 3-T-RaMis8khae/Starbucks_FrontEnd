import React from "react"
import Image, { ImageProps } from "next/image"

export interface ProductDetailMediaProps {
	media: { uuid: string; url: string }
	imageProps?: ImageProps
}

function ProductDetailMedia({ media, imageProps }: ProductDetailMediaProps) {
	return (
		<div className="inline-block relative">
			<Image
				priority
				fill
				{...imageProps}
				alt={imageProps?.alt ?? "product-detail.png"}
				src={media?.url ?? ""}
				className={`!w-auto !max-w-full !h-auto !relative`}
			/>
		</div>
	)
}

export default ProductDetailMedia

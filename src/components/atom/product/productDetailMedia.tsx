import React from "react"
import Image, { ImageProps } from "next/image"

export interface ProductDetailMediaProps {
	media: { uuid: string; url: string }
	imageProps?: ImageProps
}

function ProductDetailMedia({ media, imageProps }: ProductDetailMediaProps) {
	return (
		<div className="flex justify-center relative app-px">
			<Image
				priority
				fill
				{...imageProps}
				alt={imageProps?.alt ?? "product-detail.png"}
				src={media?.url ?? ""}
				className={`!w-full !max-w-full !h-auto !relative`}
			/>
		</div>
	)
}

export default ProductDetailMedia

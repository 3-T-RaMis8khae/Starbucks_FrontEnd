import Image, { ImageProps } from "next/image"
import React from "react"

interface ProductDetailThumbnailProps {
	wrapperProps?: React.HTMLProps<HTMLDivElement>
	imageProps?: ImageProps
}

function ProductDetailThumbnail({
	wrapperProps,
	imageProps
}: ProductDetailThumbnailProps) {
	return (
		<div
			{...wrapperProps}
			className={`object-cover aspect-square relative ${wrapperProps?.className ?? ""}`}
		>
			<Image
				priority
				fill
				sizes="100%"
				{...imageProps}
				alt={imageProps?.alt ?? "product-thumbnail.png"}
				src={imageProps?.src ?? ""}
				className={`rounded`}
			/>
		</div>
	)
}

export default ProductDetailThumbnail

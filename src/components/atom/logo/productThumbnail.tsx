import Image, { ImageProps } from "next/image"
import React from "react"

interface ProductThumbnailProps {
	wrapperProps?: React.HTMLProps<HTMLDivElement>
	imageProps?: ImageProps
}

function ProductThumbnail({ wrapperProps, imageProps }: ProductThumbnailProps) {
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
			/>
		</div>
	)
}

export default ProductThumbnail

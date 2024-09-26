import React from "react"
import Image, { ImageProps } from "next/image"

interface ReviewThumbnailProps {
	wrapperProps?: React.HTMLProps<HTMLDivElement>
	imageProps?: ImageProps
}

function ReviewThumbnail({ wrapperProps, imageProps }: ReviewThumbnailProps) {
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

export default ReviewThumbnail

import React from "react"
import Image, { ImageProps } from "next/image"
import Link from "next/link"
import { LinkProps } from "next/dist/client/link"

interface ProductCategoryAvatarProps {
	imageProps?: ImageProps
	title?: string
	linkProps?: LinkProps & { className?: string }
}

function ProductCategoryLink({
	imageProps,
	title,
	linkProps
}: ProductCategoryAvatarProps) {
	return (
		<Link
			{...linkProps}
			href={linkProps?.href ?? ""}
			className={`flex-1 flex flex-col justify-center items-center gap-4 object-cover ${linkProps?.className}`}
		>
			<Image
				{...imageProps}
				src={imageProps?.src ?? ""}
				alt={imageProps?.alt ?? ""}
				className={`rounded-full`}
			/>
			<span className="text-base font-normal">{title}</span>
		</Link>
	)
}

export default ProductCategoryLink

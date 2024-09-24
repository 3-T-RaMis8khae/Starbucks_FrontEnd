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
			className={`flex-1 flex flex-col justify-center items-center gap-4 ${linkProps?.className} ?? ""`}
		>
			<div className="w-full h-full relative object-cover aspect-square">
				<Image
					{...imageProps}
					fill
					sizes="100%"
					quality={80}
					src={imageProps?.src ?? ""}
					alt={imageProps?.alt ?? ""}
					className={`rounded-full`}
				/>
			</div>
			<span className="text-base font-normal">{title}</span>
		</Link>
	)
}

export default ProductCategoryLink

import React from "react"
import CloseURL from "@/assets/svg/close.svg?url"
import Link from "next/link"
import { LinkProps } from "next/dist/client/link"
import Image, { ImageProps } from "next/image"

interface IconLinkProps {
	linkProps?: LinkProps
	imageProps?: ImageProps
}

function IconLink({ linkProps, imageProps }: IconLinkProps) {
	return (
		<Link href={"/"} {...linkProps} className={`object-cover`}>
			<Image
				priority
				width={20}
				height={20}
				src={CloseURL}
				alt={"close.svg"}
				{...imageProps}
			/>
		</Link>
	)
}

export default IconLink

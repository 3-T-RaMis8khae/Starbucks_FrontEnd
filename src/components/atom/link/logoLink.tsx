import React from "react"
import CloseURL from "@/assets/svg/close.svg?url"
import Link from "next/link"
import { LinkProps } from "next/dist/client/link"
import Image, { ImageProps } from "next/image"

interface LogoLinkProps {
	linkProps?: LinkProps
	imageProps?: ImageProps
}

function LogoLink({ linkProps, imageProps }: LogoLinkProps) {
	return (
		<Link href={"/"} {...linkProps}>
			<Image
				width={20}
				height={20}
				src={CloseURL}
				alt={"close.svg"}
				{...imageProps}
			/>
		</Link>
	)
}

export default LogoLink

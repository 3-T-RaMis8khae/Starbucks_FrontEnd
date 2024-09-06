import Image, { ImageProps } from "next/image"
import React from "react"
import StarbucksSvgUrl from "@/assets/icon/startbucks.svg?url"

// might need to add more props
interface LogoProps {
	wrapperProps?: React.HTMLProps<HTMLDivElement>
	imageProps?: ImageProps
}

function Logo({ wrapperProps, imageProps }: LogoProps) {
	return (
		<div
			{...wrapperProps}
			className={`w-[60px] h-[60px] object-cover ${wrapperProps?.className}`}
		>
			<Image
				priority
				width={100}
				height={100}
				alt={"starbucks.svg"}
				src={StarbucksSvgUrl}
				{...imageProps}
			/>
		</div>
	)
}

export default Logo

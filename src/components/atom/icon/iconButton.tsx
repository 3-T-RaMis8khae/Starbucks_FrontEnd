import React from "react"
import { Button, ButtonProps } from "@/components/ui/button"
import Image, { ImageProps } from "next/image"
import CloseURL from "@/assets/svg/close.svg?url"

interface IconButtonProps {
	buttonProps?: ButtonProps
	imageProps?: ImageProps
}

function IconButton({ buttonProps, imageProps }: IconButtonProps) {
	return (
		<Button
			variant={"ghost"}
			{...buttonProps}
			className={`hover:bg-transparent p-0 object-cover h-fit`}
		>
			<Image
				width={20}
				height={20}
				src={CloseURL}
				alt={"close.svg"}
				{...imageProps}
			/>
		</Button>
	)
}

export default IconButton

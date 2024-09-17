"use client"

import React from "react"
import iconButton from "@/components/atom/icon/iconButton"
import Image, { ImageProps } from "next/image"
import { Button, ButtonProps } from "@/components/ui/button"
import CaretDownURL from "@/assets/svg/caret-down.svg?url"

interface ShowMoreButtonProps {
	buttonProps?: ButtonProps
	imageProps?: ImageProps
	onChangeHandler?: () => void
}

function ShowMoreButton({
	buttonProps,
	imageProps,
	onChangeHandler
}: ShowMoreButtonProps) {
	const [isShowMore, setIsShowMore] = React.useState(false)

	const onShowMoreClick = () => {
		onChangeHandler && onChangeHandler()
		setIsShowMore(!isShowMore)
	}

	return (
		<Button
			variant={"ghost"}
			onClick={onShowMoreClick}
			{...buttonProps}
			className={`hover:bg-transparent p-3 h-fit flex items-center justify-center w-full gap-2 rounded-3xl border-[1px] border-sb-gray-200 ${buttonProps?.className ?? ""}`}
		>
			<span className="text-sm text-sb-gray-200 font-normal">
				{isShowMore ? "상품정보 접기" : "상품정보 더보기"}
			</span>
			<Image
				width={16}
				height={16}
				src={CaretDownURL}
				alt={"caret-down.svg"}
				{...imageProps}
				className={`transform ${isShowMore ? "rotate-180" : "rotate-0"} ${imageProps?.className ?? ""}`}
			/>
		</Button>
	)
}

export default ShowMoreButton

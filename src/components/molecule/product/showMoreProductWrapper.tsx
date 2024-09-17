"use client"

import React from "react"
import ShowMoreButton from "@/components/atom/button/showMoreButton"

interface ShowMoreProductWrapperProps {
	children?: React.ReactNode
}

function ShowMoreProductWrapper({ children }: ShowMoreProductWrapperProps) {
	const [isShowMore, setIsShowMore] = React.useState(false)
	const onChangeHandler = () => {
		setIsShowMore(!isShowMore)
	}
	return (
		<div
			className={`flex flex-col relative ${!isShowMore && `h-[1000px] overflow-y-hidden`}`}
		>
			{children}
			<div
				className={`w-full app-px bg-white ${!isShowMore && "absolute left-0 bottom-0"}`}
			>
				<ShowMoreButton onChangeHandler={onChangeHandler} />
			</div>
		</div>
	)
}

export default ShowMoreProductWrapper

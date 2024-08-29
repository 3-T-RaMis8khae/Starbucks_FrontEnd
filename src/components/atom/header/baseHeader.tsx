import React from "react"

interface BaseHeaderProps {
	leftComponent?: React.ReactNode
	rightComponent?: React.ReactNode
	title: string
}

function BaseHeader(
	props: BaseHeaderProps = {
		leftComponent: <></>,
		rightComponent: <></>,
		title: ""
	}
) {
	return (
		<header className="w-full h-[50px] p-[10px] fixed flex items-center justify-between bg-white">
			{props.leftComponent}
			<h1 className="absolute select-none m-0 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] font-bold text-2xl text-black">
				{props.title}
			</h1>
			{props.rightComponent}
		</header>
	)
}

export default BaseHeader

import React from "react"

interface BaseHeaderProps {
	leftComponent?: React.ReactNode
	rightComponent?: React.ReactNode
	title?: string
}

function BaseHeader(
	props: BaseHeaderProps = {
		leftComponent: <></>,
		rightComponent: <></>,
		title: ""
	}
) {
	return (
		<header className="w-full h-[50px] py-[10px] px-[24px] fixed flex items-center justify-between bg-white">
			{props.leftComponent}
			<h1
				className="
					absolute select-none m-0
					top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]
					font-semibold text-sb-black-100
				"
			>
				{props.title}
			</h1>
			{props.rightComponent}
		</header>
	)
}

export default BaseHeader

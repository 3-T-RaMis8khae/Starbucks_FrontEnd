import React from "react"

interface BaseHeaderProps {
	leftComponent?: React.ReactNode
	rightComponent?: React.ReactNode
	middleComponent?: React.ReactNode
}

// note : There is a warning message about
//  "Skipping auto-scroll behavior due to `position: sticky` or `position: fixed` on element: "
//  when using Link and useRouter method.
function BaseHeader(
	props: BaseHeaderProps = {
		leftComponent: <></>,
		rightComponent: <></>,
		middleComponent: undefined
	}
) {
	return (
		<header className="z-50 fixed left-0 top-0 w-full h-[50px] py-[10px] px-[24px] flex items-center justify-between bg-white">
			{props.leftComponent}
			{props.middleComponent && (
				<div
					className="
					absolute select-none m-0
					top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]
					font-semibold text-sb-black-100
				"
				>
					{props.middleComponent}
				</div>
			)}

			{props.rightComponent}
		</header>
	)
}

export default BaseHeader

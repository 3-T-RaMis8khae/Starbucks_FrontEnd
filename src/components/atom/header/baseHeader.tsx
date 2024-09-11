import React from "react"

interface BaseHeaderProps {
	headerProps?: React.HTMLAttributes<HTMLElement>
	leftComponent?: React.ReactNode
	rightComponent?: React.ReactNode
	middleComponent?: React.ReactNode
}

// note : There is a warning message about
//  "Skipping auto-scroll behavior due to `position: sticky` or `position: fixed` on element: "
//  when using Link and useRouter method.
function BaseHeader({
	headerProps = {},
	leftComponent = <></>,
	rightComponent = <></>,
	middleComponent = <></>
}: BaseHeaderProps) {
	return (
		<header
			{...headerProps}
			className={`z-50 fixed left-0 top-0 w-full h-[56px] py-[10px] px-[24px] flex items-center justify-between bg-white ${headerProps?.className}`}
		>
			{leftComponent ?? <div></div>}
			{middleComponent && (
				<div
					className="
					absolute select-none m-0
					top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]
					font-bold text-sb-black-100
				"
				>
					{middleComponent}
				</div>
			)}

			{rightComponent ?? <div></div>}
		</header>
	)
}

export default BaseHeader

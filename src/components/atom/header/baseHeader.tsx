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
	leftComponent = <div></div>,
	rightComponent = <div></div>,
	middleComponent
}: BaseHeaderProps) {
	return (
		<header
			{...headerProps}
			className={`header-1 py-[10px] app-px items-center justify-between ${headerProps?.className}`}
		>
			{leftComponent}
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

			{rightComponent}
		</header>
	)
}

export default BaseHeader

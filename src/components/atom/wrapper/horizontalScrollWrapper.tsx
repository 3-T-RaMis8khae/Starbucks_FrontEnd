import React from "react"
import ProductItem from "@/components/atom/product/productItem"

interface HorizontalScrollWrapperProps {
	children?: React.ReactNode
	wrapperProps?: React.HTMLProps<HTMLDivElement>
	scrollElementProps?: React.HTMLProps<HTMLDivElement>
}

function HorizontalScrollWrapper({
	children,
	wrapperProps,
	scrollElementProps
}: HorizontalScrollWrapperProps) {
	return (
		<div
			{...wrapperProps}
			className={`flex flex-col overflow-x-hidden w-full ${wrapperProps?.className ?? ""}`}
		>
			<div
				{...scrollElementProps}
				className={`grid gap-4 hidden-x-scroll grid-flow-col grid-columns-max-content app-px ${scrollElementProps?.className ?? ""}`}
			>
				{children}
			</div>
		</div>
	)
}

export default HorizontalScrollWrapper

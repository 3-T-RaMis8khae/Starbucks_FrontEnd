import React from "react"

interface AuthSubTitleProps {
	titles: (string | React.ReactNode)[]
	wrapperProps?: React.HTMLProps<HTMLDivElement>
	titleProps?: React.HTMLProps<HTMLParagraphElement>
}

function AuthSubTitle({ titles, titleProps, wrapperProps }: AuthSubTitleProps) {
	return (
		<div
			{...wrapperProps}
			className={`flex flex-col gap-2 ${wrapperProps?.className}`}
		>
			{titles.map((title, index) => (
				<h2
					key={index}
					{...titleProps}
					className={`text-base ${titleProps?.className}`}
				>
					{title}
				</h2>
			))}
		</div>
	)
}

export default AuthSubTitle

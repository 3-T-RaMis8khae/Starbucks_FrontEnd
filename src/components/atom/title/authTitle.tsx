import React from "react"

interface AuthTitleProps {
	titles: (string | React.ReactNode)[]
	wrapperProps?: React.HTMLProps<HTMLDivElement>
	titleProps?: React.HTMLProps<HTMLParagraphElement>
}

function AuthTitle({ titles, titleProps, wrapperProps }: AuthTitleProps) {
	return (
		<div
			{...wrapperProps}
			className={`flex flex-col gap-2 ${wrapperProps?.className}`}
		>
			{titles.map((title, index) => (
				<p
					key={index}
					{...titleProps}
					className={`text-2xl text-sb-black-100 ${titleProps?.className}`}
				>
					{title}
				</p>
			))}
		</div>
	)
}

export default AuthTitle

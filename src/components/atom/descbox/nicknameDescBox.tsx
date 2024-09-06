import React from "react"

interface NicknameDescBoxProps {
	title: string | React.ReactNode
	descriptions: (string | React.ReactNode)[]
	wrapperProps?: React.HTMLProps<HTMLDivElement>
}

function NicknameDescBox({
	title,
	descriptions,
	wrapperProps
}: NicknameDescBoxProps) {
	return (
		<div
			{...wrapperProps}
			className={`w-full px-[30px] py-[20px] bg-sb-gray-0 flex flex-col ${wrapperProps?.className}`}
		>
			<p className="font-bold text-sm text-sb-gray-200">{title}</p>
			<ul className="input-desc *:before:!content-['•'] *:!text-sb-gray-200 !mt-2">
				{descriptions.map((desc, index) => (
					<li key={index}>{desc}</li>
				))}
			</ul>
		</div>
	)
}

export default NicknameDescBox

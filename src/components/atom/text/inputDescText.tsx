import React from "react"

interface InputDescTextProps {
	descriptions: (string | React.ReactNode)[]
	wrapperProps?: React.HTMLProps<HTMLUListElement>
}

function InputDescText({ descriptions, wrapperProps }: InputDescTextProps) {
	return (
		<ul {...wrapperProps} className={`input-desc ${wrapperProps?.className}`}>
			{descriptions.map((desc, index) => (
				<li key={index}>{desc}</li>
			))}
		</ul>
	)
}

export default InputDescText

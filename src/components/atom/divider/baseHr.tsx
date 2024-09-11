import React from "react"

interface BaseHrProps extends React.HTMLProps<HTMLHRElement> {}

function BaseHr(props: BaseHrProps) {
	return (
		<hr
			{...props}
			className={`w-full h-[1px] border-t-0 border-b-[1px] border-b-sb-gray-0 ${props.className}`}
		/>
	)
}

export default BaseHr

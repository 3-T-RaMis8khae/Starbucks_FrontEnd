"use client"

import React, { useRef, useState } from "react"
import { Input } from "@/components/ui/input"

interface LabelInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label_name?: string
}

function LabelInput(props: LabelInputProps) {
	const { label_name } = props
	const inputRef = useRef<HTMLInputElement>(null)
	const [isInputValue, setIsInputValue] = useState(!!inputRef.current?.value)

	return (
		<fieldset
			className="
        w-full pt-[16px] relative
        flex flex-col justify-between gap-1
        focus:outline-none
      "
			onClickCapture={() => {
				inputRef.current?.focus()
			}}
		>
			<Input
				ref={inputRef}
				name={`${props.name ?? "labelInput"}`}
				onChange={(event) => {
					if (event.target.value) {
						setIsInputValue(true)
					} else {
						setIsInputValue(false)
					}
				}}
				className={`
            h-[40px] w-full bg-transparent
            rounded-none border-0 border-b border-b-sb-gray-0 focus:border-b-sb-green-100
            peer/input
          `}
				{...props}
			></Input>
			<label
				htmlFor={`${props.name ?? "labelInput"}`}
				className={`
          transition-all duration-100
          absolute select-none text-sb-gray-200
          peer-focus/input:left-0 peer-focus/input:text-sb-black-100
          peer-focus/input:top-1 peer-focus/input:text-xs
          ${isInputValue ? "top-1 left-0 text-xs" : "text-base left-1 top-7"}
        `}
			>
				{label_name}
			</label>
		</fieldset>
	)
}

export default LabelInput

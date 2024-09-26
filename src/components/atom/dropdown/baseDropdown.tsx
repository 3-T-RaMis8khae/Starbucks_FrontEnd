"use client"

import * as React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"

import { Button } from "@/components/ui/button"
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import Image from "next/image"

import CaretDownURL from "@/assets/svg/caret-down.svg?url"

type Checked = DropdownMenuCheckboxItemProps["checked"]

interface BaseDropdownProps {
	defaultValue: string
	values: Array<DropdownValueType>
	onValueChange?: (value: string) => void
}

interface DropdownValueType {
	value: string

	[key: string]: any
}

// note: This component is not completed yet.
function BaseDropdown({
	defaultValue,
	values,
	onValueChange
}: BaseDropdownProps) {
	const [position, setPosition] = React.useState(defaultValue)
	const onChangeHandler = (value: string) => {
		setPosition(value)
		onValueChange?.(value)
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant={"ghost"}
					className="w-24 h-9 flex items-center justify-between px-0"
				>
					<span className="text-sb-gray-200 font-semibold text-base">
						{position}
					</span>
					<Image
						src={CaretDownURL}
						alt="caret-down.svg"
						width={20}
						height={20}
					/>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-32">
				<DropdownMenuRadioGroup
					value={position}
					onValueChange={onChangeHandler}
				>
					{values.map((value, index) => (
						<DropdownMenuRadioItem
							key={index}
							value={value.value}
							className="text-sb-gray-200 font-semibold text-base"
						>
							{value.value}
						</DropdownMenuRadioItem>
					))}
				</DropdownMenuRadioGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default BaseDropdown

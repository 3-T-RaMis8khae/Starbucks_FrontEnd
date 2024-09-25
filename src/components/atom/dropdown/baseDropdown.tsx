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

interface BaseDropdownProps {}

function BaseDropdown(props: BaseDropdownProps) {
	const [position, setPosition] = React.useState("추천순")

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
				<DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
					<DropdownMenuRadioItem
						value="추천순"
						className="text-sb-gray-200 font-semibold text-base"
					>
						추천순
					</DropdownMenuRadioItem>
					<DropdownMenuRadioItem
						value="신상품순"
						className="text-sb-gray-200 font-semibold text-base"
					>
						신상품순
					</DropdownMenuRadioItem>
					<DropdownMenuRadioItem
						value="낮은가격순"
						className="text-sb-gray-200 font-semibold text-base"
					>
						낮은가격순
					</DropdownMenuRadioItem>
					<DropdownMenuRadioItem
						value="높은가격순"
						className="text-sb-gray-200 font-semibold text-base"
					>
						높은가격순
					</DropdownMenuRadioItem>
				</DropdownMenuRadioGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default BaseDropdown

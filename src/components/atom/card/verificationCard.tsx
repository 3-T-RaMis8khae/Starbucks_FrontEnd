"use client"

import React, { useState } from "react"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { StaticImport } from "next/dist/shared/lib/get-img-props"

export type RadioType = string | number | readonly string[] | undefined
// eslint-disable-next-line no-unused-vars
type OnRadioChangeType = (radioName: RadioType) => void

interface VerificationCardProps {
	title?: string
	sub_title?: string
	image?: ImageProps
	radio_props: React.InputHTMLAttributes<HTMLInputElement>
	onRadioChange: OnRadioChangeType
	curCheck: string | number | readonly string[] | undefined
}

interface ImageProps {
	url: string | StaticImport
	alt: string
}

const verificationCardInit: VerificationCardProps = {
	title: "card title",
	sub_title: "card_subtitle",
	image: {
		url: "",
		alt: "image.png"
	},
	radio_props: {
		value: "radioValue"
	},
	onRadioChange: () => {},
	curCheck: "--"
}

function VerificationCard(props = verificationCardInit) {
	const { title, sub_title, image, radio_props, curCheck, onRadioChange } = props

	// const [isChecked, setIsChecked] = useState(false)

	return (
		<Card
			onClick={() => {
				onRadioChange(radio_props.value)
				console.log("on card click", curCheck, radio_props.value)
			}}
			className="
				w-full h-[85px] rounded-[8px]
				bg-white drop-shadow-md
				flex items-center justify-between
				p-[20px] border-none
			"
		>
			<div className="flex items-center select-none">
				{image?.url && (
					<div className="pr-3 select-none">
						<Image width="25" height="25" src={image.url} alt={image.alt}></Image>
					</div>
				)}
				<div className="flex flex-col gap-1.5">
					<span className="text-lg font-bold text-sb-black-100">{title}</span>
					<span className="text-xs text-sb-gray-100">{sub_title}</span>
				</div>
			</div>
			<input
				className="w-5 h-5 indeterminate::bg-sb-green-150"
				type="radio"
				checked={curCheck == radio_props.value}
				onChange={(event) => {
					onRadioChange(radio_props.value)
					console.log("on card click", curCheck, event.target.checked)
				}}
				{...radio_props}
			></input>
		</Card>
	)
}

export default VerificationCard

import React from "react"
import Image from "next/image"
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import caretRightURL from "@/assets/svg/caret-right.svg?url"
import Link from "next/link"

// ct => custom
interface CheckBoxProps {
	ct_showIcon?: boolean
	ct_icon?: string | StaticImport
	ct_icon_alt?: string
	ct_href?: string
	ct_terms?: string
	ct_container_props?: React.HTMLAttributes<HTMLInputElement>
}

export default function TermsItem(props: CheckBoxProps) {
	const ct_href = props.ct_href ?? "/"
	const ct_icon_alt = props.ct_icon_alt ?? ""

	return (
		<div
			{...props.ct_container_props}
			className={`w-full h-7 bg-white flex items-center justify-between ${props.ct_container_props?.className}`}
		>
			<div className="flex items-center">
				<span className="text-sm pl-2 select-none font-normal text-sb-black-100 cursor-pointer">
					{props.ct_terms}
				</span>
			</div>
			{props.ct_showIcon && (
				<Link
					href={ct_href}
					className="w-6 h-6 mr-2 flex items-center justify-center select-none"
				>
					<Image
						src={props.ct_icon ?? caretRightURL}
						alt={ct_icon_alt}
						width={18}
						height={18}
					></Image>
				</Link>
			)}
		</div>
	)
}

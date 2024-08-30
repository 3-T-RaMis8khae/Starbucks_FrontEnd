import React from "react"
import Image from "next/image"
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import { Checkbox } from "@/components/ui/checkbox"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import caretRightURL from "@/assets/svg/caret-right.svg?url"
import Link from "next/link"

// ct => custom
type CheckBoxProps = {
	ct_showIcon?: boolean
	ct_icon?: string | StaticImport
	ct_icon_alt?: string
	ct_href?: string
	ct_label?: string
}

const CheckBox = React.forwardRef<
	React.ElementRef<typeof CheckboxPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & CheckBoxProps
>(
	(
		{
			ct_showIcon = false,
			ct_icon = undefined,
			ct_icon_alt = "right-caret.svg",
			ct_href = "/",
			ct_label = "",
			...props
		},
		ref
	) => {
		return (
			<div className="w-full h-7 bg-white flex items-center justify-between">
				<div className="flex items-center">
					<Checkbox
						className="w-5 h-5 border-sb-green-100 data-[state=checked]:bg-sb-green-100"
						ref={ref}
						{...props}
					></Checkbox>
					<label
						htmlFor={`${props.id}`}
						className="text-sm pl-2 select-none font-normal text-sb-black-100 "
					>
						{ct_label}
					</label>
				</div>
				{ct_showIcon && (
					<Link
						href={ct_href}
						className="w-6 h-6 mr-2 flex items-center justify-center"
					>
						<Image
							src={ct_icon ?? caretRightURL}
							alt={ct_icon_alt}
							width={18}
							height={18}
						></Image>
					</Link>
				)}
			</div>
		)
	}
)
CheckBox.displayName = "CheckBox"

export default CheckBox

/*
function CheckBox(props: CheckBoxProps) {
	const { showIcon, icon, id } = props
	return (
		<div className="w-full h-7 bg-white flex items-center justify-between">
			<Checkbox id={}></Checkbox>
			<div className="grid pl-1">
				<label htmlFor=""></label>
			</div>
		</div>
	)
}
export default CheckBox
*/

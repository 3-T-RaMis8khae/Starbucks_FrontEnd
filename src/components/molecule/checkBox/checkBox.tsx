import React from "react"
import Image from "next/image"
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import { Checkbox } from "@/components/ui/checkbox"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import caretRightURL from "@/assets/svg/caret-right.svg?url"
import Link from "next/link"

// ct => custom
interface CheckBoxProps
	extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
	ct_showIcon?: boolean
	ct_icon?: string | StaticImport
	ct_icon_alt?: string
	ct_href?: string
	ct_label?: string
	ct_container_props?: React.HTMLAttributes<HTMLInputElement>
}

/*
 *  React.forwardRef<T,P>
 *  T: the type of the ref that is passed to the component.
 *     The ref is a reference to a DOM element or a React component instance.
 *
 *  P: the type of the props object that is passed to the component.
 * */
const CheckBox = React.forwardRef<
	React.ElementRef<typeof CheckboxPrimitive.Root>,
	CheckBoxProps
>(
	(
		{
			ct_showIcon = false,
			ct_icon = undefined,
			ct_icon_alt = "right-caret.svg",
			ct_href = "/",
			ct_label = "",
			ct_container_props = {},
			...props
		},
		ref
	) => {
		return (
			<div
				{...ct_container_props}
				className={`w-full h-7 bg-white flex items-center justify-between ${ct_container_props.className}`}
			>
				<div className="flex items-center">
					<Checkbox
						ref={ref}
						{...props}
						className={`w-5 h-5 border-sb-green-100 data-[state=checked]:bg-sb-green-100 ${props.className ?? ""}`}
					/>
					<label
						htmlFor={`${props.id}`}
						className="text-sm pl-2 select-none font-normal text-sb-black-100 cursor-pointer"
					>
						{ct_label}
					</label>
				</div>
				{ct_showIcon && (
					<Link
						href={ct_href}
						className="w-6 h-6 mr-2 flex items-center justify-center select-none"
					>
						<Image
							src={ct_icon ?? caretRightURL}
							alt={ct_icon_alt}
							width={18}
							height={18}
						/>
					</Link>
				)}
			</div>
		)
	}
)
CheckBox.displayName = "CheckBox"

export default CheckBox

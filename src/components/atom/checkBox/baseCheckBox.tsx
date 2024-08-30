import React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Checkbox } from "@/components/ui/checkbox"

interface BaseCheckBoxProps
	extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
	ct_label?: string
	ct_container_props?: React.HTMLAttributes<HTMLInputElement>
}

const BaseCheckBox = React.forwardRef<
	React.ElementRef<typeof CheckboxPrimitive.Root>,
	BaseCheckBoxProps
>(({ ct_label = "", ct_container_props = {}, ...props }, ref) => {
	return (
		<div
			{...ct_container_props}
			className={`h-7 bg-white flex items-center justify-between ${ct_container_props.className}`}
		>
			<div className="flex items-center">
				<Checkbox
					ref={ref}
					{...props}
					className={`w-4 h-4 border-sb-gray-100 data-[state=checked]:border-sb-green-100 data-[state=checked]:bg-sb-green-100 ${props.className}`}
				></Checkbox>
				<label
					htmlFor={`${props.id}`}
					className="text-sm pl-2 select-none font-normal text-sb-black-100 cursor-pointer"
				>
					{ct_label}
				</label>
			</div>
		</div>
	)
})
BaseCheckBox.displayName = "CheckBox"

export default BaseCheckBox

"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle } from "lucide-react"

import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const RadioGroup = React.forwardRef<
	React.ElementRef<typeof RadioGroupPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
	return (
		<RadioGroupPrimitive.Root
			className={cn("grid gap-2", className)}
			{...props}
			ref={ref}
		/>
	)
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const radioGroupItemVariants = {
	groupItem: cva(
		"border-2 aspect-square rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
		{
			variants: {
				variant: {
					default: "",
					productCategory: "border-sb-green-100"
				},
				size: {
					default: "h-4 w-4",
					productCategory: "w-5 h-5"
				}
			},
			defaultVariants: {
				variant: "default",
				size: "default"
			}
		}
	),
	circle: cva("rounded-full bg-black", {
		variants: {
			variant: {
				default: "",
				productCategory: "bg-sb-green-100"
			},
			size: {
				default: "h-2.5 w-2.5",
				productCategory: "h-3 w-3"
			}
		},
		defaultVariants: {
			variant: "default",
			size: "default"
		}
	})
}

export interface RadioGroupItemProps
	extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>,
		VariantProps<typeof radioGroupItemVariants.groupItem> {
	asChild?: boolean
}

const RadioGroupItem = React.forwardRef<
	React.ElementRef<typeof RadioGroupPrimitive.Item>,
	RadioGroupItemProps
>(({ className, variant, size, ...props }, ref) => {
	return (
		<RadioGroupPrimitive.Item
			ref={ref}
			className={cn(
				radioGroupItemVariants.groupItem({ variant, size, className })
			)}
			{...props}
		>
			<RadioGroupPrimitive.Indicator className="flex items-center justify-center">
				<span
					id="radio-group-time__circle"
					className={cn(radioGroupItemVariants.circle({ variant, size }))}
				></span>
			</RadioGroupPrimitive.Indicator>
		</RadioGroupPrimitive.Item>
	)
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }

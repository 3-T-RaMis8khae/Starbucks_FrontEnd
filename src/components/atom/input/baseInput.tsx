"use client"

import React, { HTMLInputTypeAttribute, useState } from "react"
import { Input } from "@/components/ui/input"
import Image from "next/image"

import PasswordInvisibleURL from "@/assets/svg/password-invisible.svg?url"
import PasswordVisibleURL from "@/assets/svg/password-visible.svg?url"
import CheckBoldURL from "@/assets/svg/check-bold-green.svg?url"

export interface BaseInputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	ct_container_props?: React.HTMLAttributes<HTMLInputElement>
	ct_is_error?: boolean
	ct_check_visible?: boolean
	ct_type?: HTMLInputTypeAttribute | undefined
}

/*
 *  React.forwardRef<T,P>
 *  T: the type of the ref that is passed to the component.
 *     The ref is a reference to a DOM element or a React component instance.
 *
 *  P: the type of the props object that is passed to the component.
 * */
const BaseInput = React.forwardRef<HTMLInputElement, BaseInputProps>(
	(
		{
			ct_container_props,
			ct_is_error = false,
			ct_check_visible = false,
			ct_type = undefined,
			...props
		},
		ref
	) => {
		const [visible, setVisible] = useState<boolean>(false)

		return (
			<div
				{...ct_container_props}
				className={`relative ${ct_container_props?.className ?? ""}`}
			>
				<Input
					ref={ref}
					type={
						ct_type && ct_type != "password"
							? ct_type
							: visible
								? "text"
								: "password"
					}
					{...props}
					className={`
						h-[40px] w-full bg-transparent py-[6px] pl-[4px] pr-[20px]
            			rounded-none border-0 border-b-[1.5px] border-b-sb-gray-0 
            			focus:border-b-sb-green-100 
            			placeholder:text-base placeholder:text-sb-gray-100
            			${ct_is_error && `border-b-sb-red-100 focus:!border-b-sb-red-100`}
            			${props.className}
          			`}
				/>
				<div className="flex items-center absolute right-0 top-[3px]">
					{(!ct_type || ct_type == "password") && (
						<>
							{visible ? (
								<Image
									src={PasswordVisibleURL}
									alt="visible.svg"
									width={34}
									height={34}
									className="cursor-pointer"
									onClick={() => setVisible(false)}
								/>
							) : (
								<Image
									src={PasswordInvisibleURL}
									alt="invisible.svg"
									width={34}
									height={34}
									className="cursor-pointer"
									onClick={() => setVisible(true)}
								/>
							)}
						</>
					)}

					{ct_check_visible && (
						<Image
							src={CheckBoldURL}
							alt="check-bold-green.svg"
							width={24}
							height={24}
							color="#01A862"
							className="text-sb-green-100"
						/>
					)}
				</div>
			</div>
		)
	}
)

BaseInput.displayName = "BaseInput"

export { BaseInput }

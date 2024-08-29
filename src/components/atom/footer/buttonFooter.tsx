import { Button } from "@/components/ui/button"
import React from "react"

interface BtFooterIf {
	button_props?: React.ButtonHTMLAttributes<HTMLButtonElement>
	button_title?: string
}

export default function ButtonFooter({
	button_props,
	button_title
}: BtFooterIf) {
	return (
		<footer
			className="
				w-full h-[90px] bg-white shadow-top shadow-[0_2px_10px_efeeed]
				flex justify-center
				fixed left-0 bottom-0
				px-10
			"
		>
			<Button
				variant="sbGreen"
				size="sbFooter"
				className="text-white w-full mt-5"
				{...{ props: button_props }}
			>
				{button_title}
			</Button>
		</footer>
	)
}

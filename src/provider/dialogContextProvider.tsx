"use client"

import React, { useRef, useState } from "react"
import { defaultDialogContext, DialogContext } from "@/context/dialogContext"
import { GlobalDialogType } from "@/type/components/dialog"

export const DialogContextProvider = ({
	children
}: {
	children: React.ReactNode
}) => {
	const [isDialogOpen, setIsDialogOpen] = useState(false)
	const [dialogContext, setDialogContext] =
		useState<Omit<GlobalDialogType, "setDialogContext" | "openHook">>(
			defaultDialogContext
		)
	return (
		<DialogContext.Provider
			value={{
				...dialogContext,
				...{
					type: "alert",
					confirm: {
						text: "확인",
						onClick: () => {
							setIsDialogOpen(false)
						}
					},
					cancel: {
						text: "취소",
						onClick: () => {
							setIsDialogOpen(false)
						}
					}
				},
				setDialogContext: setDialogContext,
				openHook: {
					open: isDialogOpen,
					setOpen: setIsDialogOpen
				}
			}}
		>
			{children}
		</DialogContext.Provider>
	)
}

"use client"

import React, { useState } from "react"
import { DialogContext } from "@/context/dialogContext"
import { GlobalDialogType } from "@/type/components/dialog"
import _ from "lodash"

export const DialogContextProvider = ({
	children
}: {
	children: React.ReactNode
}) => {
	const [isDialogOpen, setIsDialogOpen] = useState(false)
	const [dialogContext, setDialogContext] = useState<
		Omit<GlobalDialogType, "setDialogContext" | "openHook">
	>({})
	return (
		<DialogContext.Provider
			value={_.assign(
				{
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
					},
					setDialogContext: setDialogContext,
					openHook: {
						open: isDialogOpen,
						setOpen: setIsDialogOpen
					}
				},
				dialogContext
			)}
		>
			{children}
		</DialogContext.Provider>
	)
}

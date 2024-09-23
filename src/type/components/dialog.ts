import React, { LegacyRef } from "react"

export interface GlobalDialogType {
	headerContent?: string
	descriptionContent?: string
	type?: "alert" | "confirm"
	confirm?: {
		text: string
		onClick: () => void
	}
	cancel?: {
		text: string
		onClick: () => void
	}
	setDialogContext: SetDialogContextType
	openHook: {
		open: boolean
		setOpen: React.Dispatch<React.SetStateAction<boolean>>
	}
}

export type SetDialogContextType = React.Dispatch<
	React.SetStateAction<Omit<GlobalDialogType, "setDialogContext" | "openHook">>
>

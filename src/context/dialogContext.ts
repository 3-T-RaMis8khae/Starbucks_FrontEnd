"use client"
import { createContext, useContext } from "react"
import { GlobalDialogType } from "@/type/components/dialog"

export const defaultDialogContext: GlobalDialogType = {
	headerContent: "",
	descriptionContent: "",
	type: "alert",
	confirm: {
		text: "확인",
		onClick: () => {}
	},
	cancel: {
		text: "취소",
		onClick: () => {}
	},
	setDialogContext: () => {},
	openHook: {
		open: false,
		setOpen: () => {}
	}
}

export const DialogContext =
	createContext<GlobalDialogType>(defaultDialogContext)

export const useDialog = () => useContext(DialogContext)

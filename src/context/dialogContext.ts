"use client"
import { createContext, useContext } from "react"
import { GlobalDialogType } from "@/type/components/dialog"

export const DialogContext = createContext<GlobalDialogType>(
	{} as GlobalDialogType
)

export const useDialog = () => useContext(DialogContext)

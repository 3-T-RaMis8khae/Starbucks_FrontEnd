"use client"

import { useDialog } from "@/context/dialogContext"
import { useEffect } from "react"
import _ from "lodash"

export default async function Home() {
	// const dialogContext = useDialog()
	//
	// useEffect(() => {
	// 	if (!_.isEmpty(dialogContext)) {
	// 		dialogContext?.setDialogContext({
	// 			descriptionContent:
	// 				"로그인 정보가 일치하지 않습니다.\n 아이디나 비밀번호를 확인 후 다시 입력해주세요.",
	// 			type: "alert"
	// 		})
	// 	}
	// }, [])

	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			app page
			{/*<button*/}
			{/*	onClick={() => {*/}
			{/*		dialogContext?.openHook.setOpen(true)*/}
			{/*	}}*/}
			{/*>*/}
			{/*	test button*/}
			{/*</button>*/}
		</main>
	)
}

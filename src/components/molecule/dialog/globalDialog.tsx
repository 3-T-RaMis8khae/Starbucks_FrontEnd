"use client"

import React from "react"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle
} from "@/components/ui/customDialog"
import { Button } from "@/components/ui/button"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import BaseHr from "@/components/atom/divider/baseHr"
import { useDialog } from "@/context/dialogContext"

export function GlobalDialog() {
	const dialogContext = useDialog()
	{
		return (
			<Dialog open={dialogContext.openHook?.open}>
				{/* todo: need to change content class --> size */}
				<DialogContent>
					<DialogHeader className="p-6">
						{dialogContext?.headerContent ? (
							<DialogTitle className={`title__text`}>
								{dialogContext?.headerContent}
							</DialogTitle>
						) : (
							<VisuallyHidden>
								<DialogTitle className={`title__text`}>title</DialogTitle>
							</VisuallyHidden>
						)}
						<DialogDescription>
							{dialogContext?.descriptionContent}
						</DialogDescription>
					</DialogHeader>
					<div className="flex items-center justify-center gap-2">
						<Button
							variant={"sbGreenGhost"}
							className={"flex-1"}
							onClick={dialogContext?.confirm?.onClick}
						>
							{dialogContext?.confirm?.text}
						</Button>
						{dialogContext?.type === "alert" ? (
							<></>
						) : (
							<>
								<BaseHr className="!w-[1px] !h-5 border-l-[1px]" />
								<Button
									variant={"sbGreenGhost"}
									className={"flex-1"}
									onClick={dialogContext?.cancel?.onClick}
								>
									{dialogContext?.cancel?.text}
								</Button>
							</>
						)}
					</div>
				</DialogContent>
			</Dialog>
		)
	}
}

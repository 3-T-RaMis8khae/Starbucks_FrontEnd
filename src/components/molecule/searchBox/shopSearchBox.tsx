"use client"

import React from "react"
import { Input } from "@/components/ui/input"
import IconButton from "@/components/atom/icon/iconButton"
import { useRouter } from "next/navigation"
import CloseURL from "@/assets/svg/close.svg?url"
import SearchURL from "@/assets/svg/search.svg?url"

interface ShopSearchHeaderProps {}

function ShopSearchBox(props: ShopSearchHeaderProps) {
	const router = useRouter()
	const onCloseHandler = () => {
		router.back()
	}

	return (
		<header
			className={`
				z-50 sticky left-0 top-0 w-full h-[56px] 
				py-[10px] px-[24px]
				flex items-center justify-between gap-4
			`}
		>
			<div className="flex items-center gap-2 rounded border-0 flex-1 bg-sb-gray-input h-[35px] px-[10px]">
				<Input
					placeholder={"검색어를 입력해주세요"}
					className={`bg-transparent border-none h-[30px] py-0 pl-2 pr-4 flex-1 placeholder:text-sb-gray-0`}
				/>
				<IconButton
					buttonProps={{
						onClick: () => {}
					}}
					imageProps={{
						src: SearchURL,
						alt: "search.svg",
						width: 21,
						height: 21
					}}
				/>
			</div>

			<IconButton
				buttonProps={{ onClick: onCloseHandler }}
				imageProps={{
					src: CloseURL,
					alt: "close.svg",
					width: 23,
					height: 23
				}}
			/>
		</header>
	)
}

export default ShopSearchBox

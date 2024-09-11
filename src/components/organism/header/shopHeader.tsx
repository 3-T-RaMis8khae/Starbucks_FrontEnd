"use client"

import React from "react"
import { usePathname, useRouter } from "next/navigation"
import ShopSearchBox from "@/components/molecule/searchBox/shopSearchBox"
import BaseHeader from "@/components/atom/header/baseHeader"

import CloseURL from "@/assets/svg/close.svg?url"
import IconButton from "@/components/atom/icon/iconButton"
import ShopBaseHeader from "@/components/molecule/header/shopBaseHeader"

interface ShopHeaderProps {}

function ShopHeader(props: ShopHeaderProps) {
	const router = useRouter()
	const pathname = usePathname()

	const onCloseHandler = () => {
		router.back()
	}

	return (
		<>
			{pathname.startsWith("/shop/search") ? (
				<></>
			) : pathname.startsWith("/shop/product-category") ? (
				<BaseHeader
					headerProps={{ className: "!sticky" }}
					rightComponent={
						<IconButton
							buttonProps={{ onClick: onCloseHandler }}
							imageProps={{
								src: CloseURL,
								alt: "close.svg",
								width: 23,
								height: 23
							}}
						/>
					}
				/>
			) : (
				<ShopBaseHeader />
			)}
		</>
	)
}

export default ShopHeader

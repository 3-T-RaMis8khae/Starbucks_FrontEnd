"use client"

import React from "react"
import { usePathname, useRouter } from "next/navigation"
import BaseHeader from "@/components/atom/header/baseHeader"

import CloseURL from "@/assets/svg/close.svg?url"
import CaretLeftURL from "@/assets/svg/caret-left.svg?url"
import IconButton from "@/components/atom/icon/iconButton"
import ShopBaseHeader from "@/components/molecule/header/shopBaseHeader"

interface ShopHeaderProps {}

function ShopHeader(props: ShopHeaderProps) {
	const router = useRouter()
	const pathname = usePathname()

	const onCloseHandler = () => {
		router.back()
	}
	const onProductMainHandler = () => {
		router.replace("/shop/main")
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
			) : pathname.startsWith("/shop/cart") ? (
				<BaseHeader
					headerProps={{ className: "!sticky" }}
					leftComponent={
						<IconButton
							buttonProps={{ onClick: onCloseHandler }}
							imageProps={{
								src: CaretLeftURL,
								alt: "caret-left.svg",
								width: 23,
								height: 23
							}}
						/>
					}
					middleComponent={"장바구니"}
				/>
			) : pathname.startsWith("/shop/product") ||
			  pathname.startsWith("/shop/product-detail") ? (
				<ShopBaseHeader
					leftComponent={
						<IconButton
							buttonProps={{ onClick: onProductMainHandler }}
							imageProps={{
								src: CaretLeftURL,
								alt: "caret-left.svg",
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

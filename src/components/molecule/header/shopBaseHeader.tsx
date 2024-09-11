import React from "react"
import BaseHeader from "@/components/atom/header/baseHeader"
import IconLink from "@/components/atom/icon/iconLink"
import IconButton from "@/components/atom/icon/iconButton"
import CartURL from "@/assets/svg/cart.svg?url"
import SearchURL from "@/assets/svg/search.svg?url"
import ListURL from "@/assets/svg/list-bold.svg?url"

interface ShopHeaderProps {
	leftComponent?: React.ReactNode
	rightComponent?: React.ReactNode
	middleComponent?: React.ReactNode
}

function ShopBaseHeader({
	leftComponent,
	middleComponent,
	rightComponent
}: ShopHeaderProps) {
	return (
		<BaseHeader
			headerProps={{ className: "!sticky" }}
			leftComponent={
				leftComponent ?? (
					<IconLink
						linkProps={{ href: "/shop/product-category" }}
						imageProps={{
							src: ListURL,
							alt: "list.svg",
							width: 23,
							height: 23
						}}
					/>
				)
			}
			middleComponent={middleComponent ?? "온라인 스토어"}
			rightComponent={
				rightComponent ?? (
					<div className="flex items-center gap-3">
						<IconLink
							linkProps={{ href: "/shop/search" }}
							imageProps={{
								src: SearchURL,
								alt: "search.svg",
								width: 21,
								height: 21
							}}
						/>
						<IconLink
							linkProps={{ href: "/my/cart" }}
							imageProps={{
								src: CartURL,
								alt: "cart.svg",
								width: 23,
								height: 23
							}}
						/>
					</div>
				)
			}
		/>
	)
}

export default ShopBaseHeader

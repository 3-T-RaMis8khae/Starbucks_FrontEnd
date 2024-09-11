"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export interface NavItem {
	name: string
	href: string
}

function ShopMainNav() {
	const pathname = usePathname()

	const navItems: NavItem[] = [
		{ name: "메인", href: "/shop/main" },
		{ name: "기획전", href: "/shop/promotion" },
		{
			name: "베스트",
			href: "/shop/best"
		},
		{ name: "마이페이지", href: "/shop/my-page" }
	]
	return (
		<nav className={`w-full h-[30px] flex`}>
			{navItems.map((navItem, index) => (
				<Link
					key={index}
					href={navItem.href}
					className={`
						flex items-center justify-center
						flex-1 py-1 px-2 text-xs font-medium text-sb-gray-100
						${pathname === navItem.href ? "!text-sb-black-100 border-b-[2px] border-b-sb-green-100" : ""}
					`}
				>
					{navItem.name}
				</Link>
			))}
		</nav>
	)
}

export default ShopMainNav

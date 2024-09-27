"use client"

import React, { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { NavItem } from "@/components/atom/nav/shopMainNav"

export interface ProductEventNavItem {
	name: string
	href?: string
}

const navItems: NavItem[] = [
	{ name: "추석 기프트", href: "/shop/promotion/ch" },
	{ name: "골프 MD 출시", href: "/shop/promotion/golf" },
	{
		name: "오텀 펭귄북스 콜라보",
		href: "/shop/promotion/penguin"
	},
	{ name: "오텀 애니버서리", href: "/shop/promotion/autumn" },
	{ name: "추석 기프트", href: "/shop/promotion/ch" },
	{ name: "골프 MD 출시", href: "/shop/promotion/golf" },
	{
		name: "오텀 펭귄북스 콜라보",
		href: "/shop/promotion/penguin"
	},
	{ name: "오텀 애니버서리", href: "/shop/promotion/autumn" }
]

// todo : need to add server action to fetch event nav data
function ProductEventLinkList() {
	// const pathname = usePathname()
	const router = useRouter()

	const [activeIndex, setActiveIndex] = useState(0)
	const UlRef = useRef<HTMLUListElement>(null)
	const itemRefs = useRef<Array<HTMLLIElement>>([])

	// itemRefs를 초기화합니다.
	itemRefs.current = []

	const addToRefs = (el: HTMLLIElement) => {
		if (el && !itemRefs.current.includes(el)) {
			itemRefs.current.push(el)
		}
	}

	// 클릭 시 이동 거리 계산 함수
	const handleItemClick = (index: number) => {
		setActiveIndex(index)
		const clickedItem = itemRefs.current[index]

		if (clickedItem) {
			clickedItem.scrollIntoView({
				behavior: "smooth",
				inline: "center",
				block: "nearest"
			})
		}
	}

	useEffect(() => {
		// 컴포넌트가 마운트된 후 초기 위치 설정
		handleItemClick(activeIndex)
		router.push(navItems[activeIndex].href)
	}, [])

	useEffect(() => {
		const handleResize = () => {
			handleItemClick(activeIndex)
		}

		window.addEventListener("resize", handleResize)
		return () => {
			window.removeEventListener("resize", handleResize)
		}
	}, [])

	return (
		<ul
			className={`header-3 hidden-x-scroll items-center border-b-[1px] border-b-sb-gray-0 select-none`}
			ref={UlRef}
		>
			{navItems.map((navItem, index) => (
				<li key={index} ref={addToRefs} className="whitespace-nowrap px-3">
					<Link
						href={navItem.href}
						onClickCapture={() => handleItemClick(index)}
						className={`
								text-sb-gray-200 font-normal text-base
								${activeIndex === index ? "!text-sb-green-100 !font-semibold" : ""}
							`}
					>
						{navItem.name}
					</Link>
				</li>
			))}
		</ul>
	)
}

export default ProductEventLinkList

// ${pathname === navItem.href ? "!text-sb-black-100 border-b-[2px] border-b-sb-green-100" : ""}

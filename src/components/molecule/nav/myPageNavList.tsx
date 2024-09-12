import React from "react"

import CaretRightURL from "@/assets/svg/caret-right.svg?url"
import Link from "next/link"
import Image from "next/image"

// svgs
import AddressHistoryURL from "@/assets/svg/address-history.svg?url"
import CouponURL from "@/assets/svg/coupon.svg?url"
import DeliveryAddressURL from "@/assets/svg/delivery-address.svg?url"
import UserSettingsURL from "@/assets/svg/user-settings.svg?url"
import UserAdminURL from "@/assets/svg/user-admin.svg?url"
import NoticeURL from "@/assets/svg/notice.svg?url"
import CreditCardURL from "@/assets/svg/credit-card.svg?url"

const navList = [
	{
		category: "서비스",
		subCategory: [
			{
				svg: AddressHistoryURL,
				title: "주문 내역",
				href: "/shop/my/order-history-list"
			},
			// { svg: CouponURL, title: "쿠폰", href: "/shop/my/coupon-list" },
			{
				svg: DeliveryAddressURL,
				title: "배송지 관리",
				href: "/shop/my/manage-delivery-address"
			},
			{
				svg: UserSettingsURL,
				title: "개인정보 관리",
				href: "/shop/my/manage-user-info"
			},
			{ svg: UserAdminURL, title: "계정정보", href: "/shop/my/account-info" },
			{
				svg: CreditCardURL,
				title: "결제수단 관리",
				href: "/shop/my/manage-payment"
			}
			// 쿠폰 및 모바일 상푼권 추가하기
		]
	},
	{
		category: "약관 및 정책",
		subCategory: [
			{
				svg: NoticeURL,
				title: "배송지 정보 수집 및 이용 동의",
				href: "/shop/my/agree-delivery-address-info"
			}
		]
	}
]

interface MyPageNavListProps {}

function MyPageNavList(props: MyPageNavListProps) {
	return (
		<nav
			className="w-full h-full px-6 py-8 bg-gray-50 flex flex-col gap-8"
			style={{ minHeight: "calc(100lvh - 276px)" }}
		>
			{navList.map((nav, index) => (
				<div key={index} className="flex flex-col gap-6">
					<span className="text-xl font-bold text-sb-black-100">
						{nav.category}
					</span>
					{nav.subCategory.map((subNav, index) => (
						<Link
							key={index}
							href={subNav.href}
							className="flex justify-between items-center"
						>
							<div className="flex items-center justify-center gap-3">
								<Image
									src={subNav.svg}
									alt={`${subNav.title}.svg`}
									width={24}
									height={24}
								/>
								<span className="text-base font-normal">{subNav.title}</span>
							</div>
							<Image
								src={CaretRightURL}
								alt={"caret-right.svg"}
								width={24}
								height={24}
							/>
						</Link>
					))}
				</div>
			))}
		</nav>
	)
}

export default MyPageNavList

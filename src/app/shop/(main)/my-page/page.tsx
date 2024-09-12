import React from "react"
import MyPageNavList from "@/components/molecule/nav/myPageNavList"
import OrderCountLinkList from "@/components/atom/order/orderCountLinkList"
import { OrderCountProps } from "@/components/atom/order/orderCountLink"

const orderCountLinkList: OrderCountProps[] = [
	{
		count: 0,
		orderType: "payment-complete",
		orderTypeName: "결제완료",
		href: "/shop/my/order-history-list"
	},
	{
		count: 0,
		orderType: "preparing-delivery",
		orderTypeName: "배송준비중",
		href: "/shop/my/order-history-list"
	},
	{
		count: 0,
		orderType: "shipping",
		orderTypeName: "배송중",
		href: "/shop/my/order-history-list"
	},
	{
		count: 0,
		orderType: "delivery-complete",
		orderTypeName: "배송완료",
		href: "/shop/my/order-history-list"
	}
]

export default function MyPage() {
	return (
		<section>
			<OrderCountLinkList items={orderCountLinkList} />
			<MyPageNavList />
		</section>
	)
}

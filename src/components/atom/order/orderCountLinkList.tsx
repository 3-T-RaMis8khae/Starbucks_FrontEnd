import React from "react"
import OrderCountLink, {
	OrderCountProps
} from "@/components/atom/order/orderCountLink"
import Image from "next/image"
import CaretRightURL from "@/assets/svg/caret-right.svg?url"

interface OrderCountLinkListProps {
	items: OrderCountProps[]
}

function OrderCountLinkList({ items }: OrderCountLinkListProps) {
	return (
		<div>
			<div className="flex justify-between app-px items-baseline py-8">
				<span className="text-xl font-bold text-sb-black-100">
					주문/배송 현황
				</span>
				<span className="text-sm font-medium text-sb-gray-100">
					최근 3개월 동안 구매한 상품
				</span>
			</div>
			<div className="flex items-center justify-center gap-6 pb-14">
				{items.map((item, index) => (
					<>
						<OrderCountLink
							key={index}
							count={item.count}
							orderType={item.orderType}
							orderTypeName={item.orderTypeName}
							href={item.href}
						/>
						{items.length - 1 !== index && (
							<Image
								src={CaretRightURL}
								alt={"caret-right.svg"}
								width={18}
								height={18}
							/>
						)}
					</>
				))}
			</div>
		</div>
	)
}

export default OrderCountLinkList

import React from "react"
import Link from "next/link"

export interface OrderCountProps {
	count: number
	orderType: string
	orderTypeName: string
	href: string
}

function OrderCountLink({ href, count, orderTypeName }: OrderCountProps) {
	return (
		<Link href={href} className={`flex items-center flex-col gap-2 relative`}>
			<span className="text-3xl text-sb-gray-0 font-semibold">{count}</span>
			<span className="text-sm font-normal text-sb-black-100 absolute -bottom-6 abs-center-x whitespace-pre">
				{orderTypeName}
			</span>
		</Link>
	)
}

export default OrderCountLink

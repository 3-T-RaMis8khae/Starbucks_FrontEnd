import React from "react"
import Link from "next/link"
import { LinkProps } from "next/dist/client/link"

interface OrderCountProps {
	count: number
	orderTypeName: string
	linkProps: LinkProps
}

function OrderCountLink({ count, orderTypeName, linkProps }: OrderCountProps) {
	return (
		<Link {...linkProps} className={`flex flex-col gap-2`}>
			<span className="text-2xl text-sb-gray-0 font-semibold">{count}</span>
			<span className="text-sm font-normal text-sb-gray-100">
				{orderTypeName}
			</span>
		</Link>
	)
}

export default OrderCountLink

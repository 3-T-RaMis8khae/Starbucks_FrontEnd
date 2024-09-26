"use client"

import React from "react"
import { orderConditionList } from "@/type/shop/product"
import BaseDropdown from "@/components/atom/dropdown/baseDropdown"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import _ from "lodash"
import { assignParamObject } from "@/lib/searchParamUtils"
import { createQueryParamString } from "@/lib/queryParamUtils"

interface ProductDropdownProps {
	defaultValue: string
}

function ProductDropdown({ defaultValue }: ProductDropdownProps) {
	const pathName = usePathname()
	const searchParams = useSearchParams()
	const router = useRouter()

	const onChangeHandler = (value: string) => {
		const orderFilter = _.find(orderConditionList, { value })
		const queryObj = assignParamObject(searchParams, {
			orderFilter: orderFilter?.["id"]
		})
		router.replace(`${pathName}?${createQueryParamString(queryObj)}`)
	}

	return (
		<BaseDropdown
			defaultValue={defaultValue}
			values={orderConditionList}
			onValueChange={onChangeHandler}
		/>
	)
}

export default ProductDropdown

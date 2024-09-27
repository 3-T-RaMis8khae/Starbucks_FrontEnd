"use client"

import React, { useCallback, useEffect, useRef } from "react"
import useIntersectionObserver from "@/hooks/useIntersectionObserver"
import { GetProductListIdsRequest, OrderCondition } from "@/type/shop/product"
import { defaultPaginationRequest } from "@/type/common/request"
import { useInfiniteQuery } from "@tanstack/react-query"
import { getProductIds } from "@/action/product/productAction"
import BaseLoader from "@/components/atom/loader/baseLoader"
import { useSearchParams } from "next/navigation"

import _ from "lodash"
import { getDefaultProductOrderFilterValue } from "@/lib/productUtils"
import ProductCategWrapper from "@/components/atom/category/productCategWrapper"
import ProductDropdown from "@/components/atom/product/productDropdown"
import ProductListWrapper from "@/components/molecule/product/productListWrapper"

// note : 제일 밑일 때 IO로 감지되는 것은 확인, 그런데 서버 컴포넌트로 상품을 들고 오는거에서 최상위 부분에만
//  클라이언트 컴포넌트로 수정 후 적용하면 하위에 있는 서버 컴포넌ㅌ트의 서버 액션이 계속 호출됨...
function ProductListPage() {
	// -- get query params
	const searchParams = useSearchParams()
	const ptcc = searchParams.get("ptcc")
	const pmcc = searchParams.get("pmcc")
	const pbcc = searchParams.get("pbcc")

	const queryList = {
		categCode: _.compact([ptcc as string, pmcc as string, pbcc as string])
	}
	const filterDefaultValue = getDefaultProductOrderFilterValue(
		searchParams.get("orderFilter") as string
	)

	// -- get product id list
	const defaultPagination = _.assign(defaultPaginationRequest, {})
	const reqOption: GetProductListIdsRequest = {
		topCode: (ptcc as string) ?? "",
		middleCode: (pmcc as string) ?? "",
		productName: "",
		priceType: undefined,
		orderCondition: filterDefaultValue.id as OrderCondition,
		...defaultPagination
	}

	const ref = useRef<HTMLDivElement | null>(null)
	const pageRef = useIntersectionObserver(ref, {})
	const isPageEnd = !!pageRef?.isIntersecting

	const {
		fetchNextPage,
		fetchPreviousPage,
		hasNextPage,
		hasPreviousPage,
		isFetchingNextPage,
		isFetchingPreviousPage,
		isFetching,
		data,
		...result
	} = useInfiniteQuery({
		queryKey: ["product-list", reqOption],
		queryFn: ({ pageParam = 0 }) =>
			getProductIds({ ...reqOption, page: pageParam }),
		getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => {
			if (!lastPage.last) {
				return lastPage.pageable.pageNumber + 1
			}
			return undefined
		},
		initialPageParam: 0
	})

	// eslint-disable-next-line no-undef
	const fetchNext = useCallback(async () => {
		const res = await fetchNextPage()
		console.log("\n\n---------------- fetchNext----------------\n\n", res)
		if (res.isError) {
			console.log(res.error)
		}
	}, [fetchNextPage])

	useEffect(() => {
		// eslint-disable-next-line no-undef
		let timerId: NodeJS.Timeout | undefined

		if (isPageEnd && hasNextPage) {
			timerId = setTimeout(() => {
				fetchNext()
			}, 500)
		}

		return () => clearTimeout(timerId)
	}, [fetchNext, isPageEnd, hasNextPage])

	return (
		<>
			{/*<ProductCategWrapper params={queryList} />*/}
			<div className="flex itmes-center justify-end px-[30px] pt-2">
				<ProductDropdown defaultValue={filterDefaultValue.value} />
			</div>
			<div className="px-[30px] py-4">
				{/*{data?.pages?.map((page, index) => (*/}
				{/*	<ProductListWrapper key={index} productIds={page.content} />*/}
				{/*))}*/}
			</div>
			{(isFetching || hasNextPage || isFetchingNextPage) && <BaseLoader />}
			<div className="w-full touch-none h-10 mb-10" ref={ref} />
		</>
	)
}

export default ProductListPage

"use client"

import React, { useCallback, useEffect, useRef } from "react"
import useIntersectionObserver from "@/hooks/useIntersectionObserver"
import { GetProductListIdsRequest } from "@/type/shop/product"
import { useInfiniteQuery } from "@tanstack/react-query"
import { getProductIds } from "@/action/product/productAction"
import BaseLoader from "@/components/atom/loader/baseLoader"

import ProductList from "@/components/atom/product/productList"
import { defaultPaginationRequest } from "@/type/common/request"
import ProductItemSkeleton from "@/components/atom/product/ProductItemSkeleton"
import ProductItemsWrapper from "@/components/page/product/listpage/productItemsWrapper"

interface ProductListCLProps {
	reqOption: GetProductListIdsRequest
}

function ProductListCL({ reqOption }: ProductListCLProps) {
	const ref = useRef<HTMLDivElement | null>(null)
	const pageRef = useIntersectionObserver(ref, {})
	const isPageEnd = !!pageRef?.isIntersecting

	const {
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
		isFetching,
		isLoading,
		data
	} = useInfiniteQuery({
		queryKey: ["product-list", reqOption],
		queryFn: ({ pageParam = 0 }) =>
			getProductIds({ ...reqOption, page: pageParam }),
		getNextPageParam: (lastPage) => {
			console.log("in getNextpageParam : ", lastPage.last, "\n\n", lastPage)
			if (!lastPage.last) {
				return lastPage.pageable.pageNumber + 1
			}
			return undefined
		},
		initialPageParam: 0,
		refetchOnWindowFocus: false
	})

	const fetchNext = useCallback(async () => {
		const res = await fetchNextPage()
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
			}, 300)
		}
		return () => clearTimeout(timerId)
	}, [fetchNext, isPageEnd, hasNextPage])

	return (
		<>
			<div className="px-[30px] py-4 gap-4 flex flex-col">
				{/*<ProductList>*/}
				{/*	{data?.pages?.map((page, index) => (*/}
				{/*		<React.Fragment key={index}>*/}
				{/*			{page.content.map((id) => (*/}
				{/*				<ProductItemCL key={id} id={id} />*/}
				{/*			))}*/}
				{/*		</React.Fragment>*/}
				{/*	))}*/}
				{/*</ProductList>*/}
				{isLoading ? (
					<ProductList>
						{Array.from(
							{ length: defaultPaginationRequest.size },
							(_, index) => (
								<ProductItemSkeleton key={index} />
							)
						)}
					</ProductList>
				) : (
					data?.pages?.map((page, index) => (
						<ProductItemsWrapper key={index} productItemIds={page.content} />
					))
				)}
			</div>
			{(isFetching || hasNextPage || isFetchingNextPage) && <BaseLoader />}
			<div className="w-full touch-none h-10 mb-10" ref={ref} />
		</>
	)
}

export default ProductListCL

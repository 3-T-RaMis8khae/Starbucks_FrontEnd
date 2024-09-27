import { SearchParams } from "@/type/next"
import _ from "lodash"

import ProductCategWrapper from "@/components/atom/category/productCategWrapper"

import ProductListWrapper from "@/components/molecule/product/productListWrapper"
import { defaultPaginationRequest } from "@/type/common/request"
import { GetProductListIdsRequest, OrderCondition } from "@/type/shop/product"
import { getProductIds } from "@/action/product/productAction"
import ProductDropdown from "@/components/atom/product/productDropdown"
import { getDefaultProductOrderFilterValue } from "@/lib/productUtils"
import ProductListPage from "@/components/page/product/productListPage"

interface ProductListPageProps extends SearchParams {}

export default async function _ProductListPage({
	searchParams
}: ProductListPageProps) {
	// -- get query params
	const queryList = {
		categCode: _.compact([
			searchParams["ptcc"] as string,
			searchParams["pmcc"] as string,
			searchParams["pbcc"] as string
		])
	}
	const filterDefaultValue = getDefaultProductOrderFilterValue(
		searchParams["orderFilter"] as string
	)
	// -- get product id list
	const defaultPagination = _.assign(defaultPaginationRequest, {})
	const reqOption: GetProductListIdsRequest = {
		topCode: (searchParams["ptcc"] as string) ?? "",
		middleCode: (searchParams["pmcc"] as string) ?? "",
		productName: "",
		priceType: undefined,
		orderCondition: filterDefaultValue.id as OrderCondition,
		...defaultPagination
	}
	const res = await getProductIds(reqOption)

	return (
		<section>
			<ProductCategWrapper params={queryList} />
			<div className="flex itmes-center justify-end px-[30px] pt-2">
				<ProductDropdown defaultValue={filterDefaultValue.value} />
			</div>
			<div className="px-[30px] py-4">
				<ProductListWrapper productIds={res.content} />
			</div>
			{/*<ProductListPage />*/}
		</section>
	)
}

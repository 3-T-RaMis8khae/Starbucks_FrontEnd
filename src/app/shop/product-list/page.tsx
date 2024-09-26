import ProductCateg from "@/components/atom/category/productCateg"
import ProductCategFilter from "@/components/atom/category/productCategFilter"
import ProductList from "@/components/atom/product/productList"
import ProductItem from "@/components/atom/product/productItem"
import BaseDropdown from "@/components/atom/dropdown/baseDropdown"
import { SearchParams } from "@/type/next"
import _ from "lodash"

import { getAllTopProductCategoriesAction } from "@/action/product-category/productCategoryAction"
import ProductCategWrapper from "@/components/atom/category/productCategWrapper"
import { ValueOf } from "@/lib/types"
import { ProductCategoryQueryType } from "@/type/shop/product-category"
// dummy-data
import { productItems } from "@/dummy/product-data"
import ProductListWrapper from "@/components/molecule/product/productListWrapper"
import { defaultPaginationRequest } from "@/type/common/request"
import { GetProductListIdsRequest } from "@/type/shop/product"
import { getProductIds } from "@/action/product/prodcutAction"

interface ProductListPageProps extends SearchParams {}

export default async function ProductListPage({
	searchParams
}: ProductListPageProps) {
	const queryList = {
		categCode: _.compact([
			searchParams["ptcc"] as string,
			searchParams["pmcc"] as string,
			searchParams["pbcc"] as string
		])
	}

	const defaultPagination = _.assign(defaultPaginationRequest, {})
	const reqOption: GetProductListIdsRequest = {
		topCode: (searchParams["ptcc"] as string) ?? "",
		middleCode: (searchParams["pmcc"] as string) ?? "",
		productName: "",
		priceType: undefined,
		orderCondition: "NEWEST",
		...defaultPagination
	}
	const res = await getProductIds(reqOption)

	return (
		<section>
			{/*<ProductCateg />*/}
			{/*<ProductCategFilter />*/}
			<ProductCategWrapper params={queryList} />
			<div className="flex itmes-center justify-end px-[30px] pt-2">
				<BaseDropdown />
			</div>
			<div className="px-[30px] py-4">
				<ProductListWrapper productIds={res.content} />
				{/*<ProductList>*/}
				{/*	{productItems.map((productItem) => (*/}
				{/*		<ProductItem key={productItem.uuid} item={productItem} />*/}
				{/*	))}*/}
				{/*</ProductList>*/}
			</div>
		</section>
	)
}

import ProductCateg from "@/components/atom/category/productCateg"
import ProductCategFilter from "@/components/atom/category/productCategFilter"
import ProductList from "@/components/atom/product/productList"
import ProductItem from "@/components/atom/product/productItem"
import BaseDropdown from "@/components/atom/dropdown/baseDropdown"
import { SearchParams } from "@/type/next"
import _ from "lodash"

// dummy-data
import { productItems } from "@/dummy/product-data"
import { getAllTopProductCategoriesAction } from "@/action/product-category/productCategoryAction"
import ProductCategWrapper from "@/components/atom/category/productCategWrapper"
import { ValueOf } from "@/lib/types"
import { ProductCategoryQueryType } from "@/type/shop/product-category"

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
	console.log("queryList - ", queryList, searchParams)
	return (
		<section>
			{/*<ProductCateg />*/}
			{/*<ProductCategFilter />*/}
			<ProductCategWrapper params={queryList} />
			<div className="flex itmes-center justify-end px-[30px] pt-2">
				<BaseDropdown />
			</div>
			<div className="px-[30px] py-4">
				<ProductList>
					{productItems.map((productItem) => (
						<ProductItem key={productItem.uuid} item={productItem} />
					))}
				</ProductList>
			</div>
		</section>
	)
}

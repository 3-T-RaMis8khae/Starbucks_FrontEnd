import ProductListCateg from "@/components/atom/category/productListCateg"
import ProductListCategFilter from "@/components/atom/category/productListCategFilter"
import ProductList from "@/components/atom/product/productList"
import ProductItem from "@/components/atom/product/productItem"
import BaseDropdown from "@/components/atom/dropdown/baseDropdown"

// dummy-data
import { productItems } from "@/dummy/product-data"

export default function ProductListPage() {
	return (
		<section>
			<ProductListCateg />
			<ProductListCategFilter />
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

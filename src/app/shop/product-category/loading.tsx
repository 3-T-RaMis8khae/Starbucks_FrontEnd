import ProductCategoryPage from "@/components/page/product/productCategoryPage"
import ProductCategoryLinkSkeleton from "@/components/atom/product/ProductCategoryLinkSkeleton"

export default function ProductCategoryLoading() {
	return (
		<ProductCategoryPage>
			{Array.from({ length: 6 }).map((_, index) => (
				<ProductCategoryLinkSkeleton key={index} />
			))}
		</ProductCategoryPage>
	)
}

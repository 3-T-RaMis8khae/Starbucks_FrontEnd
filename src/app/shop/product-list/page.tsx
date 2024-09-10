import ProductListCateg from "@/components/atom/category/productListCateg"
import ProductListCategFilter from "@/components/atom/category/productListCategFilter"
import ProductList from "@/components/atom/product/productList"
import { ProductItemType } from "@/type/shop/product"
import ProductItem from "@/components/atom/product/productItem"

export default function ProductListPage() {
	return (
		<section>
			<ProductListCateg />
			<ProductListCategFilter />
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

const productItems: ProductItemType[] = [
	{
		uuid: "1",
		name: "product1",
		price: 10000,
		thumbnail:
			"https://sitem.ssgcdn.com/93/30/82/item/1000608823093_i1_580.jpg",
		quantity: 10,
		isSoldOut: false,
		isClosed: false,
		isOpened: true
	},
	{
		uuid: "2",
		name: "product2",
		price: 20000,
		thumbnail:
			"https://sitem.ssgcdn.com/93/30/82/item/1000608823093_i1_580.jpg",
		quantity: 10,
		isSoldOut: false,
		isClosed: false,
		isOpened: true
	},
	{
		uuid: "3",
		name: "product3",
		price: 30000,
		thumbnail:
			"https://sitem.ssgcdn.com/93/30/82/item/1000608823093_i1_580.jpg",
		quantity: 10,
		isSoldOut: false,
		isClosed: false,
		isOpened: true
	},
	{
		uuid: "4",
		name: "product4",
		price: 40000,
		thumbnail:
			"https://sitem.ssgcdn.com/95/21/09/item/1000570092195_i1_580.jpg",
		quantity: 10,
		isSoldOut: false,
		isClosed: false,
		isOpened: true
	},
	{
		uuid: "5",
		name: "product5",
		price: 50000,
		thumbnail:
			"https://sitem.ssgcdn.com/95/21/09/item/1000570092195_i1_580.jpg",
		quantity: 10,
		isSoldOut: false,
		isClosed: false,
		isOpened: true
	},
	{
		uuid: "6",
		name: "product6",
		price: 60000,
		thumbnail:
			"https://sitem.ssgcdn.com/95/21/09/item/1000570092195_i1_580.jpg",
		quantity: 10,
		isSoldOut: false,
		isClosed: false,
		isOpened: true
	}
]

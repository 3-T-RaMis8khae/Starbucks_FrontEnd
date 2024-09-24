import {
	ProductCategItem,
	ProductListCategFilterItem,
	ProductListCategItem
} from "@/type/shop/product"

// todo: remove this dummy data
export const testProductCategs: ProductCategItem[] = [
	{
		id: "1",
		name: "전체"
	},
	{
		id: "2",
		name: "텀블러/보온병"
	},
	{
		id: "3",
		name: "머그/컵"
	},
	{
		id: "4",
		name: "라이프스타일"
	},
	{
		id: "5",
		name: "티/커피용품"
	},
	{
		id: "6",
		name: "케이크"
	},
	{
		id: "7",
		name: "초콜릿/스낵"
	},
	{
		id: "8",
		name: "세트"
	}
]

export const testProductCategFilter: Array<{
	filter: ProductListCategItem
	items: Array<ProductListCategFilterItem>
}> = [
	{
		filter: { id: "1", name: "용량" },
		items: [
			{ id: "2", name: "Short" },
			{ id: "3", name: "Tall" },
			{ id: "4", name: "Grande" },
			{ id: "5", name: "Venti" },
			{ id: "6", name: "Trenta" }
		]
	},
	{
		filter: { id: "2", name: "가격" },
		items: [
			{ id: "1", name: "1만원 미만" },
			{ id: "2", name: "2만원대" },
			{ id: "3", name: "3만원대" },
			{ id: "4", name: "4만원대" },
			{ id: "5", name: "5만원 이상" }
		]
	},
	{
		filter: { id: "3", name: "카테고리" },
		items: [
			{ id: "1", name: "플라스틱 텀블러" },
			{ id: "2", name: "스테인리스 텀블러" },
			{ id: "3", name: "보온병" },
			{ id: "4", name: "머그컵" },
			{ id: "5", name: "티포트" },
			{ id: "6", name: "커피포트" }
		]
	}
]

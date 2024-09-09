import React from "react"

// todo : will need to move to types
interface ProductCategItem {
	id: number
	name: string
}

const testProductCategs: ProductCategItem[] = [
	{
		id: 1,
		name: "전체"
	},
	{
		id: 2,
		name: "텀블러/보온병"
	},
	{
		id: 3,
		name: "머그/컵"
	},
	{
		id: 4,
		name: "라이프스타일"
	},
	{
		id: 5,
		name: "티/커피용품"
	},
	{
		id: 6,
		name: "케이크"
	},
	{
		id: 7,
		name: "초콜릿/스낵"
	},
	{
		id: 8,
		name: "세트"
	}
]

function ProductListCateg() {
	return (
		<ul className="h-[35px] hidden-x-scroll flex items-center px-2 border-b-[1px] border-b-sb-gray-0">
			{testProductCategs.map((item) => {
				return (
					<li key={item.id} className="whitespace-nowrap px-3">
						<button className="text-sb-gray-200 font-medium text-xs">
							{item.name}
						</button>
					</li>
				)
			})}
		</ul>
	)
}

export default ProductListCateg

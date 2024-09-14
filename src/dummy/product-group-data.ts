import { ProductGroupType } from "@/type/shop/product"

export const productGroupData: ProductGroupType[] = Array.from(
	{ length: 5 },
	(_, index) => ({
		title: "펭귄북스 콜라보",
		items: [
			{
				uuid: "1",
				name: "[스타벅스] 펭귄북스 키체인",
				price: 23000,
				thumbnail:
					"https://sitem.ssgcdn.com/59/07/59/item/1000614590759_i1_232.jpg"
			},
			{
				uuid: "2",
				name: "[스타벅스] SS 펭귄북스 JDN 텀블러 355ml",
				price: 38000,
				thumbnail:
					"https://sitem.ssgcdn.com/48/69/58/item/1000614586948_i1_232.jpg"
			},
			{
				uuid: "3",
				name: "[스타벅스] SS 펭귄북스 코나 텀블러 237ml",
				price: 38000,
				thumbnail:
					"https://sitem.ssgcdn.com/05/89/58/item/1000614588905_i1_232.jpg"
			},
			{
				uuid: "4",
				name: "[스타벅스] 펭귄북스 FEJ 보온병 500ml",
				price: 52000,
				thumbnail:
					"https://sitem.ssgcdn.com/65/61/58/item/1000614586165_i1_232.jpg"
			},
			{
				uuid: "5",
				name: "[스타벅스] SS 펭귄북스 틸튼 텀블러 355ml",
				price: 40000,
				thumbnail:
					"https://sitem.ssgcdn.com/71/73/58/item/1000614587371_i1_232.jpg"
			},
			{
				uuid: "6",
				name: "[스타벅스] 펭귄북스 노트 세트 (2P)",
				price: 22000,
				thumbnail:
					"https://sitem.ssgcdn.com/06/13/59/item/1000614591306_i1_232.jpg"
			},
			{
				uuid: "7",
				name: "[스타벅스] 펭귄북스 틴 케이스(스티키노트)",
				price: 22000,
				thumbnail:
					"https://sitem.ssgcdn.com/21/21/59/item/1000614592121_i1_232.jpg"
			},
			{
				uuid: "8",
				name: "[스타벅스] 펭귄북스 포스트카드북",
				price: 18000,
				thumbnail:
					"https://sitem.ssgcdn.com/73/32/59/item/1000614593273_i1_232.jpg"
			}
		]
	})
)
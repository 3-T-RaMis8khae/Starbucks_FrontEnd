import { ProductGroupType } from "@/type/shop/product"
import {
	anniversaryItems,
	buddyBlackGolfItems,
	penguinBooksItems
} from "@/dummy/product-data"

export const productGroupList: ProductGroupType[] = [
	{
		title: "버디 블랙 골프",
		items: buddyBlackGolfItems
	},
	{
		title: "펭귄북스",
		items: penguinBooksItems
	},
	{
		title: "애니버서리",
		items: anniversaryItems
	}
]

export const thumbnails: Array<{ id: string; url: string }> = [
	{
		id: "1",
		url: "https://sitem.ssgcdn.com/59/07/59/item/1000614590759_i1_232.jpg"
	},
	{
		id: "2",
		url: "https://sitem.ssgcdn.com/48/69/58/item/1000614586948_i1_232.jpg"
	},
	{
		id: "3",
		url: "https://sitem.ssgcdn.com/05/89/58/item/1000614588905_i1_232.jpg"
	},
	{
		id: "4",
		url: "https://sitem.ssgcdn.com/65/61/58/item/1000614586165_i1_232.jpg"
	},
	{
		id: "5",
		url: "https://sitem.ssgcdn.com/71/73/58/item/1000614587371_i1_232.jpg"
	},
	{
		id: "6",
		url: "https://sitem.ssgcdn.com/06/13/59/item/1000614591306_i1_232.jpg"
	},
	{
		id: "7",
		url: "https://sitem.ssgcdn.com/21/21/59/item/1000614592121_i1_232.jpg"
	},
	{
		id: "8",
		url: "https://sitem.ssgcdn.com/73/32/59/item/1000614593273_i1_232.jpg"
	}
]

export const thumbnails2: Array<{ id: string; url: string }> = [
	{
		id: "1",
		url: "https://sitem.ssgcdn.com/59/07/59/item/1000614590759_i1_232.jpg"
	},
	{
		id: "2",
		url: "https://sitem.ssgcdn.com/48/69/58/item/1000614586948_i1_232.jpg"
	}
]

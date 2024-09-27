import { PaginationRequest } from "@/type/common/request"
import { PaginationResponse } from "@/type/common/response"

export interface ProductItemType {
	uuid: string
	name: string
	price: number
	thumbnail: string
	// discountRate: number
	discountRate?: number
	// 품절 예정 확인을 위한 재고량
	quantity?: number
	// 일시 품절, 판매 종료, 판매 시작
	isSoldOut?: boolean
	isClosed?: boolean
	isOpened?: boolean
}

export interface ProductGroupType {
	title: string
	items: ProductItemType[]
}

export interface ProductCarouselType {
	src: string
	alt: string
	href?: string
}

export interface ProductDetailType {}

export interface ProductCategItem {
	id: string
	name: string
}

export interface ProductListCategItem {
	id: string
	name: string
}

export interface ProductListCategFilterItem {
	id: string
	name: string
}

// -----------------------------product ids ------------------------------

export interface GetProductListIdsResponse
	extends PaginationResponse<number[]> {}

export interface GetProductListIdsRequest extends PaginationRequest {
	topCode?: string
	middleCode?: string
	productName?: string
	priceType?:
		| "BELOW_10000"
		| "BETWEEN_10000_AND_19999"
		| "BETWEEN_20000_AND_29999"
		| "BETWEEN_30000_AND_39999"
		| "BETWEEN_40000_AND_49999"
		| "ABOVE_50000"
	orderCondition?: OrderCondition
}

export type OrderCondition =
	| "NEWEST"
	| "DISCOUNT"
	| "HIGHEST_PRICE"
	| "LOWEST_PRICE"

export const orderConditionList = [
	{
		id: "NEWEST",
		value: "최신순"
	},
	{
		id: "DISCOUNT",
		value: "할인순"
	},
	{
		id: "HIGHEST_PRICE",
		value: "높은 가격순"
	},
	{
		id: "LOWEST_PRICE",
		value: "낮은 가격순"
	}
]

export interface GetProductInfoResponse {
	name: string
	isNew: boolean
	isDiscounted: boolean
	price: number
	discountRate: number
	wishCount: number
}

export interface GetProductThumbnailResponse {
	productId: number
	src: string
}

// ---------------------------- product detail info  --------------------------------

export interface GetProductDetailInfoResponse {
	name: string
	price: number
	isNew: boolean
	shortDescription: string
	isDiscounted: boolean
	discountRate: number
	wishCount: number
}

// array로 받음
export interface GetProductDetailThumbnailsResponse {
	url: string
	isMainImage: boolean
}

export interface GetProductDetailDescriptionResponse {
	detail: string
}

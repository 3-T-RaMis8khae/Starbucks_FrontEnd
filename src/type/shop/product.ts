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

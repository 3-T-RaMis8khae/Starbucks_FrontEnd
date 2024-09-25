// Main Product Category is equivalent to Top Product Category
export interface MainProductCategoryType {
	categoryCode: string
	imageUrl: string
	categoryName: string
}

export interface TopProductCategoryType {
	topCategoryCode: string
	topCategoryName: string
	topCategoryDescription: string
}

export const AllTopProductCategory: TopProductCategoryType = {
	topCategoryCode: "tc-all",
	topCategoryName: "전체",
	topCategoryDescription: "카테고리 전체"
}

export interface MiddleProductCategoryType {
	middleCategoryCode: string
	middleCategoryName: string
	middleCategoryDescription: string
	topCategoryCode: string
}

export interface BottomProductCategoryType {
	bottomCategoryCode: string
	bottomCategoryName: string
	bottomCategoryDescription: string
	middleCategoryCode: string
}

export interface ChildProductCategoryType {
	categoryCode: string
	categoryName: string
}

export interface ProductCategoryType {
	code: string
	name: string
	type: ProductCategoryDepthType
}

export type ProductCategoryDepthType = "top" | "middle" | "bottom"

// product top category code, product middle category code, product bottom category code
export type ProductCategoryQueryType = "ptcc" | "pmcc" | "pbcc"

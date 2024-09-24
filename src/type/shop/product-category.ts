// Main Product Category is equivalent to Top Product Category
export interface MainProductCategory {
	categoryCode: string
	imageUrl: string
	categoryName: string
}

export interface TopProductCategory {
	topCategoryCode: string
	topCategoryName: string
	topCategoryDescription: string
}

export const AllTopProductCategory: TopProductCategory = {
	topCategoryCode: "tc-all",
	topCategoryName: "전체",
	topCategoryDescription: "카테고리 전체"
}

export interface MiddleProductCategory {
	middleCategoryCode: string
	middleCategoryName: string
	middleCategoryDescription: string
	topCategoryCode: string
}

export interface BottomProductCategory {
	bottomCategoryCode: string
	bottomCategoryName: string
	bottomCategoryDescription: string
	middleCategoryCode: string
}

export interface ChildProductCategory {
	categoryCode: string
	categoryName: string
}

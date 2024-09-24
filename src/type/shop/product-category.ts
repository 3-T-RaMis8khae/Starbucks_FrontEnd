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

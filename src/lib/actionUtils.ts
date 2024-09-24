import _ from "lodash"

export const trimCategory = (categoryName: string, trimName: string) => {
	return _.replace(categoryName, trimName, "").trim()
}
export const trimTopCategory = (mainCategoryName: string) => {
	return trimCategory(mainCategoryName, "대 ")
}
export const trimMiddleCategory = (mainCategoryName: string) => {
	return trimCategory(mainCategoryName, "중 ")
}
export const trimBottomCategory = (mainCategoryName: string) => {
	return trimCategory(mainCategoryName, "소 ")
}

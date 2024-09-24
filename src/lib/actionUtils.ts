import _ from "lodash"

export const trimMainCategory = (mainCategoryName: string) => {
	return _.replace(mainCategoryName, "대 ", "").trim()
}

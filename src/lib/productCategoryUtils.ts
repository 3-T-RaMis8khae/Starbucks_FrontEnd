import {
	BottomProductCategoryType,
	ProductCategoryType,
	MiddleProductCategoryType,
	TopProductCategoryType
} from "@/type/shop/product-category"
import {
	trimBottomCategory,
	trimMiddleCategory,
	trimTopCategory
} from "@/lib/actionUtils"
import { routes } from "@/config/route"
import {
	createQueryParamObj,
	createQueryParamString
} from "@/lib/queryParamUtils"

export const mapProductCategoryFrom = (
	productCategory:
		| TopProductCategoryType
		| MiddleProductCategoryType
		| BottomProductCategoryType
): ProductCategoryType => {
	if (isTopProductCategory(productCategory)) {
		return {
			code: productCategory.topCategoryCode,
			name: trimTopCategory(productCategory.topCategoryName),
			type: "top"
		}
	} else if (isMiddleProductCategory(productCategory)) {
		return {
			code: productCategory.middleCategoryCode,
			name: trimMiddleCategory(productCategory.middleCategoryName),
			type: "middle"
		}
	} else if (isBottomProductCategory(productCategory)) {
		return {
			code: productCategory.bottomCategoryCode,
			name: trimBottomCategory(productCategory.bottomCategoryName),
			type: "bottom"
		}
	} else {
		throw new Error("Invalid product category")
	}
}

export const getCategoryPath = (
	productCategCode: ProductCategoryType,
	categCodes: string[]
) => {
	switch (productCategCode.type) {
		case "top":
			return `${routes.shop_productList}?${createQueryParamString({
				ptcc: productCategCode.code
			})}`
		case "middle":
			return `${routes.shop_productList}?${createQueryParamString({
				ptcc: categCodes[0],
				pmcc: productCategCode.code
			})}`
		case "bottom":
			return `${routes.shop_productList}?${createQueryParamString({
				ptcc: categCodes[0],
				pmcc: categCodes[1],
				pbcc: productCategCode.code
			})}`
		default:
			throw new Error("Invalid product category")
	}
}

function isTopProductCategory(
	category: any
): category is TopProductCategoryType {
	return "topCategoryName" in category
}

function isMiddleProductCategory(
	category: any
): category is MiddleProductCategoryType {
	return "middleCategoryName" in category
}

function isBottomProductCategory(
	category: any
): category is BottomProductCategoryType {
	return "bottomCategoryName" in category
}
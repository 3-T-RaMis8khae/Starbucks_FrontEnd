"use server"

import { ApiResponse } from "@/type/common/response"
import {
	MainProductCategory,
	TopProductCategory,
	MiddleProductCategory,
	BottomProductCategory,
	ChildProductCategory
} from "@/type/shop/product-category"

export async function getMainProductCategoryAction(): Promise<
	MainProductCategory[]
> {
	const apiReturn = await fetch(
		`${process.env.API1_LOCAL_BASE_URL}/api/v1/category/main`,
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		}
	)
	const res = (await apiReturn.json()) as ApiResponse<MainProductCategory[]>
	return res.result
}

export async function getTopProductCategoryAction(
	topCategCode: string
): Promise<ApiResponse<MainProductCategory[]>> {
	const apiReturn = await fetch(
		`${process.env.API1_LOCAL_BASE_URL}/api/v1/category/top-category/${topCategCode}`,
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		}
	)
	const res = (await apiReturn.json()) as ApiResponse<MainProductCategory[]>

	return res
}

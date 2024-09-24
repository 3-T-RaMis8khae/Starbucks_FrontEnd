"use server"

import { ApiResponse } from "@/type/common/response"
import {
	MainProductCategory,
	TopProductCategory,
	MiddleProductCategory,
	BottomProductCategory,
	ChildProductCategory,
	AllTopProductCategory
} from "@/type/shop/product-category"

// await new Promise((resolve) => setTimeout(resolve, 2000))

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

//  ---------------------------- top category ------------------------------------
export async function getTopProductCategoriesAction(): Promise<
	TopProductCategory[]
> {
	const apiReturn = await fetch(
		`${process.env.API1_LOCAL_BASE_URL}/api/v1/category/top-categories`,
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		}
	)
	const res = (await apiReturn.json()) as ApiResponse<TopProductCategory[]>
	return res.result
}

export async function getTopProductCategoryAction(
	topCategCode: string
): Promise<MainProductCategory[]> {
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

	return res.result
}

// ---------------------------- middle category ------------------------------------
export async function getMiddleProductCategoriesAction(
	topCategoryName: string
): Promise<MiddleProductCategory[]> {
	const apiReturn = await fetch(
		`${process.env.API1_LOCAL_BASE_URL}/api/v1/category/middle-categories/${topCategoryName}`,
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		}
	)
	const res = (await apiReturn.json()) as ApiResponse<MiddleProductCategory[]>
	return res.result
}

export async function getMiddleProductCategoryAction(
	middleCategoryName: string
): Promise<MiddleProductCategory[]> {
	const apiReturn = await fetch(
		`${process.env.API1_LOCAL_BASE_URL}/api/v1/category/middle-category/${middleCategoryName}`,
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		}
	)
	const res = (await apiReturn.json()) as ApiResponse<MiddleProductCategory[]>
	return res.result
}

//----------------------------- bottom category ------------------------------------

export async function getBottomProductCategoriesAction(
	middleCategoryName: string
): Promise<BottomProductCategory[]> {
	const apiReturn = await fetch(
		`${process.env.API1_LOCAL_BASE_URL}/api/v1/category/middle-categories/${middleCategoryName}`,
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		}
	)
	const res = (await apiReturn.json()) as ApiResponse<BottomProductCategory[]>
	return res.result
}

export async function getBottomProductCategoryAction(
	bottomCategoryName: string
): Promise<BottomProductCategory[]> {
	const apiReturn = await fetch(
		`${process.env.API1_LOCAL_BASE_URL}/api/v1/category/middle-category/${bottomCategoryName}`,
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		}
	)
	const res = (await apiReturn.json()) as ApiResponse<BottomProductCategory[]>
	return res.result
}

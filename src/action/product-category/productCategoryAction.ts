"use server"

import { ApiResponse } from "@/type/common/response"
import {
	MainProductCategoryType,
	TopProductCategoryType,
	MiddleProductCategoryType,
	BottomProductCategoryType
} from "@/type/shop/product-category"
import _ from "lodash"

// await new Promise((resolve) => setTimeout(resolve, 2000))

export async function getMainProductCategoryAction(): Promise<
	MainProductCategoryType[]
> {
	const apiReturn = await fetch(
		`${process.env.API1_BASE_URL}/api/v1/category/main`,
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		}
	)
	const res = (await apiReturn.json()) as ApiResponse<MainProductCategoryType[]>
	return res.result
}

//  ---------------------------- top category ------------------------------------
export async function getTopProductCategoriesAction(): Promise<
	TopProductCategoryType[]
> {
	const apiReturn = await fetch(
		`${process.env.API1_BASE_URL}/api/v1/category/top-categories`,
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		}
	)
	const res = (await apiReturn.json()) as ApiResponse<TopProductCategoryType[]>
	return res.result
}

export async function getTopProductCategoryAction(
	topCategCode: string
): Promise<MainProductCategoryType[]> {
	const apiReturn = await fetch(
		`${process.env.API1_BASE_URL}/api/v1/category/top-category/${topCategCode}`,
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		}
	)
	const res = (await apiReturn.json()) as ApiResponse<MainProductCategoryType[]>

	return res.result
}

// ---------------------------- middle category ------------------------------------
export async function getMiddleProductCategoriesAction(
	topCategoryCode: string
): Promise<MiddleProductCategoryType[]> {
	const apiReturn = await fetch(
		`${process.env.API1_BASE_URL}/api/v1/category/middle-categories/${topCategoryCode}`,
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		}
	)
	const res = (await apiReturn.json()) as ApiResponse<
		MiddleProductCategoryType[]
	>
	return res.result
}

export async function getMiddleProductCategoryAction(
	middleCategoryCode: string
): Promise<MiddleProductCategoryType[]> {
	const apiReturn = await fetch(
		`${process.env.API1_BASE_URL}/api/v1/category/middle-category/${middleCategoryCode}`,
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		}
	)
	const res = (await apiReturn.json()) as ApiResponse<
		MiddleProductCategoryType[]
	>
	return res.result
}

//----------------------------- bottom category ------------------------------------

export async function getBottomProductCategoriesAction(
	middleCategoryCode: string
): Promise<BottomProductCategoryType[]> {
	const apiReturn = await fetch(
		`${process.env.API1_BASE_URL}/api/v1/category/middle-categories/${middleCategoryCode}`,
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		}
	)
	const res = (await apiReturn.json()) as ApiResponse<
		BottomProductCategoryType[]
	>
	return res.result
}

export async function getBottomProductCategoryAction(
	bottomCategoryCode: string
): Promise<BottomProductCategoryType[]> {
	const apiReturn = await fetch(
		`${process.env.API1_BASE_URL}/api/v1/category/middle-category/${bottomCategoryCode}`,
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		}
	)
	const res = (await apiReturn.json()) as ApiResponse<
		BottomProductCategoryType[]
	>
	return res.result
}

//----------------------------- all category actions ------------------------------------
export async function getAllTopProductCategoriesAction(
	categList: string[]
): Promise<any> {
	const fetchPromises: any = [getTopProductCategoriesAction()]
	if (!_.isEmpty(categList[0])) {
		fetchPromises.push(getMiddleProductCategoriesAction(categList[0]))
	}

	if (!_.isEmpty(categList[1])) {
		fetchPromises.push(getBottomProductCategoriesAction(categList[1]))
	}

	const res = await Promise.all(fetchPromises)
	// call get topCategories api when first param exists or not.
	return _.compact(res)
	// call get middleCategories api when first param exists and second param do or don't.
}

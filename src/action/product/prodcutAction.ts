"use server"

import { ApiResponse } from "@/type/common/response"
import _ from "lodash"
import {
	GetProductInfoResponse,
	GetProductListIdsRequest,
	GetProductListIdsResponse,
	GetProductThumbnailResponse
} from "@/type/shop/product"
import { createQueryParamString } from "@/lib/queryParamUtils"

export async function getProductIds(
	req: GetProductListIdsRequest
): Promise<GetProductListIdsResponse> {
	const refinedReq = _.omitBy(req, _.isNil)
	const apiReturn = await fetch(
		`${process.env.API1_BASE_URL}/api/v1/product/list?${createQueryParamString(refinedReq)}`,
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		}
	)
	const res = (await apiReturn.json()) as ApiResponse<GetProductListIdsResponse>
	return res.result
}

export async function getProductInfo(
	productId: number
): Promise<GetProductInfoResponse> {
	const apiReturn = await fetch(
		`${process.env.API1_BASE_URL}/api/v1/product/list/info/${productId}`,
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		}
	)
	const res = (await apiReturn.json()) as ApiResponse<GetProductInfoResponse>
	console.log("\n\ngetProductInfo -- ", res)
	return res.result
}

export async function getProductThumbnail(
	productId: number
): Promise<GetProductThumbnailResponse> {
	const apiReturn = await fetch(
		`${process.env.API1_BASE_URL}/api/v1/product/list/image/${productId}`,
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		}
	)
	const res =
		(await apiReturn.json()) as ApiResponse<GetProductThumbnailResponse>
	return res.result
}

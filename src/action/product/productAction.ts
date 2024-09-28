"use server"

import { ApiResponse } from "@/type/common/response"
import _ from "lodash"
import {
	GetProductDetailDescriptionResponse,
	GetProductDetailInfoResponse,
	GetProductDetailThumbnailsResponse,
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

export async function getProductInfoAndThumbnail(id: number) {
	const product = await Promise.all([
		getProductInfo(id),
		getProductThumbnail(id)
	])
	return { productInfo: product[0], productThumbnail: product[1] }
}

// ---------------------------- product detail ------------------------------------
export async function getProductDetailInfoAction(
	productId: string
): Promise<GetProductDetailInfoResponse> {
	const apiReturn = await fetch(
		`${process.env.API1_BASE_URL}/api/v1/product/info/${productId}`,
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		}
	)
	const res =
		(await apiReturn.json()) as ApiResponse<GetProductDetailInfoResponse>
	return res.result
}

export async function getProductDetailThumbnailAction(
	productId: string
): Promise<Array<GetProductDetailThumbnailsResponse>> {
	const apiReturn = await fetch(
		`${process.env.API1_BASE_URL}/api/v1/product/images/${productId}`,
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		}
	)
	const res = (await apiReturn.json()) as ApiResponse<
		Array<GetProductDetailThumbnailsResponse>
	>
	return res.result
}

export async function getProductDetailDescriptionAction(
	productId: string
): Promise<GetProductDetailDescriptionResponse> {
	const apiReturn = await fetch(
		`${process.env.API1_BASE_URL}/api/v1/product/detail/${productId}`,
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		}
	)
	const res =
		(await apiReturn.json()) as ApiResponse<GetProductDetailDescriptionResponse>
	return res.result
}

"use server"

import { ApiResponse } from "@/type/common/response"
import _ from "lodash"
import { createQueryParamString } from "@/lib/queryParamUtils"
import {
	GetReviewIdsRequest,
	GetReviewIdsResponse,
	GetReviewImageResponse,
	GetReviewInfoResponse,
	GetReviewSummaryResponse
} from "@/type/shop/review"

export async function getReviewSummaryResponse(
	productId: number | string
): Promise<GetReviewSummaryResponse> {
	const apiReturn = await fetch(
		`${process.env.API1_BASE_URL}/api/v1/review/summary/${productId}`,
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		}
	)
	const res = (await apiReturn.json()) as ApiResponse<GetReviewSummaryResponse>
	return res.result
}

export async function getReviewIds(
	productId: number | string,
	req: GetReviewIdsRequest
): Promise<GetReviewIdsResponse> {
	const refinedReq = _.omitBy(req, _.isNil)
	console.log(
		"getReviewIds in action ------",
		refinedReq,
		"\n\n\n",
		createQueryParamString(refinedReq)
	)
	const apiReturn = await fetch(
		`${process.env.API1_BASE_URL}/api/v1/review/list/${productId}?${createQueryParamString(refinedReq)}`,
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		}
	)
	const res = (await apiReturn.json()) as ApiResponse<GetReviewIdsResponse>
	return res.result
}

export async function getReviewInfo(
	reviewId: number | string
): Promise<GetReviewInfoResponse> {
	const apiReturn = await fetch(
		`${process.env.API1_BASE_URL}/api/v1/review/info/${reviewId}`,
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		}
	)
	const res = (await apiReturn.json()) as ApiResponse<GetReviewInfoResponse>
	return res.result
}

export async function getReviewImage(
	reviewId: number | string
): Promise<GetReviewImageResponse> {
	const apiReturn = await fetch(
		`${process.env.API1_BASE_URL}/api/v1/review/image/${reviewId}`,
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		}
	)
	const res = (await apiReturn.json()) as ApiResponse<GetReviewImageResponse>
	return res.result
}

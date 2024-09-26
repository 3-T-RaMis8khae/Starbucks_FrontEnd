"use server"

import { ApiResponse } from "@/type/common/response"
import _ from "lodash"
import {
	GetProductListIdsRequest,
	GetProductListIdsResponse
} from "@/type/shop/product"

export async function getProductIds(): Promise<GetProductListIdsResponse> {
	// todo : implement api
	const apiReturn = await fetch(
		`${process.env.API1_BASE_URL}/api/v1/product/list`,
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				page: 1,
				size: 10,
				sort: []
			} as GetProductListIdsRequest)
		}
	)
	return {} as GetProductListIdsResponse
}

import { PaginationResponse } from "@/type/common/response"
import { PaginationRequest } from "@/type/common/request"

export interface ProductReviewType {
	id: string
	userName: string
	score: number
	productId: string
	content: string
	createdAt: string
	images?: string[]
}

export interface ProductReviewResponse {
	nickName: string
	star: number
	createAt: string //"2024-09-26T01:44:07.118Z",
	content: string
	commentCount: 1
	// temporary
	imageUrls?: string[]
}

// ------------------------------------------------------------

export interface GetReviewSummaryResponse {
	reviewCount: number
	photoReviewCount: number
	averageStar: number
}

export interface GetReviewIdsRequest extends PaginationRequest {
	showPhoto: boolean
}

export interface GetReviewIdsResponse extends PaginationResponse<number[]> {}

export interface GetReviewInfoResponse {
	nickName: string
	star: number
	createAt: string // ISO 8601 형식의 날짜 문자열
	content: string
	commentCount: number
}

export interface GetReviewImageResponse {
	imageUrl: string[]
}

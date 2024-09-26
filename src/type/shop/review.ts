export interface ProductReviewType {
	id: string
	userName: string
	score: number
	productId: string
	content: string
	createdAt: string
	images?: string[]
}

// ------------------------------------------------------------

export interface ProductReviewResponse {
	nickName: string
	star: number
	createAt: string //"2024-09-26T01:44:07.118Z",
	content: string
	commentCount: 1
	// temporary
	imageUrls?: string[]
}

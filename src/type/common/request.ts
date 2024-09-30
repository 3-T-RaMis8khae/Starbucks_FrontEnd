export interface PaginationRequest {
	page: number
	size: number
	sort?: string[]
}

export const defaultPaginationRequest: PaginationRequest = {
	page: 0,
	size: 8
}

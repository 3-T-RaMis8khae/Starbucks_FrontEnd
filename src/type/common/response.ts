export interface APIResponse1<T> {
	message: string
	res: T
	httpStatus: string
	success: boolean
}

// ------------------------------------------------------------
export interface HttpStatus {
	error: boolean
	is4xxClientError: boolean
	is5xxServerError: boolean
	is1xxInformational: boolean
	is2xxSuccessful: boolean
	is3xxRedirection: boolean
}

export interface ApiResponse<T> {
	httpStatus: HttpStatus
	isSuccess: boolean
	message: string
	code: number
	result: T
}

// -----------------------------pagination-------------------------------
export interface Sort {
	empty: boolean
	unsorted: boolean
	sorted: boolean
}

export interface Pageable {
	offset: number
	sort: Sort
	pageSize: number
	pageNumber: number
	paged: boolean
	unpaged: boolean
}

export interface PaginationResponse<T> {
	first: boolean
	last: boolean
	size: number
	content: T
	number: number
	sort: Sort
	pageable: Pageable
	numberOfElements: number
	empty: boolean
}

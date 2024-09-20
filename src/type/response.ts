export interface Response<T> {
	message: string
	res: T
	httpStatus: string
	success: boolean
}

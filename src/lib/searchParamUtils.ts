import { ReadonlyURLSearchParams } from "next/navigation"
import _ from "lodash"

export const getSearchParamObject = (searchParams: ReadonlyURLSearchParams) => {
	let paramObj: any = {}
	searchParams.forEach((value, key) => {
		paramObj[key] = value
	})
	return paramObj
}

export const assignParamObject = (
	searchParams: ReadonlyURLSearchParams,
	targetObj: any
) => {
	const paramObj = getSearchParamObject(searchParams)
	return _.assign(paramObj, targetObj)
}

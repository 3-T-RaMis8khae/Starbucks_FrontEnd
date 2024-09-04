import _ from "lodash"

export const createQueryParamString = (targetObj: { [key: string]: any }) => {
	const query = _.reduce(
		targetObj,
		(prev, value, key) => prev + `${key}=${value}&`,
		""
	)
	query.slice(0, query.length - 1)
	return query
}

import _ from "lodash"

export const toPrice = (price: number) => {
	let isNegative = false
	if (!price) {
		return 0
	}
	if (price < 0) {
		isNegative = true
	}
	const _price = price.toString().replace(/[^0-9]/gi, "")
	return (
		(isNegative ? "-" : "") +
		_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
	)
}

export const toDiscountPercent = (discountRate: number) => {
	return _.inRange(discountRate, 0, 1)
		? `${discountRate * 100}%`
		: `${discountRate}%`
}

export const toDiscountPrice = (
	price: number,
	discountRate: number,
	roundPrecision = 0
) => {
	const discountedPrice = _.round(
		_.inRange(discountRate, 0, 1)
			? price * discountRate
			: price * (discountRate / 100),
		roundPrecision
	)

	const _price = price - discountedPrice
	return toPrice(_price)
}

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

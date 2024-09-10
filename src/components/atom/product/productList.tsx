import React from "react"

interface ProductListProps {
	children?: React.ReactNode
}

function ProductList({ children }: ProductListProps) {
	return (
		<div
			className="
			grid grid-cols-2 gap-4 overflow-y-hidden
			md:grid-cols-3
			lg:grid-cols-4
		"
		>
			{children}
		</div>
	)
}

export default ProductList

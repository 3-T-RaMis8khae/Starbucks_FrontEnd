import React from "react"

interface PageProps {
	params: {
		productId: string
	}
}

function Page({ params }: PageProps) {
	return <div>product detail page : {params.productId}</div>
}

export default Page

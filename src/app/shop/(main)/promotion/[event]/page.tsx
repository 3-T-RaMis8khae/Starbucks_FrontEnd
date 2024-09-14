import React from "react"

interface PageProps {
	params: {
		event: string
	}
}

function Page({ params }: PageProps) {
	return <div>Page params : {params.event}</div>
}

export default Page

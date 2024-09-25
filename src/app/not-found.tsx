import Link from "next/link"

export default function AppNotFound() {
	return (
		<div>
			<h2>Not Found</h2>
			<p>Could not find requested resource</p>
			<Link href="/shop/main">Return Home</Link>
		</div>
	)
}

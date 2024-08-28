import React from "react"

export default function MyLayout({ children }: { children: Readonly<React.ReactNode> }) {
	return <section>{children}</section>
}

import React from "react"

interface ErrorTextProps {
	text: string
}

function ErrorText({ text }: ErrorTextProps) {
	return <>{text && <p className="error-text mt-1">{text}</p>}</>
}

export default ErrorText

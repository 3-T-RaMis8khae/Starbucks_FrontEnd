import React from "react"

export interface EmailInputProps {
	local_props: React.HTMLAttributes<HTMLInputElement>
	domain_props: React.HTMLAttributes<HTMLInputElement>
}

export default function EmailInput() {
	return (
		<div className="w-full flex items-center justify-center ">
			<input type="email" placeholder="이메일을 입력해주세요" />
		</div>
	)
}

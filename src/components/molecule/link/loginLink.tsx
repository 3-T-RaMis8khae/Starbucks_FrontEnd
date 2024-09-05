import React from "react"
import Link from "next/link"

// interface LoginLinkProps {}

function LoginLink() {
	return (
		<div className="flex items-center justify-center mt-8">
			<Link href={`/auth/forgot-account`} className="text-base">
				아이디 찾기
			</Link>
			<span className="text-gray-500 px-3">|</span>
			<Link href={`/auth/reset-password`} className="text-base">
				비밀번호 찾기
			</Link>
			<span className="text-gray-500 px-3">|</span>
			<Link href={`/auth/signup`} className="text-base">
				회원가입
			</Link>
		</div>
	)
}

export default LoginLink

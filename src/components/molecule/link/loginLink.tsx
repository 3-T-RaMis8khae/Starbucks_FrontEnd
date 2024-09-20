import React from "react"
import Link from "next/link"

// interface LoginLinkProps {}

function LoginLink() {
	return (
		<div className="flex items-center justify-center mt-8">
			<Link
				href={`/auth/member-verification?type=forgotId`}
				className="text-base"
			>
				아이디 찾기
			</Link>
			<span className="text-gray-500 px-3">|</span>
			<Link
				href={`/auth/member-verification?type=forgotPassword`}
				className="text-base"
			>
				비밀번호 찾기
			</Link>
			<span className="text-gray-500 px-3">|</span>
			<Link href={`/auth/signup?step=1`} className="text-base">
				회원가입
			</Link>
		</div>
	)
}

export default LoginLink

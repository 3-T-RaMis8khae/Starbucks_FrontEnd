import BaseHeader from "@/components/atom/header/baseHeader"
import Link from "next/link"
import Image from "next/image"
import CloseSvgURL from "@/assets/svg/close.svg?url"
import React from "react"
import ResetPasswordForm from "@/components/molecule/form/resetPasswordForm"
import AuthTitle from "@/components/atom/title/authTitle"
import NicknameTextBox from "@/components/atom/textbox/nicknameTextBox"

export default function ResetPasswordPage() {
	const titles = [
		<>
			<span className="text-sb-green-100">NickName</span>님의
		</>,
		"입력해 주세요."
	]
	const descBox = {
		title: "안전한 비밀번호 만들기",
		descriptions: [
			"영문, 숫자 혼합하여 10~20자리 아내로 입력하세요.",
			"아이디와 같은 비밀번호, 생일, 학번, 전화번호 등 개인정보와 관련된 숫자, 연속된 숫자, 동일하게 반복된 숫자 등 다른 사람이 쉽게 알아낼 수 있는 비밀번호는 유출 위험이 높아 사용하지 않는 것이 좋습니다.",
			"이전에 사용하셨던 비밀번호를 재사용할 경우 도용의 우려가 있으니, 가급적 새로운 비밀번호를 사용해 주세요."
		]
	}

	return (
		<main className="w-screen h-screen flex flex-col hidden-scroll">
			<BaseHeader
				leftComponent={
					<Link href={"/auth/login"}>
						<Image src={CloseSvgURL} alt="close.svg" />
					</Link>
				}
			></BaseHeader>

			<div className="w-full h-full flex flex-col justify-between mt-[50px] pb-[90px]  hidden-scroll">
				<div className="px-[30px]">
					<AuthTitle
						titles={titles}
						wrapperProps={{ className: "mb-4" }}
						titleProps={{ className: "font-semibold" }}
					/>
					<ResetPasswordForm></ResetPasswordForm>
				</div>

				<NicknameTextBox
					title={descBox.title}
					descriptions={descBox.descriptions}
				/>
			</div>
		</main>
	)
}

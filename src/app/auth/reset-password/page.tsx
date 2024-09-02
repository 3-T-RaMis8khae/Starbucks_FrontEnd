import BaseHeader from "@/components/atom/header/baseHeader"
import ButtonFooter from "@/components/atom/footer/buttonFooter"
import Link from "next/link"
import Image from "next/image"
import CloseSvgURL from "@/assets/svg/close.svg?url"
import { BaseInput } from "@/components/atom/input/baseInput"
import React from "react"

export default function ResetPasswordPage() {
	return (
		<main className="w-screen h-screen flex flex-col hidden-scroll">
			<BaseHeader
				leftComponent={
					<Link href={"/"}>
						<Image src={CloseSvgURL} alt="close.svg"></Image>
					</Link>
				}
			></BaseHeader>

			<div className="w-full h-full flex flex-col justify-between mt-[50px] pb-[90px]  hidden-scroll">
				<div className="flex flex-col px-[30px]">
					<p className="text-2xl text-sb-black-100 font-semibold mb-2">
						<span className="text-sb-green-100">NickName</span>님의
					</p>
					<p className="text-2xl text-sb-black-100 font-semibold mb-4">
						비밀번호를 변경합니다.
					</p>

					<div className="flex flex-col gap-2">
						<BaseInput placeholder="새 비밀번호 (10~20자리 이내)"></BaseInput>
						<BaseInput placeholder="새 비밀번호 확인"></BaseInput>
					</div>
				</div>

				<div className="w-full px-[30px] py-[20px] bg-sb-gray-0 flex flex-col">
					<p className="font-bold text-sm text-sb-gray-200">
						안전한 비밀번호 만들기
					</p>
					<ul className="input-desc *:before:!content-['•'] *:!text-sb-gray-200 !mt-2">
						<li>영문, 숫자 혼합하여 10~20자리 아내로 입력하세요.</li>
						<li>
							아이디와 같은 비밀번호, 생일, 학번, 전화번호 등 개인정보와 관련된
							숫자, 연속된 숫자, 동일하게 반복된 숫자 등 다른 사람이 쉽게 알아낼
							수 있는 비밀번호는 유출 위험이 높아 사용하지 않는 것이 좋습니다.
						</li>
						<li>
							이전에 사용하셨던 비밀번호를 재사용할 경우 도용의 우려가 있으니,
							가급적 새로운 비밀번호를 사용해 주세요.
						</li>
					</ul>
				</div>
			</div>

			<ButtonFooter
				button_title="확인"
				button_props={{ type: "submit" }}
			></ButtonFooter>
		</main>
	)
}

import BaseHeader from "@/components/atom/header/baseHeader"
import Link from "next/link"
import Image from "next/image"
import CloseSvgURL from "@/assets/svg/close.svg?url"
import { BaseInput } from "@/components/atom/input/baseInput"
import { Button } from "@/components/ui/button"
import ButtonFooter from "@/components/atom/footer/buttonFooter"
import React from "react"
import CheckBox from "@/components/molecule/checkBox/checkBox"
import StepIndicator from "@/components/atom/stepIndicator"

export default function NicknamePage() {
	return (
		<main className="w-screen h-full flex flex-col">
			<BaseHeader
				leftComponent={
					<Link href={"/"}>
						<Image src={CloseSvgURL} alt="close.svg"></Image>
					</Link>
				}
				middleComponent={
					<StepIndicator stepNumber={4} activeStep={4}></StepIndicator>
				}
			></BaseHeader>

			<div className="w-full flex flex-col mt-[60px] px-[30px]">
				<div className="flex flex-col gap-2 mb-6">
					<p className="text-2xl text-sb-black-100 font-semibold">닉네임을</p>
					<p className="text-2xl text-sb-black-100 font-semibold">
						입력해 주세요.
					</p>
				</div>

				<div className="flex flex-col">
					<CheckBox
						id="agree-usage-starbucks-card"
						className="rounded-[10px]"
						ct_label="선택적 개인정보 수집동의 및 이용약관"
						ct_showIcon={true}
						ct_container_props={{ className: "my-[8px]" }}
					></CheckBox>
					<BaseInput ct_type="text" placeholder="닉네임 (한글 6자리 이내)" />
					<ul className="input-desc">
						<li>
							매장에서 주문한 음료를 찾으실 때, 등록한 닉네임으로 불러 드립니다.
						</li>
					</ul>
				</div>

				<Button
					variant="sbGreenGhost"
					className="absolute text-sm font-medium right-0 bottom-[90px]"
				>
					건너뛰기
				</Button>
			</div>

			<ButtonFooter
				button_title="다음"
				button_props={{ type: "submit" }}
			></ButtonFooter>
		</main>
	)
}

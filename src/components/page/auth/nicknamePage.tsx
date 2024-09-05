"use client"

import BaseHeader from "@/components/atom/header/baseHeader"
import Image from "next/image"
import LeftCaretURL from "@/assets/svg/caret-left.svg?url"
import { BaseInput } from "@/components/atom/input/baseInput"
import { Button } from "@/components/ui/button"
import FixedBottomButton from "@/components/atom/button/fixedBottomButton"
import React, { useState } from "react"
import CheckBox from "@/components/molecule/checkBox/checkBox"
import StepIndicator from "@/components/atom/stepIndicator"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { nicknameSchema } from "@/schema/authSchema"
import { useRouter } from "next/navigation"

export default function NicknamePage() {
	const {
		register,
		handleSubmit,
		formState: { isValid, errors }
	} = useForm({
		resolver: zodResolver(nicknameSchema)
	})
	const [isTermCheck, setIsTermCheck] = useState<boolean>(false)
	const router = useRouter()
	// const searchParams = useSearchParams()
	// const routerHandler = (queryParams: string) => {
	// 	router.push(
	// 		`/auth/signup?${_.replace(`${searchParams}`, "step=4", "step=5")}&${queryParams}`
	// 	)
	// }

	return (
		<section>
			<BaseHeader
				leftComponent={
					<Image
						className="cursor-pointer"
						onClick={() => {
							router.back()
						}}
						src={LeftCaretURL}
						alt="close.svg"
					></Image>
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

				<form
					onSubmit={handleSubmit((data, event) => {})}
					className="flex flex-col"
				>
					<CheckBox
						id="agree-usage-starbucks-card"
						className="rounded-[10px]"
						ct_label="선택적 개인정보 수집동의 및 이용약관"
						ct_showIcon={true}
						ct_container_props={{ className: "my-[8px]" }}
						checked={isTermCheck}
						onClick={() => {
							setIsTermCheck(!isTermCheck)
						}}
					></CheckBox>
					<BaseInput
						ct_type="text"
						placeholder="닉네임 (한글 6자리 이내)"
						ct_is_error={!!errors.nickname}
						{...register("nickname")}
					/>
					{errors.nickname && (
						<p className="error-text mt-1">
							{errors.nickname.message as string}
						</p>
					)}
					<ul className="input-desc mt-2">
						<li>
							매장에서 주문한 음료를 찾으실 때, 등록한 닉네임으로 불러 드립니다.
						</li>
					</ul>

					<FixedBottomButton
						button_title="다음"
						button_props={{
							type: "submit",
							disabled: !isTermCheck || !isValid
						}}
					></FixedBottomButton>
				</form>
				<Button
					variant="sbGreenGhost"
					className="absolute text-sm font-medium right-0 bottom-[90px]"
				>
					건너뛰기
				</Button>
			</div>
		</section>
	)
}

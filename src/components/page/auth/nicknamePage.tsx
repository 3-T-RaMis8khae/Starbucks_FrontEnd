"use client"

import BaseHeader from "@/components/atom/header/baseHeader"
import LeftCaretURL from "@/assets/svg/caret-left.svg?url"
import { BaseInput } from "@/components/atom/input/baseInput"
import { Button } from "@/components/ui/button"
import FixedBottomButton from "@/components/atom/button/fixedBottomButton"
import React, { useState } from "react"
import CheckBox from "@/components/molecule/checkBox/checkBox"
import StepIndicator from "@/components/atom/indicator/stepIndicator"
import { FieldValues, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { nicknameSchema } from "@/schema/authSchema"
import { useRouter, useSearchParams } from "next/navigation"
import IconButton from "@/components/atom/icon/iconButton"
import AuthTitle from "@/components/atom/title/authTitle"
import ErrorText from "@/components/atom/text/errorText"
import InputDescText from "@/components/atom/text/inputDescText"
import { NicknameType, SignUpRequestBodyType } from "@/type/auth/signUp"
import { assignParamObject } from "@/lib/searchParamUtils"

export interface NickNamePageProps {
	handleSignUp: (req: SignUpRequestBodyType) => void
}

export default function NicknamePage({ handleSignUp }: NickNamePageProps) {
	const {
		register,
		handleSubmit,
		formState: { isValid, errors }
	} = useForm({
		resolver: zodResolver(nicknameSchema)
	})
	const [isTermCheck, setIsTermCheck] = useState<boolean>(false)
	const router = useRouter()
	const searchParams = useSearchParams()
	const signUpHandler = (req: FieldValues, isSkip = false) => {
		const targetObj: NicknameType = {
			nickname: !isSkip ? req["nickname"] : ""
		}
		const signUpData = assignParamObject(searchParams, targetObj)
		handleSignUp(signUpData)
	}

	const titles = ["닉네임을", "입력해 주세요."]
	const descriptions = [
		"매장에서 주문한 음료를 찾으실 때, 등록한 닉네임으로 불러 드립니다."
	]

	return (
		<section>
			<BaseHeader
				leftComponent={
					<IconButton
						imageProps={{
							src: LeftCaretURL,
							alt: "left-caret.svg"
						}}
						buttonProps={{
							className: "cursor-pointer",
							onClick: () => router.back()
						}}
					/>
				}
				middleComponent={
					<StepIndicator stepNumber={4} activeStep={4}></StepIndicator>
				}
			></BaseHeader>

			<div className="w-full flex flex-col mt-[60px] px-[30px]">
				<AuthTitle
					titles={titles}
					wrapperProps={{ className: "mb-6" }}
					titleProps={{ className: "font-semibold" }}
				/>

				<form
					onSubmit={handleSubmit((data, event) => {
						// @ts-ignore
						const submitterName = event?.nativeEvent.submitter.name as string
						signUpHandler(data, submitterName === "skip")
					})}
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
					/>
					<BaseInput
						ct_type="text"
						placeholder="닉네임 (한글 6자리 이내)"
						ct_is_error={!!errors.nickname}
						{...register("nickname")}
					/>
					<ErrorText text={errors?.nickname?.message as string} />

					<InputDescText
						descriptions={descriptions}
						wrapperProps={{ className: "mt-2" }}
					/>

					<FixedBottomButton
						button_title="다음"
						button_props={{
							name: "submit",
							type: "submit",
							disabled: !isTermCheck
						}}
					></FixedBottomButton>
					<Button
						name={"skip"}
						variant="sbGreenGhost"
						className="absolute text-sm font-medium right-0 bottom-[90px]"
						type={"submit"}
					>
						건너뛰기
					</Button>
				</form>
			</div>
		</section>
	)
}

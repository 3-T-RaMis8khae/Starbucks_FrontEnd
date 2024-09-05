"use client"

import BaseHeader from "@/components/atom/header/baseHeader"
import Image from "next/image"
import LeftCaretURL from "@/assets/svg/caret-left.svg?url"
import { BaseInput } from "@/components/atom/input/baseInput"
import FixedBottomButton from "@/components/atom/button/fixedBottomButton"
import React from "react"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { emailSchema } from "@/schema/authSchema"
import { useRouter, useSearchParams } from "next/navigation"
import { createQueryParamString } from "@/lib/queryParamUtils"
import _ from "lodash"
import StepIndicator from "@/components/atom/stepIndicator"
import Logo from "@/components/atom/logo"

export default function EmailPage() {
	const {
		register,
		handleSubmit,
		formState: { isValid, errors }
	} = useForm({
		resolver: zodResolver(emailSchema)
	})

	const router = useRouter()
	const searchParams = useSearchParams()
	const routerHandler = (queryParams: string) => {
		router.push(
			`/auth/signup?${_.replace(`${searchParams}`, "step=4", "step=5")}&${queryParams}`
		)
	}

	return (
		<section>
			<BaseHeader
				leftComponent={
					<Logo
						imageProps={{
							src: LeftCaretURL,
							alt: "left-caret.svg"
						}}
						wrapperProps={{
							className: "cursor-pointer w-[20px] h-[20px]",
							onClick: () => router.back()
						}}
					/>
				}
				middleComponent={
					<StepIndicator stepNumber={4} activeStep={3}></StepIndicator>
				}
			></BaseHeader>

			<form
				onSubmit={handleSubmit((data) => {
					routerHandler(createQueryParamString(data))
				})}
				className="w-full flex flex-col mt-[60px] px-[30px]"
			>
				<div className="flex flex-col gap-2 mb-6">
					<p className="text-2xl text-sb-black-100 font-semibold">이메일을</p>
					<p className="text-2xl text-sb-black-100 font-semibold">
						입력해 주세요.
					</p>
				</div>

				<BaseInput
					ct_type="text"
					ct_is_error={!!errors["email"]}
					placeholder="이메일을 입력해주세요"
					{...register("email")}
				/>
				{errors.email && (
					<p className="error-text mt-1">{errors.email.message as string}</p>
				)}

				<ul className="input-desc mt-4">
					<li>
						스타벅스 코리아의 새로운 서비스와 최신 이벤트 정보를 이메일로
						보내드려요.
					</li>
					<li>
						주요 공지사항 및 이벤트 당첨안내 등 일부 소식은 수신동의 여부에
						관계없이 발송됩니다.
					</li>
				</ul>

				<FixedBottomButton
					button_title="다음"
					button_props={{ type: "submit", disabled: !isValid }}
				></FixedBottomButton>
			</form>
		</section>
	)
}

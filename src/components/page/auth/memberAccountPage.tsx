"use client"

import CloseSvgURL from "@/assets/svg/close.svg?url"
import BaseHeader from "@/components/molecule/header/baseHeader"
import FixedBottomButton from "@/components/atom/button/fixedBottomButton"
import { BaseInput } from "@/components/atom/input/baseInput"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { userAccountSchema } from "@/schema/authSchema"
import { useRouter, useSearchParams } from "next/navigation"
import { createQueryParamString } from "@/lib/queryParamUtils"
import _ from "lodash"
import StepIndicator from "@/components/atom/indicator/stepIndicator"
import React from "react"
import IconLink from "@/components/atom/icon/iconLink"
import AuthTitle from "@/components/atom/title/authTitle"
import ErrorText from "@/components/atom/text/errorText"

export default function MemberAccountPage() {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid }
	} = useForm({
		resolver: zodResolver(userAccountSchema)
	})

	const router = useRouter()
	const searchParams = useSearchParams()
	const routerHandler = (queryParams: string) => {
		router.push(
			`/auth/signup?${_.replace(`${searchParams}`, "step=3", "step=4")}&${queryParams}`
		)
	}

	const titles = ["아이디와 비밀번호를", "입력해 주세요."]

	return (
		<>
			<BaseHeader
				leftComponent={
					<IconLink
						linkProps={{ href: "/auth/login" }}
						imageProps={{
							src: CloseSvgURL,
							alt: "close.svg",
							className: "cursor-pointer"
						}}
					/>
				}
				middleComponent={
					<StepIndicator stepNumber={4} activeStep={2}></StepIndicator>
				}
			></BaseHeader>
			<section>
				<div className="w-full flex flex-col mt-[60px] px-[30px]">
					<AuthTitle
						titles={titles}
						wrapperProps={{ className: "mb-6" }}
						titleProps={{ className: "font-semibold" }}
					/>

					<form
						onSubmit={handleSubmit((data, event) => {
							routerHandler(createQueryParamString(data))
						})}
						className="flex flex-col gap-2.5"
					>
						<div>
							<BaseInput
								placeholder="아이디 (4-13자리 이내)"
								ct_type={"text"}
								ct_is_error={!!errors.loginId}
								{...register("loginId")}
							/>
							<ErrorText text={errors?.loginId?.message as string} />
						</div>

						<div>
							<BaseInput
								placeholder="비밀번호 (10~20자리 이내)"
								ct_is_error={!!errors.password}
								{...register("password")}
							/>
							<ErrorText text={errors?.password?.message as string} />
						</div>

						<div>
							<BaseInput
								placeholder="비밀번호 확인"
								ct_is_error={!!errors.passwordValidate}
								{...register("passwordValidate")}
							/>
							<ErrorText text={errors?.passwordValidate?.message as string} />
						</div>

						<FixedBottomButton
							button_title="다음"
							button_props={{ type: "submit" }}
						></FixedBottomButton>
					</form>
				</div>
			</section>
		</>
	)
}

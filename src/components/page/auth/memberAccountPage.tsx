"use client"

import Link from "next/link"
import Image from "next/image"
import CloseSvgURL from "@/assets/svg/close.svg?url"
import BaseHeader from "@/components/atom/header/baseHeader"
import FixedBottomButton from "@/components/atom/button/fixedBottomButton"
import { BaseInput } from "@/components/atom/input/baseInput"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { userAccountSchema } from "@/schema/authSchema"
import { useRouter, useSearchParams } from "next/navigation"
import { createQueryParamString } from "@/lib/queryParamUtils"
import _ from "lodash"
import StepIndicator from "@/components/atom/stepIndicator"
import React from "react"
import LogoLink from "@/components/atom/link/logoLink"

export default function MemberAccountPage() {
	const {
		register,
		handleSubmit,
		formState: { errors }
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

	return (
		<section>
			<BaseHeader
				leftComponent={
					<LogoLink
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

			<div className="w-full flex flex-col mt-[60px] px-[30px]">
				<div className="flex flex-col gap-2 mb-6">
					<p className="text-2xl text-sb-black-100 font-semibold">
						아이디와 비밀번호를.
					</p>
					<p className="text-2xl text-sb-black-100 font-semibold">
						입력해 주세요.
					</p>
				</div>

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
						></BaseInput>
						{errors.loginId && (
							<p className="error-text mt-1">
								{errors.loginId.message as string}
							</p>
						)}
					</div>

					<div>
						<BaseInput
							placeholder="비밀번호 (10~20자리 이내)"
							ct_is_error={!!errors.password}
							{...register("password")}
						></BaseInput>
						{errors.password && (
							<p className="error-text mt-1">
								{errors.password.message as string}
							</p>
						)}
					</div>

					<div>
						<BaseInput
							placeholder="비밀번호 확인"
							ct_is_error={!!errors.passwordValidate}
							{...register("passwordValidate")}
						></BaseInput>
						{errors.passwordValidate && (
							<p className="error-text mt-1">
								{errors.passwordValidate.message as string}
							</p>
						)}
					</div>

					<FixedBottomButton
						button_title="다음"
						button_props={{ type: "submit" }}
					></FixedBottomButton>
				</form>
			</div>
		</section>
	)
}

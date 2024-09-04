"use client"

import BaseHeader from "@/components/atom/header/baseHeader"
import Link from "next/link"
import Image from "next/image"
import CloseSvgURL from "@/assets/svg/close.svg?url"
import { BaseInput } from "@/components/atom/input/baseInput"
import ButtonFooter from "@/components/atom/footer/buttonFooter"
import React from "react"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { emailSchema } from "@/schema/authSchema"
import { useRouter, useSearchParams } from "next/navigation"
import { createQueryParamString } from "@/lib/queryParamUtils"
import _ from "lodash"

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
		<main className="w-screen h-full flex flex-col">
			<BaseHeader
				leftComponent={
					<Link href={"/auth/login"}>
						<Image src={CloseSvgURL} alt="close.svg"></Image>
					</Link>
				}
			></BaseHeader>

			<form
				onSubmit={handleSubmit((data, event) => {
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

				<div className="flex flex-col">
					<BaseInput
						ct_type="email"
						placeholder="이메일을 입력해주세요"
						{...register("email")}
					/>
					{errors.email && (
						<p className="error-text">{errors.email.message as string}</p>
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
				</div>

				<ButtonFooter
					button_title="다음"
					button_props={{ type: "submit" }}
				></ButtonFooter>
			</form>
		</main>
	)
}

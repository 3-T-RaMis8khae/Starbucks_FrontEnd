"use client"

import React, { useEffect } from "react"
import { BaseInput } from "@/components/atom/input/baseInput"
import FixedBottomButton from "@/components/atom/button/fixedBottomButton"
import _ from "lodash"
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue
} from "@/components/ui/select"
import { FieldValues, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { mobileCarrier, phoneVerifySchema } from "@/schema/authSchema"
import { handleNumberKeyPress } from "@/lib/inputUtils"
import InputDescText from "@/components/atom/text/inputDescText"
import { useRouter, useSearchParams } from "next/navigation"
import { createQueryParamString } from "@/lib/queryParamUtils"
import { assignParamObject } from "@/lib/searchParamUtils"
import { UserInfoType } from "@/type/auth/signUp"

export interface UserInfoFormType {
	terms: boolean // 약관 전체 동의
	name: string // 유저 이름
	birthDate: string // 6자리 (생년월일)
	firstRrn: string // 주민번호 뒷자리 첫번째 문자
	phoneNumber: string // 휴대전화번호
}

export type UserInfoFormProps = Partial<UserInfoFormType>

function UserInfoForm(props: UserInfoFormProps) {
	// react hooks
	const {
		register,
		handleSubmit,
		setValue,
		formState: { isValid }
	} = useForm({
		resolver: zodResolver(phoneVerifySchema)
	})
	useEffect(() => {
		setValue("mobileCarrier", mobileCarrier.skt.value)
	}, [])

	const router = useRouter()
	const searchParams = useSearchParams()
	const routerHandler = (req: FieldValues) => {
		const targetObj: UserInfoType = {
			name: req["name"],
			birth: req["birthDate"],
			phoneNumber: req["phoneNumber"],
			step: "3"
		}
		router.push(
			`/auth/signup?${createQueryParamString(
				assignParamObject(searchParams, targetObj)
			)}`
		)
	}

	const description = [
		"타인의 개인정보를 도용하여 가입한 경우, 서비스 이용 제한 및 법적 제재를 받으실 수 있습니다."
	]

	return (
		<>
			<form
				className="flex flex-col gap-2 mt-2"
				onSubmit={handleSubmit(
					(data, event) => {
						console.log("on valid submit : ", data, event)
						routerHandler(data)
					},
					(data, event) => {
						console.log("on invalid submit : ", data, event)
					}
				)}
			>
				<BaseInput ct_type="text" placeholder="이름" {...register("name")} />

				{/* Resident Registration Number Input */}
				<div className="w-full flex items-center justify-between relative border-b border-b-sb-gray-0">
					<BaseInput
						ct_type="text"
						placeholder="생년월일 6자리"
						maxLength={6}
						className="border-none w-[160px]"
						onKeyDown={handleNumberKeyPress}
						{...register("birthDate")}
					/>
					<span className="w-3 h-[1px] border-[1px] border-t-sb-gray-100 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"></span>
					<div className="relative" onClickCapture={() => {}}>
						<BaseInput
							ct_type="text"
							placeholder="•"
							maxLength={1}
							className="border-none w-[100px] pr-[70px] bg-transparent z-[1]"
							dir="rtl"
							onKeyDown={handleNumberKeyPress}
							{...register("firstRrn")}
						/>
						<div className="absolute flex items-center gap-[2px] top-1/2 right-1 translate-y-[-50%] z-0">
							{_.times(6, (num) => (
								<span className="text-sb-black-100" key={num}>
									•
								</span>
							))}
						</div>
					</div>
				</div>

				{/* Phone Number Input */}
				<div className="flex items-center justify-between border-b border-b-sb-gray-0">
					<div className="flex items-center">
						<Select
							defaultValue={mobileCarrier.skt.value}
							onValueChange={(value) => {
								// setPhoneCarrier(value)
								console.log("on select change: ", value)
								setValue("mobileCarrier", value)
							}}
						>
							<SelectTrigger className="w-[120px] border-none text-base text-sb-gray-100 focus:border-none px-1">
								<SelectValue placeholder="통신사 선택"></SelectValue>
							</SelectTrigger>
							<SelectContent>
								<SelectGroup className="*:text-base *:text-sb-gray-100 h-[100px]">
									{_.keys(mobileCarrier).map((v) => {
										const key: keyof typeof mobileCarrier =
											v as keyof typeof mobileCarrier
										return (
											<SelectItem key={v} value={mobileCarrier[key].value}>
												{mobileCarrier[key].name}
											</SelectItem>
										)
									})}
								</SelectGroup>
							</SelectContent>
						</Select>

						<BaseInput
							{...register("phoneNumber")}
							ct_type="text"
							placeholder="휴대폰 번호"
							maxLength={11}
							className="border-none ml-1"
							onKeyDown={handleNumberKeyPress}
						/>
					</div>
				</div>

				<InputDescText
					descriptions={description}
					wrapperProps={{ className: "!mt-0" }}
				/>

				<FixedBottomButton
					button_title="다음"
					button_props={{
						type: "submit"
					}}
				></FixedBottomButton>
			</form>
		</>
	)
}

export default UserInfoForm
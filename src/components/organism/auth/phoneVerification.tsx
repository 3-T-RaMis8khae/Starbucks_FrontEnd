"use client"

import React, { useRef, useState } from "react"
import CheckBox from "@/components/molecule/checkBox/checkBox"
import TermsItem from "@/components/atom/termsItem"
import { BaseInput } from "@/components/atom/input/baseInput"
import ButtonFooter from "@/components/atom/footer/buttonFooter"
import _ from "lodash"
import { ValueOf } from "@/lib/types"
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { handleNumberKeyPress } from "@/lib/inputUtils"

export const mobileCarrier = {
	skt: { name: "SKT", value: "SKT" },
	kt: { name: "KT", value: "KT" },
	lgu: { name: "LGU+", value: "LGU+" },
	sktEc: { name: "SKT 알뜰폰", value: "SKT-Economical" },
	ktEc: { name: "KT 알뜰폰", value: "KT-Economical" },
	lguEc: { name: "LGU+ 알뜰폰", value: "LGU+-Economical" }
}

export interface PhoneVerificationType {
	terms: boolean // 약관 전체 동의
	name: string // 유저 이름
	birthDate: string // 6자리 (생년월일)
	firstRrn: string // 주민번호 뒷자리 첫번째 문자
	phoneNumber: string // 휴대전화번호
}

export type PhoneVerificationProps = Partial<PhoneVerificationType>
// const PhoneVerificationInit: PhoneVerificationProps = {
// 	terms: false,
// 	name: "",
// 	birthDate: "",
// 	firstRrn: "",
// 	mobileCarrier: "",
// 	phoneNumber: ""
// }
//
// const isNextBtAvailable = (props: PhoneVerificationProps) => {
// 	return true
// }
//
// const onFormChangeHandler:
// 	| React.FormEventHandler<HTMLFormElement>
// 	| undefined = (event: React.FormEvent<HTMLFormElement>) => {
// 	// const formData: FormData = new FormData(event.currentTarget)
// 	return undefined
// }

// zod
const schema = z.object({
	name: z.string().min(2),
	birthDate: z.string().length(6),
	firstRrn: z.string().length(1),
	// mobileCarrier: z.string().min(1),
	phoneNumber: z.string().min(10).max(11)
})

function PhoneVerification(props: PhoneVerificationProps) {
	// react hooks
	const [isTermChecked, setIsTermChecked] = useState<boolean>(!!props.terms)

	const [isPhoneVerified, setIsPhoneVerified] = useState<boolean>(false)
	const [phoneVerification, setPhoneVerification] = useState<string>("")
	const [isBtClicked, setIsBtClicked] = useState<boolean>(false)

	const [phoneCarrier, setPhoneCarrier] = useState<string>(
		mobileCarrier.skt.value
	)

	const {
		register,
		handleSubmit,
		formState: { isValid }
	} = useForm({
		resolver: zodResolver(schema)
	})

	return (
		<>
			<div className="flex flex-col gap-2.5 relative">
				<div className="flex flex-col justify-center ">
					<CheckBox
						id="agree-all"
						ct_label="[필수] 본인 인증 서비스 약관 전체 동의"
						ct_container_props={{
							className: "mb-3.5"
						}}
						checked={isTermChecked}
						onClick={() => {
							setIsTermChecked(!isTermChecked)
						}}
					></CheckBox>

					{!isTermChecked && (
						<div className="flex flex-col gap-2 pb-3.5">
							<TermsItem
								ct_terms="휴대폰 본인인증 서비스 이용약관 동의"
								ct_showIcon={true}
							></TermsItem>
							<TermsItem
								ct_terms="휴대폰 통신사 이용약관 동의"
								ct_showIcon={true}
							></TermsItem>
							<TermsItem
								ct_terms="개인정보 제공 및 이용 동의"
								ct_showIcon={true}
							></TermsItem>
							<TermsItem
								ct_terms="고유식별정보 처리"
								ct_showIcon={true}
							></TermsItem>
						</div>
					)}
					<div className="absolute left-[-30px] bottom-0 w-screen h-[1px] border-b-sb-gray-0 border-b-[1px] "></div>
				</div>
			</div>

			<form
				className="flex flex-col gap-2 mt-2"
				onSubmit={handleSubmit(
					(data, event) => {
						console.log("on valid submit : ", data, phoneCarrier, event)
					},
					(data, event) => {
						console.log("on invalid submit : ", data, phoneCarrier, event)
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
					></BaseInput>
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
						></BaseInput>
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
								setPhoneCarrier(value)
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
						></BaseInput>
					</div>

					<Button
						variant="sbGreenGhost"
						className="text-sm font-medium select-none"
						type={"button"}
						disabled={!isValid}
						onClick={() => {
							setIsBtClicked(true)
						}}
					>
						인증요청
					</Button>
				</div>

				{isBtClicked && (
					<BaseInput
						value={phoneVerification}
						onChange={(event) => {
							setPhoneVerification(event.target.value)
						}}
						ct_type="text"
						placeholder="인증번호"
						maxLength={6}
						onKeyDown={handleNumberKeyPress}
					></BaseInput>
				)}

				<ul className="input-desc !mt-0">
					<li>
						타인의 개인정보를 도용하여 가입한 경우, 서비스 이용 제한 및 법적
						제재를 받으실 수 있습니다.
					</li>
				</ul>

				<ButtonFooter
					button_title="다음"
					button_props={{
						type: "submit",
						disabled: !(isTermChecked && isValid && isPhoneVerified)
					}}
				></ButtonFooter>
			</form>
		</>
	)
}

export default PhoneVerification

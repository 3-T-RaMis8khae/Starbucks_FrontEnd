"use client"

import Image from "next/image"

import BaseHeader from "@/components/atom/header/baseHeader"
import CloseURL from "@/assets/svg/close.svg?url"
import React from "react"
import PhoneVerification from "@/components/organism/auth/phoneVerification"

export interface IdentityVerificationType {
	terms: boolean // 약관 전체 동의
	name: string // 유저 이름
	birthDate: string // 6자리 (생년월일)
	firstOfRrn: string // 주민번호 뒷자리 첫번째 문자
	mobileCarrier: string // 통신사
	phoneNumber: string // 휴대전화번호
}

export default function IdentityVerificationPage() {
	return (
		<main className="w-screen h-screen flex flex-col hidden-scroll">
			<BaseHeader
				leftComponent={
					<Image width={20} height={20} src={CloseURL} alt="close.svg"></Image>
				}
			></BaseHeader>

			<div className="w-full h-full flex flex-col mt-[50px] mb-[90px] px-[30px] pb-8 hidden-scroll">
				<div className="flex flex-col gap-2 mb-10 mt-3">
					<p className="text-2xl text-sb-black-100 font-semibold">
						본인확인을 위해
					</p>
					<p className="text-2xl text-sb-black-100 font-semibold">
						인증을 진행해 주세요
					</p>
				</div>

				<PhoneVerification></PhoneVerification>
			</div>
		</main>
	)
}

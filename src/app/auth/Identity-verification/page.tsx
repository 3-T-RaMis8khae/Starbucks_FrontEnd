"use client"

import { useState } from "react"
import Image from "next/image"

import BaseHeader from "@/components/atom/header/baseHeader"
import ButtonFooter from "@/components/atom/footer/buttonFooter"
import VerificationCard from "@/components/atom/card/verificationCard"

import CloseURL from "@/assets/svg/close.svg?url"
import TossURI from "@/assets/image/tossImage.webp"
import PhoneURI from "@/assets/image/mobilePhone.png"
import { RadioType } from "@/components/atom/card/verificationCard"

// todo - 1) Need to refactor the partial codes into new component
// todo - 2) Need to implement the feature to proceed to mobile toss verification.
export default function IdentityVerificationPage() {
	const [radio, setRadio] = useState("toss")

	const radioObj = {
		toss: "toss",
		phone: "phone"
	}

	const onRadioChange = (radioName: RadioType) => {
		console.log("onRadioChange - toss : ", radioName)
		if (radioName != radio) {
			setRadio(radioName as string)
		}
	}

	return (
		<main className="w-screen h-full flex flex-col">
			<BaseHeader
				leftComponent={
					<Image width={20} height={20} src={CloseURL} alt="close.svg"></Image>
				}
				title=""
			></BaseHeader>

			<div className="w-full flex flex-col mt-[70px] px-[30px]">
				<div className="flex flex-col gap-2 mb-10">
					<p className="text-2xl text-sb-black-100 font-semibold">
						본인확인을 위해
					</p>
					<p className="text-2xl text-sb-black-100 font-semibold">
						인증을 진행해 주세요
					</p>
				</div>
			</div>

			<div className="flex flex-col items-center gap-2.5 px-[30px]">
				<VerificationCard
					image={{ url: TossURI, alt: "phone.png" }}
					title="토스로 인증하기"
					sub_title="5초만에 간편하게 인증할 수 있어요."
					curCheck={radio}
					radio_props={{ value: radioObj.toss }}
					onRadioChange={onRadioChange}
				></VerificationCard>
				<VerificationCard
					image={{ url: PhoneURI, alt: "phone.png" }}
					title="휴대폰 본인 인증하기"
					sub_title="본인 명의 휴대폰으로 인증할 수 있어요."
					curCheck={radio}
					radio_props={{ value: radioObj.phone }}
					onRadioChange={onRadioChange}
				></VerificationCard>
			</div>

			<ButtonFooter
				button_title="다음"
				button_props={{ type: "button" }}
			></ButtonFooter>
		</main>
	)
}

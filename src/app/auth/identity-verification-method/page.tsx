"use client"

import React, { useState } from "react"
import Image from "next/image"

import BaseHeader from "@/components/molecule/header/baseHeader"
import FixedBottomButton from "@/components/atom/button/fixedBottomButton"
import VerificationCard from "@/components/molecule/card/verificationCard"

import CloseURL from "@/assets/svg/close.svg?url"
import TossURI from "@/assets/image/tossImage.webp"
import PhoneURI from "@/assets/image/mobilePhone.png"
import { RadioType } from "@/components/molecule/card/verificationCard"
import IconLink from "@/components/atom/icon/iconLink"
import AuthTitle from "@/components/atom/title/authTitle"

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

	const titles = ["본인확인을 위해", "인증을 진행해 주세요"]

	return (
		<>
			<BaseHeader
				leftComponent={
					<IconLink
						linkProps={{ href: "/auth/login", scroll: true }}
						imageProps={{
							src: CloseURL,
							alt: "close.svg",
							className: "cursor-pointer"
						}}
					/>
				}
			/>
			<section className="w-screen h-full flex flex-col">
				<AuthTitle
					titles={titles}
					wrapperProps={{ className: "mb-10 mt-[70px] px-[30px]" }}
					titleProps={{ className: "font-semibold" }}
				/>

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

				<FixedBottomButton
					button_title="다음"
					button_props={{ type: "button" }}
				></FixedBottomButton>
			</section>
		</>
	)
}

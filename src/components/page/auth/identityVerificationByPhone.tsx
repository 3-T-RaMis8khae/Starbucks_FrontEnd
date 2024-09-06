"use client"

import BaseHeader from "@/components/atom/header/baseHeader"
import CloseURL from "@/assets/svg/close.svg?url"
import React from "react"
import PhoneVerification from "@/components/organism/auth/phoneVerification"
import StepIndicator from "@/components/atom/stepIndicator"
import IconLink from "@/components/atom/icon/iconLink"

// todo : Implement the functionality for its component.
export default function IdentityVerificationByPhone({
	isSignUp = false
}: {
	isSignUp?: boolean
}) {
	return (
		<section>
			<BaseHeader
				leftComponent={
					<IconLink
						linkProps={{ href: "/auth/login" }}
						imageProps={{
							src: CloseURL,
							alt: "close.svg"
						}}
					/>
				}
				middleComponent={
					isSignUp && <StepIndicator stepNumber={4} activeStep={1} />
				}
			/>

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
		</section>
	)
}

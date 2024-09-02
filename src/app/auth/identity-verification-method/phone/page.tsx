import Image from "next/image"

import BaseHeader from "@/components/atom/header/baseHeader"
import ButtonFooter from "@/components/atom/footer/buttonFooter"
import CloseURL from "@/assets/svg/close.svg?url"
import CheckBox from "@/components/molecule/checkBox/checkBox"
import TermsItem from "@/components/atom/termsItem"
import { BaseInput } from "@/components/atom/input/baseInput"
import React from "react"
import PhoneNumberInput from "@/components/molecule/input/phoneNumberInput"
import RrnInput from "@/components/molecule/input/rrnInput"

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

				<div className="flex flex-col gap-2.5 relative">
					<div className="flex flex-col justify-center ">
						<CheckBox
							id="agree-all"
							ct_label="[필수] 본인 인증 서비스 약관 전체 동의"
							ct_container_props={{
								className: "mb-3.5"
							}}
						></CheckBox>

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

							<div className="absolute left-[-30px] bottom-0 w-screen h-[1px] border-b-sb-gray-0 border-b-[1px] "></div>
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-2 mt-2">
					<BaseInput ct_type="text" placeholder="이름" />
					<RrnInput></RrnInput>
					<PhoneNumberInput></PhoneNumberInput>

					<ul className="input-desc !mt-0">
						<li>
							타인의 개인정보를 도용하여 가입한 경우, 서비스 이용 제한 및 법적
							제재를 받으실 수 있습니다.
						</li>
					</ul>
				</div>
			</div>

			<ButtonFooter
				button_title="다음"
				button_props={{ type: "button" }}
			></ButtonFooter>
		</main>
	)
}

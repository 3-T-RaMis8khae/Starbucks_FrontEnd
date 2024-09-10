"use client"

import { useState } from "react"
import { useImmerReducer } from "use-immer"
import _ from "lodash"

import BaseHeader from "@/components/atom/header/baseHeader"
import FixedBottomButton from "@/components/atom/button/fixedBottomButton"
import CloseSvgURL from "@/assets/svg/close.svg?url"
import StarbucksSvgUrl from "@/assets/icon/startbucks.svg?url"
import CheckBox from "@/components/molecule/checkBox/checkBox"
import BaseCheckBox from "@/components/atom/checkbox/baseCheckBox"
import { WritableDraft } from "immer"
import { useRouter } from "next/navigation"
import { createQueryParamString } from "@/lib/queryParamUtils"
import Logo from "@/components/atom/logo/logo"
import IconLink from "@/components/atom/icon/iconLink"
import AuthTitle from "@/components/atom/title/authTitle"

interface SignupAgreementProps {
	agreementState?: AgreementState
}

export interface AgreementState {
	agreeAll: boolean
	agreeUsage: boolean
	agreeCollectUserInfo: boolean
	agreeUsageStarbucksCard: boolean
	agreeMarketingInfoAll: boolean
	agreeMarketingInfoSms: boolean
	agreeMarketingInfoEmail: boolean
}

const agreementStateInit: AgreementState = {
	agreeAll: false,
	agreeUsage: false,
	agreeCollectUserInfo: false,
	agreeUsageStarbucksCard: false,
	agreeMarketingInfoAll: false,
	agreeMarketingInfoSms: false,
	agreeMarketingInfoEmail: false
}
// export const agreementSearchParams = _.keys(agreementStateInit)

type AgreementTypes =
	| "agreeAll"
	| "agreeUsage"
	| "agreeCollectUserInfo"
	| "agreeUsageStarbucksCard"
	| "agreeMarketingInfoAll"
	| "agreeMarketingInfoSms"
	| "agreeMarketingInfoEmail"

type AgreementAction = { type: AgreementTypes }

const isEssentialAgreementChecked = (agreement: AgreementState) =>
	agreement.agreeUsage &&
	agreement.agreeCollectUserInfo &&
	agreement.agreeUsageStarbucksCard

const checkAgreeAll = (draft: WritableDraft<AgreementState>) => {
	draft.agreeAll = _.every(_.without(_.keys(draft), "agreeAll"), (key) => {
		const _key = key as keyof AgreementState
		return draft[_key]
	})
}

const agreementReducer = (
	draft: WritableDraft<AgreementState>,
	action: AgreementAction
): void => {
	const checkBox = draft
	switch (action.type) {
		case "agreeAll":
			checkBox.agreeAll = !checkBox.agreeAll
			_.forOwn(checkBox, (value, key) => {
				const _key = key as keyof AgreementState
				checkBox[_key] = !checkBox.agreeAll
			})
			break
		case "agreeUsage":
			checkBox.agreeUsage = !checkBox.agreeUsage
			break
		case "agreeCollectUserInfo":
			checkBox.agreeCollectUserInfo = !checkBox.agreeCollectUserInfo
			break
		case "agreeUsageStarbucksCard":
			checkBox.agreeUsageStarbucksCard = !checkBox.agreeUsageStarbucksCard
			break
		case "agreeMarketingInfoAll":
			checkBox.agreeMarketingInfoAll = !checkBox.agreeMarketingInfoAll
			if (checkBox.agreeMarketingInfoAll) {
				checkBox.agreeMarketingInfoSms = true
				checkBox.agreeMarketingInfoEmail = true
			} else {
				checkBox.agreeMarketingInfoSms = false
				checkBox.agreeMarketingInfoEmail = false
			}
			break
		case "agreeMarketingInfoSms":
			checkBox.agreeMarketingInfoSms = !checkBox.agreeMarketingInfoSms
			checkBox.agreeMarketingInfoAll =
				checkBox.agreeMarketingInfoSms && checkBox.agreeMarketingInfoEmail
			break
		case "agreeMarketingInfoEmail":
			checkBox.agreeMarketingInfoEmail = !checkBox.agreeMarketingInfoEmail
			checkBox.agreeMarketingInfoAll =
				checkBox.agreeMarketingInfoSms && checkBox.agreeMarketingInfoEmail
			break
		default:
			break
	}
	checkAgreeAll(checkBox)
}

function SignupAgreement({
	agreementState = agreementStateInit
}: SignupAgreementProps) {
	// react hooks
	const [checkboxes, dispatch] = useImmerReducer<
		AgreementState,
		AgreementAction
	>(agreementReducer, agreementState)
	const [isBtAvailable, setIsBtAvailable] = useState<boolean>(
		isEssentialAgreementChecked(checkboxes)
	)

	const router = useRouter()
	const routerHandler = () => {
		router.push(`/auth/signup?step=${2}&${createQueryParamString(checkboxes)}`)
	}

	const titles = ["고객님,", "환영합니다!"]

	return (
		<section>
			<BaseHeader
				leftComponent={
					<IconLink
						linkProps={{ href: "/auth/login" }}
						imageProps={{
							src: CloseSvgURL,
							alt: "close.svg"
						}}
					/>
				}
			/>

			<div className="w-full h-full flex flex-col mt-[50px] mb-[90px] px-[30px] pb-8 hidden-scroll">
				<Logo
					imageProps={{
						src: StarbucksSvgUrl,
						alt: "starbucks.svg"
					}}
					wrapperProps={{ className: "mb-6 mt-10" }}
				/>

				<AuthTitle
					titles={titles}
					wrapperProps={{ className: "mb-10" }}
					titleProps={{ className: "font-semibold" }}
				/>

				<form
					onChange={() => {
						setIsBtAvailable(isEssentialAgreementChecked(checkboxes))
					}}
					className="flex flex-col"
				>
					<CheckBox
						id="agree-all"
						name="agree-all"
						ct_label="약관 전체동의"
						ct_container_props={{
							className: "my-[8px]"
						}}
						checked={checkboxes.agreeAll}
						onClick={() => {
							dispatch({ type: "agreeAll" })
						}}
					/>
					<div className="w-full h-[1px] border-t-[1px] border-b-sb-gray-0"></div>
					<CheckBox
						id="agree-usage"
						name="agree-usage"
						ct_label="[필수] 이용약관 동의"
						ct_showIcon={true}
						ct_container_props={{ className: "my-[8px]" }}
						checked={checkboxes.agreeUsage}
						onClick={() => {
							dispatch({ type: "agreeUsage" })
						}}
					/>
					<CheckBox
						id="agree-collect-user-info"
						name="agree-collect-user-info"
						ct_label="[필수] 개인정보 수집 및 이용동의"
						ct_showIcon={true}
						ct_container_props={{ className: "my-[8px]" }}
						checked={checkboxes.agreeCollectUserInfo}
						onClick={() => {
							dispatch({ type: "agreeCollectUserInfo" })
						}}
					/>
					<CheckBox
						id="agree-usage-starbucks-card"
						ct_label="[필수] 스타벅스 카드 이용약관"
						ct_showIcon={true}
						ct_container_props={{ className: "my-[8px]" }}
						checked={checkboxes.agreeUsageStarbucksCard}
						onClick={() => {
							dispatch({ type: "agreeUsageStarbucksCard" })
						}}
					/>
					<div className="flex flex-col">
						<CheckBox
							id="agree-marketing-info"
							ct_label="[선택] 광고성 정보 수신동의"
							ct_showIcon={true}
							ct_container_props={{ className: "my-[8px]" }}
							checked={checkboxes.agreeMarketingInfoAll}
							onClick={() => {
								dispatch({ type: "agreeMarketingInfoAll" })
							}}
						/>
						<div className="pl-[28px]">
							<span className="font-normal text-xs text-sb-black-100">
								광고성 정보 수신 방법
							</span>
							<div className="flex items-center gap-8">
								<BaseCheckBox
									id="email"
									ct_label="E-mail"
									checked={checkboxes.agreeMarketingInfoEmail}
									onClick={() => {
										dispatch({ type: "agreeMarketingInfoEmail" })
									}}
								/>
								<BaseCheckBox
									id="sms"
									ct_label="SMS"
									checked={checkboxes.agreeMarketingInfoSms}
									onClick={() => {
										dispatch({ type: "agreeMarketingInfoSms" })
									}}
								/>
							</div>
						</div>
					</div>
				</form>
			</div>

			<FixedBottomButton
				button_title="다음"
				button_props={{
					disabled: !isBtAvailable,
					onClick: routerHandler,
					type: "button"
				}}
			/>
		</section>
	)
}

export default SignupAgreement

import { Button } from "@/components/ui/button"
import { CloseIcon } from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import LabelInput from "@/components/molecule/input/labelInput"
import CloseSvg from "@/assets/svg/close.svg"
import CloseSvgURI from "@/assets/svg/close.svg?url"
import CheckBox from "@/components/molecule/checkBox/checkBox"
import { BaseInput } from "@/components/atom/input/baseInput"

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue
} from "@/components/ui/select"

export default function ComponentPage() {
	return (
		<main className="flex flex-col gap-4 p-2.5">
			<h1>components</h1>

			<h2 className="mt-5">SVG</h2>
			<div className="flex items-center gap-2.5">
				<CloseIcon></CloseIcon>
				<CloseSvg></CloseSvg>
				<Image src={CloseSvgURI} alt={"close.svg"}></Image>
			</div>

			<h2 className="mt-5">Buttons</h2>
			<div className="flex items-center gap-2.5">
				<Button>Button1</Button>
				<Button>Button2</Button>
				<Button>Button3</Button>
			</div>

			<h2 className="mt-5">Inputs</h2>
			<div className="flex flex-col gap-2.5">
				<Input />
				<select></select>
			</div>
			<div className="mt-2 flex flex-col gap-2.5">
				<LabelInput label_name="label" />
				<LabelInput label_name="error test" />
			</div>

			<h2 className="mt-2">Base Inputs</h2>
			<div className="mt-2 flex flex-col gap-2.5">
				<BaseInput placeholder="아이디 (4-13자리 이내)"></BaseInput>
				<BaseInput
					placeholder="아이디 (4-13자리 이내)"
					ct_check_visible={true}
				></BaseInput>
				<BaseInput
					placeholder="아이디 (4-13자리 이내)"
					ct_type={"text"}
				></BaseInput>
				<BaseInput
					placeholder="아이디 (4-13자리 이내)"
					ct_type={"color"}
				></BaseInput>
				<BaseInput
					placeholder="아이디 (4-13자리 이내)"
					ct_type={"email"}
				></BaseInput>
				<h2>hidden input</h2>
				<BaseInput
					placeholder="아이디 (4-13자리 이내)"
					ct_type={"hidden"}
				></BaseInput>
			</div>

			{/*<h2 className="mt-5">Identity Verification card</h2>*/}
			{/*<div className="flex flex-col gap-2.5">*/}
			{/*	<VerificationCard*/}
			{/*		image={{ url: TossURI, alt: "phone.png" }}*/}
			{/*		title="토스로 인증하기"*/}
			{/*		sub_title="5초만에 간편하게 인증할 수 있어요."*/}
			{/*	></VerificationCard>*/}
			{/*	<VerificationCard*/}
			{/*		image={{ url: PhoneURI, alt: "phone.png" }}*/}
			{/*		title="휴대폰 본인 인증하기"*/}
			{/*		sub_title="본인 명의 휴대폰으로 인증할 수 있어요."*/}
			{/*	></VerificationCard>*/}
			{/*</div>*/}

			<h2 className="mt-5">CheckBox</h2>
			<div className="flex flex-col items-center gap-2.5">
				<CheckBox id="use-agreement" ct_label="[필수] 이용약관 동의"></CheckBox>
				<CheckBox
					id="info-agreement"
					ct_label="[필수] 개인정보 수집 및 이용동의"
					ct_showIcon={true}
				></CheckBox>
			</div>
		</main>
	)
}

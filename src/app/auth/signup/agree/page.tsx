import BaseHeader from "@/components/atom/header/baseHeader"
import ButtonFooter from "@/components/atom/footer/buttonFooter"
import Link from "next/link"
import Image from "next/image"
import CloseSvgURL from "@/assets/svg/close.svg?url"
import StarbucksSvgUrl from "@/assets/icon/startbucks.svg?url"
import CheckBox from "@/components/molecule/checkBox/checkBox"
import BaseCheckBox from "@/components/molecule/checkBox/baseCheckBox"

// todo : need to fix scroll style in small device
export default function AgreePage() {
	return (
		<main className="w-screen h-screen flex flex-col hidden-scroll">
			<BaseHeader
				leftComponent={
					<Link href={"/"}>
						<Image src={CloseSvgURL} alt="close.svg"></Image>
					</Link>
				}
			></BaseHeader>

			<div className="w-full h-full flex flex-col mt-[50px] mb-[90px] px-[30px] pb-8 hidden-scroll">
				<Image
					className="mb-6 mt-14"
					src={StarbucksSvgUrl}
					alt="startbuck.svg"
					width={60}
					height={60}
				></Image>

				<div className="flex flex-col gap-2 mb-10">
					<p className="text-2xl text-sb-black-100 font-semibold">고객님,</p>
					<p className="text-2xl text-sb-black-100 font-semibold">
						환영합니다!
					</p>
				</div>

				<div className="flex flex-col">
					<CheckBox
						id="agree-all"
						ct_label="약관 전체동의"
						ct_container_props={{
							className: "my-[8px]"
						}}
					></CheckBox>
					<div className="w-full h-[1px] border-t-[1px] border-b-sb-gray-0"></div>
					<CheckBox
						id="agree-usage"
						ct_label="[필수] 이용약관 동의"
						ct_showIcon={true}
						ct_container_props={{ className: "my-[8px]" }}
					></CheckBox>
					<CheckBox
						id="agree-collect-user-info"
						ct_label="[필수] 개인정보 수집 및 이용동의"
						ct_showIcon={true}
						ct_container_props={{ className: "my-[8px]" }}
					></CheckBox>
					<CheckBox
						id="agree-usage-starbucks-card"
						ct_label="[필수] 스타벅스 카드 이용약관"
						ct_showIcon={true}
						ct_container_props={{ className: "my-[8px]" }}
					></CheckBox>
					<div className="flex flex-col">
						<CheckBox
							id="agree-marketing-info"
							ct_label="[선택] 광고성 정보 수신동의"
							ct_showIcon={true}
							ct_container_props={{ className: "my-[8px]" }}
						></CheckBox>
						<div className="pl-[28px]">
							<span className="font-normal text-xs text-sb-black-100">
								광고성 정보 수신 방법
							</span>
							<div className="flex items-center gap-8">
								<BaseCheckBox id="email" ct_label="E-mail"></BaseCheckBox>
								<BaseCheckBox id="sms" ct_label="SMS"></BaseCheckBox>
							</div>
						</div>
					</div>
				</div>
			</div>

			<ButtonFooter
				button_title="다음"
				button_props={{ type: "submit" }}
			></ButtonFooter>
		</main>
	)
}

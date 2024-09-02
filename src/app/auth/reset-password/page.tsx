import BaseHeader from "@/components/atom/header/baseHeader"
import ButtonFooter from "@/components/atom/footer/buttonFooter"
import Link from "next/link"
import Image from "next/image"
import CloseSvgURL from "@/assets/svg/close.svg?url"
import CheckBox from "@/components/molecule/checkBox/checkBox"
import BaseCheckBox from "@/components/molecule/checkBox/baseCheckBox"
import { BaseInput } from "@/components/atom/input/baseInput"

export default function ResetPasswordPage() {
	return (
		<main className="w-screen h-screen flex flex-col hidden-scroll">
			<BaseHeader
				leftComponent={
					<Link href={"/"}>
						<Image src={CloseSvgURL} alt="close.svg"></Image>
					</Link>
				}
			></BaseHeader>

			<div className="w-full h-full flex flex-col justify-between mt-[50px] mb-[90px]  hidden-scroll">
				<div className="flex flex-col px-[30px]">
					<p className="text-2xl text-sb-black-100 font-semibold mb-2">
						<span className="text-sb-green-100">NickName</span>님의
					</p>
					<p className="text-2xl text-sb-black-100 font-semibold mb-4">
						비밀번호를 변경합니다.
					</p>

					<div className="flex flex-col gap-2">
						<BaseInput placeholder="새 비밀번호 (10~20자리 이내)"></BaseInput>
						<BaseInput placeholder="새 비밀번호 확인"></BaseInput>
					</div>
				</div>

				<div className="w-full p-[30px] bg-sb-gray-0 flex flex-col"></div>
			</div>

			<ButtonFooter
				button_title="확인"
				button_props={{ type: "submit" }}
			></ButtonFooter>
		</main>
	)
}

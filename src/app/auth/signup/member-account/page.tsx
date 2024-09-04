import Link from "next/link"
import Image from "next/image"
import CloseSvgURL from "@/assets/svg/close.svg?url"
import BaseHeader from "@/components/atom/header/baseHeader"
import ButtonFooter from "@/components/atom/footer/buttonFooter"
import { BaseInput } from "@/components/atom/input/baseInput"

export default function Member_accountPage() {
	return (
		<main className="w-screen h-full flex flex-col">
			<BaseHeader
				leftComponent={
					<Link href={"/"}>
						<Image src={CloseSvgURL} alt="close.svg"></Image>
					</Link>
				}
			></BaseHeader>

			<div className="w-full flex flex-col mt-[60px] px-[30px]">
				<div className="flex flex-col gap-2 mb-6">
					<p className="text-2xl text-sb-black-100 font-semibold">
						아이디와 비밀번호를.
					</p>
					<p className="text-2xl text-sb-black-100 font-semibold">
						입력해 주세요.
					</p>
				</div>

				<div className="flex flex-col gap-2.5">
					<BaseInput
						placeholder="아이디 (4-13자리 이내)"
						ct_type={"email"}
					></BaseInput>
					<BaseInput placeholder="비밀번호 (10~20자리 이내)"></BaseInput>
					<BaseInput placeholder="비밀번호 확인"></BaseInput>
				</div>
			</div>

			<ButtonFooter
				button_title="다음"
				button_props={{ type: "submit" }}
			></ButtonFooter>
		</main>
	)
}

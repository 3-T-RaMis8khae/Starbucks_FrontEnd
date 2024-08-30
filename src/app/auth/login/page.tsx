import BaseHeader from "@/components/atom/header/baseHeader"
import ButtonFooter from "@/components/atom/footer/buttonFooter"
import LabelInput from "@/components/atom/Input/LabelInput"
import StarbucksSvgUrl from "@/assets/icon/startbucks.svg?url"
import Link from "next/link"
import Image from "next/image"

// todo - 1) Need to implement the feature for Authentication.
export default function LoginPage() {
	return (
		<main className="w-screen h-full flex flex-col">
			<BaseHeader title={"로그인"}></BaseHeader>

			<div className="w-full flex flex-col mt-[60px] px-[30px]">
				<Image
					className="mb-6 mt-8"
					src={StarbucksSvgUrl}
					alt="startbuck.svg"
					width={60}
					height={60}
				></Image>

				<div className="flex flex-col gap-2 mb-10">
					<p className="text-2xl text-sb-black-100 font-bold">안녕하세요.</p>
					<p className="text-2xl text-sb-black-100 font-bold">
						스타벅스입니다.
					</p>
					<p className="text-base">회원 서비스 이용을 위해 로그인 해주세요.</p>
				</div>

				<form>
					<div className="flex flex-col items-center gap-2.5">
						<LabelInput label_name={"아이디"}></LabelInput>
						<LabelInput label_name={"비밀번호"} type={"password"}></LabelInput>
					</div>
					<ButtonFooter
						button_title="로그인하기"
						button_props={{ type: "submit" }}
					></ButtonFooter>
				</form>

				<div className="flex items-center justify-center mt-8">
					<Link href={`/auth/forgot-account`} className="text-base">
						아이디 찾기
					</Link>
					<span className="text-gray-500 px-3">|</span>
					<Link href={`/auth/reset-password`} className="text-base">
						비밀번호 찾기
					</Link>
					<span className="text-gray-500 px-3">|</span>
					<Link href={`/auth/signup`} className="text-base">
						회원가입
					</Link>
				</div>
			</div>
		</main>
	)
}

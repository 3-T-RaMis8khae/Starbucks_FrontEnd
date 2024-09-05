import BaseHeader from "@/components/atom/header/baseHeader"
import StarbucksSvgUrl from "@/assets/icon/startbucks.svg?url"
import Image from "next/image"
import LoginForm from "@/components/molecule/form/loginForm"
import LoginLink from "@/components/molecule/link/loginLink"

// todo - 1) Need to implement the feature for Authentication.
export default function LoginPage() {
	return (
		<>
			<BaseHeader middleComponent={"로그인"}></BaseHeader>
			<main className="w-screen h-full flex flex-col mt-[60px] px-[30px]">
				{/* Starbucks Logo wrap image //feedback*/}
				<div className="w-[100px] h-[100px] mb-6 mt-8 object-cover">
					<Image
						src={StarbucksSvgUrl}
						priority
						alt="startbuck.svg"
						width={400}
						height={400}
					/>
				</div>

				<div className="flex flex-col gap-2 mb-10">
					<p className="text-2xl text-sb-black-100 font-bold">안녕하세요.</p>
					<p className="text-2xl text-sb-black-100 font-bold">
						스타벅스입니다.
					</p>
					<p className="text-base">회원 서비스 이용을 위해 로그인 해주세요.</p>
				</div>

				<LoginForm />

				<LoginLink />
			</main>
		</>
	)
}

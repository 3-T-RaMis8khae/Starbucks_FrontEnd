import BaseHeader from "@/components/molecule/header/baseHeader"
import StarbucksSvgUrl from "@/assets/icon/startbucks.svg?url"
import LoginForm from "@/components/molecule/form/loginForm"
import LoginLink from "@/components/molecule/link/loginLink"
import Logo from "@/components/atom/logo/logo"
import AuthTitle from "@/components/atom/title/authTitle"
import AuthSubTitle from "@/components/atom/title/authSubTitle"

// todo - 1) Need to implement the feature for Authentication.
export default function LoginPage() {
	const titles = ["안녕하세요.", "스타벅스입니다."]
	const subTitle = ["회원 서비스 이용을 위해 로그인 해주세요."]

	return (
		<>
			<BaseHeader middleComponent={"로그인"}></BaseHeader>
			<main className="w-screen h-full flex flex-col px-[30px] pt-[30px] pb-[100px]">
				<Logo
					imageProps={{
						src: StarbucksSvgUrl,
						alt: "starbucks.svg"
					}}
					wrapperProps={{ className: "mb-6 mt-8" }}
				/>

				<AuthTitle titles={titles} titleProps={{ className: "font-bold" }} />
				<AuthSubTitle
					titles={subTitle}
					wrapperProps={{ className: "mb-10 mt-3" }}
				/>

				<LoginForm />

				<LoginLink />
			</main>
		</>
	)
}

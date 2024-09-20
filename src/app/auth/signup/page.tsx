import SignupAgreement from "@/components/page/auth/SignupAgreement"
import MemberAccountPage from "@/components/page/auth/memberAccountPage"
import EmailPage from "@/components/page/auth/emailPage"
import NicknamePage from "@/components/page/auth/nicknamePage"
import UserInfoPage from "@/components/page/auth/userInfoPage"
import { SearchParams } from "@/type/next"

export default async function SignupPage({ searchParams }: SearchParams) {
	return (
		<main className="w-screen h-screen flex flex-col hidden-scroll">
			{(searchParams["step"] == "1" || !searchParams["step"]) && (
				<SignupAgreement />
			)}
			{searchParams["step"] == "2" && <UserInfoPage />}
			{searchParams["step"] == "3" && <MemberAccountPage />}
			{searchParams["step"] == "4" && <EmailPage />}
			{searchParams["step"] == "5" && <NicknamePage />}
		</main>
	)
}

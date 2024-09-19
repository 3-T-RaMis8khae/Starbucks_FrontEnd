import SignupAgreement from "@/components/page/auth/SignupAgreement"
import MemberAccountPage from "@/components/page/auth/memberAccountPage"
import EmailPage from "@/components/page/auth/emailPage"
import NicknamePage from "@/components/page/auth/nicknamePage"
import UserInfoPage from "@/components/page/auth/userInfoPage"
import { signUpAction } from "@/action/auth/signUpAction"
import { SignUpRequestBodyType } from "@/type/auth/signUp"

export default async function SignupPage({
	searchParams
}: {
	searchParams: { [key: string]: string }
}) {
	const handleSignUp = async (req: SignUpRequestBodyType) => {
		"use server"
		const res = await signUpAction(req)
	}
	return (
		<main className="w-screen h-screen flex flex-col hidden-scroll">
			{(searchParams["step"] == "1" || !searchParams["step"]) && (
				<SignupAgreement />
			)}
			{searchParams["step"] == "2" && <UserInfoPage />}
			{searchParams["step"] == "3" && <MemberAccountPage />}
			{searchParams["step"] == "4" && <EmailPage />}
			{searchParams["step"] == "5" && (
				<NicknamePage handleSignUp={handleSignUp} />
			)}
		</main>
	)
}

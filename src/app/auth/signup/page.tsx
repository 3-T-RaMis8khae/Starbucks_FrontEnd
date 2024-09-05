import SignupAgreement from "@/components/page/auth/SignupAgreement"
import MemberAccountPage from "@/components/page/auth/memberAccountPage"
import EmailPage from "@/components/page/auth/emailPage"
import NicknamePage from "@/components/page/auth/nicknamePage"
import IdentityVerificationByPhone from "@/components/page/auth/identityVerificationByPhone"

export default function SignupPage({
	searchParams
}: {
	searchParams: { [key: string]: string }
}) {
	return (
		<main className="w-screen h-screen flex flex-col hidden-scroll">
			{searchParams["step"] == "1" && <SignupAgreement />}
			{searchParams["step"] == "2" && (
				<IdentityVerificationByPhone isSignUp={true} />
			)}
			{searchParams["step"] == "3" && <MemberAccountPage />}
			{searchParams["step"] == "4" && <EmailPage />}
			{searchParams["step"] == "5" && <NicknamePage />}
		</main>
	)
}

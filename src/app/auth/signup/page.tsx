import SignupAgreement from "@/components/organism/auth/SignupAgreement"
import PhoneVerification from "@/components/organism/auth/phoneVerification"
import MemberAccountPage from "@/components/page/auth/memberAccountPage"

export default function SignupPage({
	searchParams
}: {
	searchParams: { [key: string]: string }
}) {
	// console.log("Page searchParams : ", searchParams)
	return (
		<main>
			{searchParams["step"] == "1" && <SignupAgreement />}
			{searchParams["step"] == "2" && <PhoneVerification />}
			{searchParams["step"] == "3" && <MemberAccountPage />}
			{searchParams["step"] == "4" && <SignupAgreement />}
			{searchParams["step"] == "5" && <SignupAgreement />}
		</main>
	)
}

/*
주소창을 활용 
1. 회원가입 경로에서 쿼리 파라미터를 변경함으로써 화면을 전환시킨다.

 */

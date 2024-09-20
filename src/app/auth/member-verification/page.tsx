import MemberVerificationPage from "@/components/page/auth/memberVerification"
import { SearchParams } from "@/type/next"

export default function MemberVerificationPage_({
	searchParams
}: SearchParams) {
	console.log("searchParams in member verification page", searchParams)
	return (
		<>
			<MemberVerificationPage />
		</>
	)
}

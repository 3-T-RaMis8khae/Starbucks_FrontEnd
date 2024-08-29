import BaseHeader from "@/components/atom/header/baseHeader"
import CloseSvg from "@/assets/svg/close.svg"
import LeftCaretSvg from "@/assets/svg/caret-left.svg"

export default function BcPage() {
	return (
		<main className="w-screen h-screen bg-gray-200">
			<BaseHeader
				leftComponent={<LeftCaretSvg />}
				rightComponent={<CloseSvg />}
				title="title test"
			></BaseHeader>
			<div className="w-full h-[1000px] bg-gray-200"></div>
		</main>
	)
}

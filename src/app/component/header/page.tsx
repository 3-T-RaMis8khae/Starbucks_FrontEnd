import BaseHeader from "@/components/atom/header/baseHeader"

export default function HeaderPage() {
	return (
		<main className="w-screen h-screen bg-gray-200">
			<BaseHeader middleComponent={"title test"}></BaseHeader>
			<div className="w-full h-[1000px] bg-gray-200"></div>
		</main>
	)
}

import ShopSearchBox from "@/components/molecule/searchBox/shopSearchBox"
import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

// todo : Split other tags into a separate component, and implement functionality.
export default function SearchPage() {
	const isSearchKeywordExist = false
	return (
		<>
			<ShopSearchBox />
			<section className="w-full bg-white pt-2 app-px">
				<div className="w-full h-[20dvh] flex flex-col items-end relative">
					{isSearchKeywordExist ? (
						<>
							<span className="w-full text-xs font-normal text-sb-gray-100">
								최근 검색어
							</span>
							<div
								aria-label="recent-search-keywords-container"
								className="pt-2 pb-4 border-b-sb-gray-0 border-b-[1px] grid grid-cols-2 gap-2 w-full"
							>
								{Array.from({ length: 10 }).map((_, index) => (
									<div
										key={index}
										className="text-sm font-normal text-sb-black-100 select-none"
									>
										grid item
									</div>
								))}
							</div>
							<Button
								variant={"ghost"}
								className={`hover:bg-transparent h-fit mt-2 py-2 px-0 text-xs font-bold text-sb-black-100`}
							>
								전체 삭제
							</Button>
						</>
					) : (
						<span className="text-sm absolute select-none m-0 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] font-normal text-sb-gray-200">
							최근 검색어가 없습니다.
						</span>
					)}
				</div>
			</section>
		</>
	)
}

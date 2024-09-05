import BaseHeader from "@/components/atom/header/baseHeader"
import Link from "next/link"
import Image from "next/image"
import CloseSvgURL from "@/assets/svg/close.svg?url"
import FindUserIdImage from "@/assets/image/findUserId.png"

import ButtonFooter from "@/components/atom/footer/buttonFooter"
import React from "react"

export default function ForgotAccountPage() {
	return (
		<section className="w-screen h-full flex flex-col">
			<BaseHeader
				leftComponent={
					<Link href={"/auth/login"}>
						<Image src={CloseSvgURL} alt="close.svg"></Image>
					</Link>
				}
			></BaseHeader>

			<div className="w-full flex flex-col items-center mt-[60px] px-[30px]">
				<Image
					className="mt-16 mb-8 bg-white"
					src={FindUserIdImage}
					width={140}
					height={140}
					alt="findUserId.png"
				></Image>
				<div className="flex flex-col items-center">
					<p className="text-sb-gray-100 font-medium text-base">
						고객님의 아이디는
					</p>
					<p className="text-sb-gray-100 font-medium text-base">
						<span className="text-sb-green-100 ">User_ID</span> 입니다.
					</p>
				</div>
			</div>

			<ButtonFooter
				button_title="로그인하기"
				button_props={{ type: "submit" }}
			></ButtonFooter>
		</section>
	)
}

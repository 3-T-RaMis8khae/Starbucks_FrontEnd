import Image from "next/image"

import BaseHeader from "@/components/molecule/header/baseHeader"
import CloseURL from "@/assets/svg/close.svg?url"
import React from "react"
import PhoneVerification from "@/components/organism/auth/phoneVerification"
import Link from "next/link"

export default function phoneVerifPage() {
	return (
		<main className="w-screen h-screen flex flex-col hidden-scroll">
			<BaseHeader
				leftComponent={
					<Link href={"/auth/login"}>
						<Image src={CloseURL} alt="close.svg" />
					</Link>
				}
			></BaseHeader>

			<div className="w-full h-full flex flex-col mt-[50px] mb-[90px] px-[30px] pb-8 hidden-scroll">
				<div className="flex flex-col gap-2 mb-10 mt-3">
					<p className="text-2xl text-sb-black-100 font-semibold">
						본인확인을 위해
					</p>
					<p className="text-2xl text-sb-black-100 font-semibold">
						인증을 진행해 주세요
					</p>
				</div>

				<PhoneVerification></PhoneVerification>
			</div>
		</main>
	)
}

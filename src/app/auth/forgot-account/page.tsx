import BaseHeader from "@/components/atom/header/baseHeader"
import CloseSvgURL from "@/assets/svg/close.svg?url"
import FindUserIdImage from "@/assets/image/findUserId.png"

import FixedBottomButton from "@/components/atom/button/fixedBottomButton"
import React from "react"
import IconLink from "@/components/atom/icon/iconLink"
import Logo from "@/components/atom/logo/logo"

export default function ForgotAccountPage() {
	return (
		<>
			<BaseHeader
				leftComponent={
					<IconLink
						linkProps={{ href: "/auth/login", scroll: true }}
						imageProps={{
							src: CloseSvgURL,
							alt: "close.svg"
						}}
					/>
				}
			/>
			<section className="w-screen h-full flex flex-col">
				<div className="w-full flex flex-col items-center mt-[60px] px-[30px]">
					<Logo
						imageProps={{
							src: FindUserIdImage,
							alt: "findUserId.png",
							width: 140,
							height: 140
						}}
						wrapperProps={{ className: "mt-16 mb-8 w-[140px] h-[140px]" }}
					/>
					<div className="flex flex-col items-center">
						<p className="text-sb-gray-100 font-medium text-base">
							고객님의 아이디는
						</p>
						<p className="text-sb-gray-100 font-medium text-base">
							<span className="text-sb-green-100 ">User_ID</span> 입니다.
						</p>
					</div>
				</div>

				<FixedBottomButton
					button_title="로그인하기"
					button_props={{ type: "submit" }}
				></FixedBottomButton>
			</section>
		</>
	)
}

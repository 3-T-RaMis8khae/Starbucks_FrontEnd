import CloseIcon from "@/assets/svg/close.svg"
import CloseURI from "@/assets/svg/close.svg?url"

import Image from "next/image"

export default function LoginPage() {
	return (
		<main>
			<CloseIcon></CloseIcon>
			<CloseIcon width={"50px"} height={"50px"}></CloseIcon>
			<Image width={50} height={50} src={CloseURI} alt={"close"}></Image>
			<Image src={CloseURI} alt={"close"}></Image>
		</main>
	)
}

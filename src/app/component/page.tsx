import { Button } from "@/components/ui/button"
import { CloseIcon } from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon"
import { Input } from "@/components/ui/input"
import CloseSvg from "@/assets/svg/close.svg"
import CloseSvgURI from "@/assets/svg/close.svg?url"
import Image from "next/image"
import LabelInput from "@/components/atom/Input/LabelInput"

export default function ComponentPage() {
	return (
		<main className="flex flex-col gap-4 p-2.5">
			<h1>components</h1>

			<h2 className="mt-5">SVG</h2>
			<div className="flex items-center gap-2.5">
				<CloseIcon></CloseIcon>
				<CloseSvg></CloseSvg>
				<Image src={CloseSvgURI} alt={"close.svg"}></Image>
			</div>

			<h2 className="mt-5">Buttons</h2>
			<div className="flex items-center gap-2.5">
				<Button>Button1</Button>
				<Button>Button2</Button>
				<Button>Button3</Button>
			</div>

			<h2 className="mt-5">Inputs</h2>
			<div className="flex flex-col gap-2.5">
				<Input />
			</div>
			<div className="mt-2 flex flex-col gap-2.5">
				<LabelInput label_name="label" />
				<LabelInput label_name="error test" />
			</div>

			<h2 className="mt-5">Identity Verification card</h2>
			<div className="flex flex-col gap-2.5">
				<LabelInput label_name="label" />
				<LabelInput label_name="error test" />
			</div>
		</main>
	)
}

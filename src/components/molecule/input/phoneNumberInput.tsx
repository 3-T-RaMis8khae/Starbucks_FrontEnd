import React from "react"

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue
} from "@/components/ui/select"
import { BaseInput } from "@/components/atom/input/baseInput"
import { Button } from "@/components/ui/button"
import { ValueOf } from "@/lib/types"

export const mobileCarrier = {
	skt: "SKT",
	kt: "KT",
	lgu: "LGU+",
	sktEc: "SKT-Economical",
	ktEc: "KT-Economical",
	lguEc: "LGU+-Economical"
}
export type MobileCarrierValueType = ValueOf<typeof mobileCarrier>

interface PhoneNumberInputProps {}

// note : we might need to modify styles for responsive view and ux
function PhoneNumberInput(props: PhoneNumberInputProps) {
	return (
		<fieldset className="flex items-center justify-between border-b border-b-sb-gray-0">
			<div className="flex items-center">
				<Select>
					<SelectTrigger className="w-[120px] border-none text-base text-sb-gray-100 focus:border-none px-1">
						<SelectValue
							placeholder="통신사 선택"
							defaultValue={mobileCarrier.skt}
						></SelectValue>
					</SelectTrigger>
					<SelectContent>
						<SelectGroup className="*:text-base *:text-sb-gray-100 h-[100px]">
							<SelectItem value={mobileCarrier.skt}>SKT</SelectItem>
							<SelectItem value={mobileCarrier.kt}>KT</SelectItem>
							<SelectItem value={mobileCarrier.lgu}>LGU+</SelectItem>
							<SelectItem value={mobileCarrier.sktEc}>SKT 알뜰폰</SelectItem>
							<SelectItem value={mobileCarrier.ktEc}>KT 알뜰폰</SelectItem>
							<SelectItem value={mobileCarrier.lguEc}>LGU+ 알뜰폰</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>

				<BaseInput
					ct_type="number"
					placeholder="휴대폰 번호"
					maxLength={11}
					className="border-none ml-1"
				></BaseInput>
			</div>

			<Button variant="sbGreenGhost" className="text-sm font-medium">
				인증요청
			</Button>
		</fieldset>
	)
}

export default PhoneNumberInput

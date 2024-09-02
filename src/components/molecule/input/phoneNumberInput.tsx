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
							defaultValue="SKT"
						></SelectValue>
					</SelectTrigger>
					<SelectContent>
						<SelectGroup className="*:text-base *:text-sb-gray-100 h-[100px]">
							<SelectItem value="SKT">SKT</SelectItem>
							<SelectItem value="KT">KT</SelectItem>
							<SelectItem value="LGU+">LGU+</SelectItem>
							<SelectItem value="SKT-Economical">SKT 알뜰폰</SelectItem>
							<SelectItem value="KT-Economical">KT 알뜰폰</SelectItem>
							<SelectItem value="LGU+-Economical">LGU+ 알뜰폰</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>

				<BaseInput
					ct_type="tel"
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

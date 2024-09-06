import React from "react"
import _ from "lodash"

interface StepIndicatorProps {
	stepNumber: number
	activeStep: number
}

const StepIndicatorInit: StepIndicatorProps = {
	stepNumber: 4,
	activeStep: 1
}

export default function StepIndicator(props = StepIndicatorInit) {
	return (
		<div className="flex items-center">
			{_.times(props.stepNumber, (num) => (
				<div className="flex items-center" key={num + 1}>
					<span
						className={`
							flex items-center justify-center
							w-[16px] h-[16px] rounded-[20px] border-[1px] border-sb-gray-100 text-sb-gray-100 text-[10px] 
							${num + 1 == props.activeStep && "text-white bg-sb-black-100"}
						`}
					>
						{num + 1}
					</span>
					{num + 1 != props.stepNumber && (
						<span
							className={`border-t-[1px] h-[1px] w-[6px] border-sb-gray-100`}
						></span>
					)}
				</div>
			))}
		</div>
	)
}

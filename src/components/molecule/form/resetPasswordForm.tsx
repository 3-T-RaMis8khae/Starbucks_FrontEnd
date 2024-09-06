"use client"

import React from "react"
import { BaseInput } from "@/components/atom/input/baseInput"
import FixedBottomButton from "@/components/atom/button/fixedBottomButton"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { resetPasswordSchema } from "@/schema/authSchema"
import ErrorText from "@/components/atom/text/errorText"

// interface ResetPasswordFormProps {}

function ResetPasswordForm() {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		resolver: zodResolver(resetPasswordSchema)
	})

	return (
		<form
			onSubmit={handleSubmit(
				(data, event) => {
					console.log("on valid submit : ", data, event)
				},
				(data, event) => {
					console.log("on invalid submit : ", data, event)
				}
			)}
		>
			<BaseInput
				placeholder="새 비밀번호 (10~20자리 이내)"
				ct_is_error={!!errors.password}
				{...register("password")}
			/>
			<ErrorText text={errors?.password?.message as string} />

			{/* todo: make divider component */}
			<div className="my-2"></div>

			<BaseInput
				placeholder="새 비밀번호 확인"
				ct_is_error={!!errors.passwordValidate}
				{...register("passwordValidate")}
			/>
			<ErrorText text={errors?.passwordValidate?.message as string} />

			<FixedBottomButton
				button_title="확인"
				button_props={{ type: "submit" }}
			/>
		</form>
	)
}

export default ResetPasswordForm

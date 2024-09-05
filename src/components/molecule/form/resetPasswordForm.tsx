"use client"

import React from "react"
import { BaseInput } from "@/components/atom/input/baseInput"
import ButtonFooter from "@/components/atom/footer/buttonFooter"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { resetPasswordSchema } from "@/schema/authSchema"

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
				{...register("password")}
			/>
			{errors.password && (
				<p className="error-text mt-1">{errors.password.message as string}</p>
			)}
			<div className="my-2"></div>
			{/* make divider component */}
			<BaseInput
				placeholder="새 비밀번호 확인"
				{...register("passwordValidate")}
			/>
			{errors.passwordValidate && (
				<p className="error-text mt-1">
					{errors.passwordValidate.message as string}
				</p>
			)}

			<ButtonFooter button_title="확인" button_props={{ type: "submit" }} />
		</form>
	)
}

export default ResetPasswordForm

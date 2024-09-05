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
			className="flex flex-col gap-2"
		>
			<div>
				<BaseInput
					placeholder="새 비밀번호 (10~20자리 이내)"
					{...register("password")}
				></BaseInput>
				{errors.password && (
					<p className="error-text mt-1">{errors.password.message as string}</p>
				)}
			</div>

			<div>
				<BaseInput
					placeholder="새 비밀번호 확인"
					{...register("passwordValidate")}
				></BaseInput>
				{errors.passwordValidate && (
					<p className="error-text mt-1">
						{errors.passwordValidate.message as string}
					</p>
				)}
			</div>

			<ButtonFooter
				button_title="확인"
				button_props={{ type: "submit" }}
			></ButtonFooter>
		</form>
	)
}

export default ResetPasswordForm

"use client"

import React from "react"
import ButtonFooter from "@/components/atom/footer/buttonFooter"
import LabelInput from "@/components/molecule/input/labelInput"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema } from "@/schema/authSchema"

// interface LoginFormProps {}

function LoginForm() {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		resolver: zodResolver(loginSchema)
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
			<div className="flex flex-col items-center gap-2.5">
				<div className="w-full">
					<LabelInput
						label_name={"아이디"}
						is_error={!!errors["loginId"]}
						{...register("loginId")}
					></LabelInput>
					{errors.loginId && (
						<p className="error-text mt-1">
							{errors.loginId.message as string}
						</p>
					)}
				</div>

				<div className="w-full">
					<LabelInput
						label_name={"비밀번호"}
						type={"password"}
						is_error={!!errors["password"]}
						{...register("password")}
					></LabelInput>
					{errors.password && (
						<p className="error-text mt-1">
							{errors.password.message as string}
						</p>
					)}
				</div>
			</div>

			<ButtonFooter
				button_title="로그인하기"
				button_props={{ type: "submit" }}
			></ButtonFooter>
		</form>
	)
}

export default LoginForm

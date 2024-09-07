"use client"

import React, { useEffect } from "react"
import FixedBottomButton from "@/components/atom/button/fixedBottomButton"
import LabelInput from "@/components/molecule/input/labelInput"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema, loginSchemaType } from "@/schema/authSchema"
import ErrorText from "@/components/atom/text/errorText"
import { signIn, useSession } from "next-auth/react"

// interface LoginFormProps {}
const onLogIn = (data: loginSchemaType): void => {
	console.log("on login : ", data, loginSchema.safeParse(data))
	signIn("credentials", {
		loginId: data.loginId,
		password: data.password,
		redirect: false
	}).then((res) => {
		console.log("res : ", res)
	})
}

function LoginForm() {
	const auth = useSession()
	useEffect(() => {
		console.log("login form auth : ", auth)
	}, [auth])

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
					onLogIn(data as loginSchemaType)
				},
				(data, event) => {
					console.log("on invalid submit : ", data, event)
				}
			)}
			className="flex flex-col items-center gap-2.5"
		>
			<div className="w-full">
				<LabelInput
					label_name={"아이디"}
					is_error={!!errors["loginId"]}
					{...register("loginId")}
				/>
				<ErrorText text={errors?.loginId?.message as string} />
			</div>

			<div className="w-full">
				<LabelInput
					label_name={"비밀번호"}
					type={"password"}
					is_error={!!errors["password"]}
					{...register("password")}
				/>
				<ErrorText text={errors?.password?.message as string} />
			</div>

			<FixedBottomButton
				button_title="로그인하기"
				button_props={{ type: "submit" }}
			></FixedBottomButton>
		</form>
	)
}

export default LoginForm

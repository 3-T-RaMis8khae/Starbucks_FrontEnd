"use client"

import React from "react"
import FixedBottomButton from "@/components/atom/button/fixedBottomButton"
import LabelInput from "@/components/molecule/input/labelInput"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema, loginSchemaType } from "@/schema/authSchema"
import ErrorText from "@/components/atom/text/errorText"
import { signIn } from "next-auth/react"
import { routes } from "@/config/route"
import { useRouter } from "next/navigation"

// interface LoginFormProps {}
const onLogIn = (data: loginSchemaType) => {
	console.log("on login : ", data, loginSchema.safeParse(data))
	return signIn("credentials", {
		loginId: data.loginId,
		password: data.password,
		redirect: false
	})
}

function LoginForm() {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		resolver: zodResolver(loginSchema)
	})
	const router = useRouter()

	return (
		<form
			onSubmit={handleSubmit(
				(data, event) => {
					console.log("on valid submit : ", data, event)
					onLogIn(data as loginSchemaType).then((res) => {
						console.log("sign in res : ", res)
						router.push(routes.shop_main)
					})
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

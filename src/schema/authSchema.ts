import { z } from "zod"

export const loginIdRegex = /^(?=.*[a-zA-Z])[a-zA-Z0-9]{4,13}$/
export const passwordRegex =
	/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{10,20}$/
export const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/
export const nicknameRegex = /^[가-힣]{2,6}$/

export type userAccountSchemaType = z.infer<typeof userAccountSchema>
export const userAccountSchema = z
	.object({
		loginId: z.string().regex(loginIdRegex, {
			message: "아이디 형식이 일치하지 않습니다."
		}),
		password: z.string().regex(passwordRegex, {
			message: "비밀번호 형식이 일치하지 않습니다."
		}),
		passwordValidate: z.string().regex(passwordRegex, {
			message: "비밀번호 형식이 일치하지 않습니다."
		})
	})
	.refine((data) => data.password === data.passwordValidate, {
		path: ["passwordValidate"],
		message: "비밀번호가 일치하지 않습니다."
	})

export type emailSchemaType = z.infer<typeof emailSchema>
export const emailSchema = z.object({
	email: z.string().regex(emailRegex, {
		message: "이메일 형식이 일치하지 않습니다."
	})
})

export type nicknameSchemaType = z.infer<typeof nicknameSchema>
export const nicknameSchema = z.object({
	nickname: z
		.string()
		.regex(nicknameRegex, { message: "닉네임 형식에 맞지 않습니다." })
})

export type phoneVerifySchemaType = z.infer<typeof phoneVerifySchema>
export const phoneVerifySchema = z.object({
	name: z.string().regex(/^[가-힣]{2,}$/, {
		message: "최소 2글자 이상의 한글을 입력하셔야 합니다."
	}),
	birthDate: z
		.string()
		.regex(/^\d{6}$/, { message: "생년월일 6자리를 입력해주세요." }),
	firstRrn: z.string().regex(/^\d$/),
	phoneNumber: z.string().regex(/^\d{10,11}$/),
	mobileCarrier: z.string()
})

export const mobileCarrier = {
	skt: { name: "SKT", value: "SKT" },
	kt: { name: "KT", value: "KT" },
	lgu: { name: "LGU+", value: "LGU+" },
	sktEc: { name: "SKT 알뜰폰", value: "SKT-Economical" },
	ktEc: { name: "KT 알뜰폰", value: "KT-Economical" },
	lguEc: { name: "LGU+ 알뜰폰", value: "LGU+-Economical" }
}

export type loginSchemaType = z.infer<typeof loginSchema>
export const loginSchema = z.object({
	loginId: z.string().regex(loginIdRegex, {
		message: "아이디 형식이 일치하지 않습니다."
	}),
	password: z.string().regex(passwordRegex, {
		message: "비밀번호 형식이 일치하지 않습니다."
	})
})

export type resetPasswordSchemaType = z.infer<typeof resetPasswordSchema>
export const resetPasswordSchema = z
	.object({
		password: z.string().regex(passwordRegex, {
			message: "비밀번호 형식이 일치하지 않습니다."
		}),
		passwordValidate: z.string().regex(passwordRegex, {
			message: "비밀번호 형식이 일치하지 않습니다."
		})
	})
	.refine((data) => data.password === data.passwordValidate, {
		path: ["passwordValidate"],
		message: "비밀번호가 일치하지 않습니다."
	})

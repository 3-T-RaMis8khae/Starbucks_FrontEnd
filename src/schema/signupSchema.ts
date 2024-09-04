import { z } from "zod"

export const signupSchema = z.object({
	name: z.string().regex(/^[가-힣]{2,}$/, {
		message: "최소 2글자 이상의 한글을 입력하셔야 합니다."
	}),
	birthDate: z
		.string()
		.regex(/^\d{6}$/, { message: "생년월일 6자리를 입력해주세요." }),
	firstRrn: z.string().length(1),
	phoneNumber: z.string().min(10).max(11),
	loginId: z.string().regex(/^(?=.*[a-zA-Z])[a-zA-Z0-9]{4,13}$/, {
		message: "아이디 형식에 맞지 않습니다."
	}),
	nickName: z
		.string()
		.regex(/^[가-힣]{1,6}$/, { message: "닉네임 형식에 맞지 않습니다." })
})

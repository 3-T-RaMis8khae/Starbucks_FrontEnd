"use server"

import { NicknameType, SignUpRequestBodyType } from "@/type/auth/signUp"
import { getUtcFromBirthdate } from "@/lib/dayjsUtils"
import { FieldValues } from "react-hook-form"
import { assignParamObject } from "@/lib/searchParamUtils"

export async function signUpAction(
	req: SignUpRequestBodyType
): Promise<Response> {
	const payload: SignUpRequestBodyType = {
		loginId: req.loginId,
		email: req.email,
		password: req.password,
		name: req.name,
		phoneNumber: req.phoneNumber,
		nickname: req.nickname,
		birth: getUtcFromBirthdate(req.birth),
		emailMarketingConsent: req.emailMarketingConsent.toString() == "true",
		smsmarketingConsent: req.smsmarketingConsent.toString() == "true"
	}

	console.log("action payload", payload, JSON.stringify(payload))
	const res = await fetch(`${process.env.API_BASE_URL}/api/v1/auth/signup`, {
		method: "POST",
		body: JSON.stringify(payload),
		headers: {
			"Content-Type": "application/json"
		}
	})

	console.log("res: ", res)
	return res
}

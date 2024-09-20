"use server"

import { FindLoginIdReqType } from "@/type/auth/memberLoginId"

export async function findLoginIdAction(
	req: FindLoginIdReqType
): Promise<{ ok: boolean; loginId: string }> {
	const ApiReturn = await fetch(
		`${process.env.API_BASE_URL}/api/v1/auth/find_member`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(req),
			cache: "no-cache"
		}
	)
	const res = (await ApiReturn.json()).res
	return { ok: ApiReturn.ok, loginId: res.loginId }
}

"use server"

import { loginSchemaType } from "@/schema/authSchema"

export async function signInAction(data: loginSchemaType): Promise<Response> {
	return await fetch(`${process.env.API_BASE_URL}/api/v1/auth/login`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(data),
		cache: "no-cache"
	})
}

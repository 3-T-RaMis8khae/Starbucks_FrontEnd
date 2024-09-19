export interface SignUpRequestBodyType {
	name: string
	loginId: string
	password: string
	birth: string // "2024-09-19T03:27:07.818Z"
	phoneNumber: string
	email: string
	nickname: string
	emailMarketingConsent: boolean
	smsmarketingConsent: boolean
}

// fennel types
export interface AgreementType {
	smsmarketingConsent: boolean
	emailMarketingConsent: boolean
	step: string
}

export interface UserInfoType {
	name: string
	birth: string
	phoneNumber: string
	step: string
}

export interface AccountType {
	loginId: string
	password: string
	step: string
}

export interface EmailType {
	email: string
	step: string
}

export interface NicknameType {
	nickname: string
}

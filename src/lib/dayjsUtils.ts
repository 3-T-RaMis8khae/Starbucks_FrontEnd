import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import LocalizedFormat from "dayjs/plugin/localizedFormat"

dayjs.extend(utc)
dayjs.extend(LocalizedFormat)

export const getUtcFromBirthdate = (birthdate: string, format = "YYMMDD") => {
	return dayjs(formatDateWithBirthString(birthdate), "YY-MM-DD")
		.utc()
		.toISOString()
}

function formatDateWithBirthString(inputDate: string): string | null {
	if (/^\d{6}$/.test(inputDate)) {
		const year = inputDate.slice(0, 2)
		const month = inputDate.slice(2, 4)
		const day = inputDate.slice(4, 6)
		return `${year}-${month}-${day}`
	} else {
		console.error("입력 값이 유효한 형식이 아닙니다.")
		return null
	}
}

export const getCreatedAt = (date: string, format = "YYYY.MM.DD") => {
	return dayjs(date).format(format)
}

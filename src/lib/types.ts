export type Partial<T> = {
	[P in keyof T]?: T[P]
}

export type Readonly<T> = {
	readonly [P in keyof T]: T[P]
}

export type Nullable<T> = { [P in keyof T]: T[P] | null }

export type ValueOf<T> = T[keyof T]

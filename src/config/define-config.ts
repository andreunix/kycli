import type { KycliConfig } from './kycli-config.js'

type PartialDeep<T> = T extends (...args: never[]) => unknown
	? T
	: T extends object
		? { [K in keyof T]?: PartialDeep<T[K]> }
		: T

type PartialKycliConfig = PartialDeep<KycliConfig>

export type DefineConfigInput = (
	| (PartialKycliConfig & { extends: string | string[] })
	| (KycliConfig & { extends?: never })
)

export const defineConfig = (input: DefineConfigInput): DefineConfigInput =>
	input

import { CompiledQuery, type QueryResult } from 'kysely'
import type { ResolvedKycliConfigWithKyselyInstance } from '../config/kycli-config.js'

export interface Query {
	parameters?: unknown[]
	sql: string
}

export async function executeQuery(
	query: Query,
	config: ResolvedKycliConfigWithKyselyInstance,
): Promise<QueryResult<unknown>> {
	return await config.kysely.executeQuery(
		CompiledQuery.raw(query.sql, query.parameters),
	)
}

import { type QueryResult } from 'kysely';
import type { ResolvedKycliConfigWithKyselyInstance } from '../config/kycli-config.js';
export interface Query {
    parameters?: unknown[];
    sql: string;
}
export declare function executeQuery(query: Query, config: ResolvedKycliConfigWithKyselyInstance): Promise<QueryResult<unknown>>;

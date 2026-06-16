import type { Kysely } from 'kysely';
import type { ResolvedKycliConfig } from '../config/kycli-config.js';
export declare function usingKysely<T>(config: ResolvedKycliConfig, callback: (kysely: Kysely<any>) => Promise<T>): Promise<T>;

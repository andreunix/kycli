import { Kysely } from 'kysely';
import type { ResolvedKycliConfig } from '../config/kycli-config.js';
export declare function getKysely<DB = any>(config: ResolvedKycliConfig, debug?: boolean): Promise<Kysely<DB>>;

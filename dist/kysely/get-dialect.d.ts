import { type Dialect } from 'kysely';
import type { ResolvedKycliConfig } from '../config/kycli-config.js';
export declare function getDialect(config: ResolvedKycliConfig): Promise<Dialect>;

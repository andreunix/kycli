import type { Migrator } from 'kysely/migration';
import type { ResolvedKycliConfigWithKyselyInstance } from '../config/kycli-config.js';
export declare function getMigrator(config: ResolvedKycliConfigWithKyselyInstance): Promise<Migrator>;

import type { ResolvedKycliConfig, TypegenSource } from '../config/kycli-config.js';
export type ColumnInfo = {
    generated: boolean;
    name: string;
    nullable: boolean;
    primaryKey: boolean;
    tsType: string;
};
export type TableInfo = {
    columns: Map<string, ColumnInfo>;
    name: string;
};
export declare function runTypegen(config: ResolvedKycliConfig, source?: TypegenSource): Promise<void>;
export declare function getTablesFromMigrations(config: ResolvedKycliConfig): Promise<Map<string, TableInfo>>;
export declare function getTablesFromDatabase(config: ResolvedKycliConfig): Promise<Map<string, TableInfo>>;

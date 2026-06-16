import type { ResolvedKycliConfig } from './kycli-config.js';
export interface GetConfigArgs {
    config?: string;
    debug?: boolean;
    environment?: string;
    'filesystem-caching'?: boolean;
    transaction?: boolean;
}
export declare function getConfig(args: GetConfigArgs): Promise<ResolvedKycliConfig | null>;
export declare function getConfigOrFail(args: GetConfigArgs): Promise<ResolvedKycliConfig>;
export declare function configFileExists(config: ResolvedKycliConfig | null): config is ResolvedKycliConfig;

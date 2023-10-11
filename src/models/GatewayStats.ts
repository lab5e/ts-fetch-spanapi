/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.7.0 actionable-aryanna
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * This is statistics for a single gateway
 * @export
 * @interface GatewayStats
 */
export interface GatewayStats {
    /**
     * 
     * @type {number}
     * @memberof GatewayStats
     */
    messagesUpstream?: number;
    /**
     * 
     * @type {number}
     * @memberof GatewayStats
     */
    messagesDownstream?: number;
    /**
     * 
     * @type {number}
     * @memberof GatewayStats
     */
    bytesUpstreamMb?: number;
    /**
     * 
     * @type {number}
     * @memberof GatewayStats
     */
    bytesDownstreamMb?: number;
}

/**
 * Check if a given object implements the GatewayStats interface.
 */
export function instanceOfGatewayStats(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GatewayStatsFromJSON(json: any): GatewayStats {
    return GatewayStatsFromJSONTyped(json, false);
}

export function GatewayStatsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GatewayStats {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'messagesUpstream': !exists(json, 'messagesUpstream') ? undefined : json['messagesUpstream'],
        'messagesDownstream': !exists(json, 'messagesDownstream') ? undefined : json['messagesDownstream'],
        'bytesUpstreamMb': !exists(json, 'bytesUpstreamMb') ? undefined : json['bytesUpstreamMb'],
        'bytesDownstreamMb': !exists(json, 'bytesDownstreamMb') ? undefined : json['bytesDownstreamMb'],
    };
}

export function GatewayStatsToJSON(value?: GatewayStats | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'messagesUpstream': value.messagesUpstream,
        'messagesDownstream': value.messagesDownstream,
        'bytesUpstreamMb': value.bytesUpstreamMb,
        'bytesDownstreamMb': value.bytesDownstreamMb,
    };
}


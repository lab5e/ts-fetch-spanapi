/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 5.0.5 contented-jamila
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * This is the statistics for a single device
 * @export
 * @interface DeviceStats
 */
export interface DeviceStats {
    /**
     * 
     * @type {string}
     * @memberof DeviceStats
     */
    bytesUpstream?: string;
    /**
     * 
     * @type {string}
     * @memberof DeviceStats
     */
    bytesDownstream?: string;
    /**
     * 
     * @type {string}
     * @memberof DeviceStats
     */
    messagesUpstream?: string;
    /**
     * 
     * @type {string}
     * @memberof DeviceStats
     */
    messagesDownstream?: string;
    /**
     * 
     * @type {number}
     * @memberof DeviceStats
     */
    sessionCount?: number;
}

/**
 * Check if a given object implements the DeviceStats interface.
 */
export function instanceOfDeviceStats(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DeviceStatsFromJSON(json: any): DeviceStats {
    return DeviceStatsFromJSONTyped(json, false);
}

export function DeviceStatsFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeviceStats {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bytesUpstream': !exists(json, 'bytesUpstream') ? undefined : json['bytesUpstream'],
        'bytesDownstream': !exists(json, 'bytesDownstream') ? undefined : json['bytesDownstream'],
        'messagesUpstream': !exists(json, 'messagesUpstream') ? undefined : json['messagesUpstream'],
        'messagesDownstream': !exists(json, 'messagesDownstream') ? undefined : json['messagesDownstream'],
        'sessionCount': !exists(json, 'sessionCount') ? undefined : json['sessionCount'],
    };
}

export function DeviceStatsToJSON(value?: DeviceStats | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bytesUpstream': value.bytesUpstream,
        'bytesDownstream': value.bytesDownstream,
        'messagesUpstream': value.messagesUpstream,
        'messagesDownstream': value.messagesDownstream,
        'sessionCount': value.sessionCount,
    };
}


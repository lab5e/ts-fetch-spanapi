/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.9.6 authoritarian-betty
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BlobStats } from './BlobStats';
import {
    BlobStatsFromJSON,
    BlobStatsFromJSONTyped,
    BlobStatsToJSON,
} from './BlobStats';
import type { DeviceStats } from './DeviceStats';
import {
    DeviceStatsFromJSON,
    DeviceStatsFromJSONTyped,
    DeviceStatsToJSON,
} from './DeviceStats';
import type { FirmwareStats } from './FirmwareStats';
import {
    FirmwareStatsFromJSON,
    FirmwareStatsFromJSONTyped,
    FirmwareStatsToJSON,
} from './FirmwareStats';
import type { GatewayStats } from './GatewayStats';
import {
    GatewayStatsFromJSON,
    GatewayStatsFromJSONTyped,
    GatewayStatsToJSON,
} from './GatewayStats';
import type { OutputStats } from './OutputStats';
import {
    OutputStatsFromJSON,
    OutputStatsFromJSONTyped,
    OutputStatsToJSON,
} from './OutputStats';

/**
 * This is statistics for an collection.
 * @export
 * @interface CollectionStats
 */
export interface CollectionStats {
    /**
     * 
     * @type {number}
     * @memberof CollectionStats
     */
    deviceCount?: number;
    /**
     * 
     * @type {number}
     * @memberof CollectionStats
     */
    outputCount?: number;
    /**
     * 
     * @type {number}
     * @memberof CollectionStats
     */
    firmwareCount?: number;
    /**
     * 
     * @type {number}
     * @memberof CollectionStats
     */
    blobCount?: number;
    /**
     * 
     * @type {number}
     * @memberof CollectionStats
     */
    gatewayCount?: number;
    /**
     * 
     * @type {DeviceStats}
     * @memberof CollectionStats
     */
    devices?: DeviceStats;
    /**
     * 
     * @type {OutputStats}
     * @memberof CollectionStats
     */
    outputs?: OutputStats;
    /**
     * 
     * @type {FirmwareStats}
     * @memberof CollectionStats
     */
    firmware?: FirmwareStats;
    /**
     * 
     * @type {BlobStats}
     * @memberof CollectionStats
     */
    blobs?: BlobStats;
    /**
     * 
     * @type {GatewayStats}
     * @memberof CollectionStats
     */
    gateways?: GatewayStats;
}

/**
 * Check if a given object implements the CollectionStats interface.
 */
export function instanceOfCollectionStats(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CollectionStatsFromJSON(json: any): CollectionStats {
    return CollectionStatsFromJSONTyped(json, false);
}

export function CollectionStatsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CollectionStats {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'deviceCount': !exists(json, 'deviceCount') ? undefined : json['deviceCount'],
        'outputCount': !exists(json, 'outputCount') ? undefined : json['outputCount'],
        'firmwareCount': !exists(json, 'firmwareCount') ? undefined : json['firmwareCount'],
        'blobCount': !exists(json, 'blobCount') ? undefined : json['blobCount'],
        'gatewayCount': !exists(json, 'gatewayCount') ? undefined : json['gatewayCount'],
        'devices': !exists(json, 'devices') ? undefined : DeviceStatsFromJSON(json['devices']),
        'outputs': !exists(json, 'outputs') ? undefined : OutputStatsFromJSON(json['outputs']),
        'firmware': !exists(json, 'firmware') ? undefined : FirmwareStatsFromJSON(json['firmware']),
        'blobs': !exists(json, 'blobs') ? undefined : BlobStatsFromJSON(json['blobs']),
        'gateways': !exists(json, 'gateways') ? undefined : GatewayStatsFromJSON(json['gateways']),
    };
}

export function CollectionStatsToJSON(value?: CollectionStats | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'deviceCount': value.deviceCount,
        'outputCount': value.outputCount,
        'firmwareCount': value.firmwareCount,
        'blobCount': value.blobCount,
        'gatewayCount': value.gatewayCount,
        'devices': DeviceStatsToJSON(value.devices),
        'outputs': OutputStatsToJSON(value.outputs),
        'firmware': FirmwareStatsToJSON(value.firmware),
        'blobs': BlobStatsToJSON(value.blobs),
        'gateways': GatewayStatsToJSON(value.gateways),
    };
}


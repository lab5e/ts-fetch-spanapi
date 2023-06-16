/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.6.1 squirming-codi
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CellularIoTMetadata } from './CellularIoTMetadata';
import {
    CellularIoTMetadataFromJSON,
    CellularIoTMetadataFromJSONTyped,
    CellularIoTMetadataToJSON,
} from './CellularIoTMetadata';
import type { GatewayDeviceMetadata } from './GatewayDeviceMetadata';
import {
    GatewayDeviceMetadataFromJSON,
    GatewayDeviceMetadataFromJSONTyped,
    GatewayDeviceMetadataToJSON,
} from './GatewayDeviceMetadata';
import type { InetMetadata } from './InetMetadata';
import {
    InetMetadataFromJSON,
    InetMetadataFromJSONTyped,
    InetMetadataToJSON,
} from './InetMetadata';

/**
 * This is the metadata for devices.
 * @export
 * @interface DeviceMetadata
 */
export interface DeviceMetadata {
    /**
     * 
     * @type {CellularIoTMetadata}
     * @memberof DeviceMetadata
     */
    ciot?: CellularIoTMetadata;
    /**
     * 
     * @type {InetMetadata}
     * @memberof DeviceMetadata
     */
    inet?: InetMetadata;
    /**
     * 
     * @type {GatewayDeviceMetadata}
     * @memberof DeviceMetadata
     */
    gateway?: GatewayDeviceMetadata;
}

/**
 * Check if a given object implements the DeviceMetadata interface.
 */
export function instanceOfDeviceMetadata(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DeviceMetadataFromJSON(json: any): DeviceMetadata {
    return DeviceMetadataFromJSONTyped(json, false);
}

export function DeviceMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeviceMetadata {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ciot': !exists(json, 'ciot') ? undefined : CellularIoTMetadataFromJSON(json['ciot']),
        'inet': !exists(json, 'inet') ? undefined : InetMetadataFromJSON(json['inet']),
        'gateway': !exists(json, 'gateway') ? undefined : GatewayDeviceMetadataFromJSON(json['gateway']),
    };
}

export function DeviceMetadataToJSON(value?: DeviceMetadata | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ciot': CellularIoTMetadataToJSON(value.ciot),
        'inet': InetMetadataToJSON(value.inet),
        'gateway': GatewayDeviceMetadataToJSON(value.gateway),
    };
}


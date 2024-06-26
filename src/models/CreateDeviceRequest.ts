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
import type { DeviceConfig } from './DeviceConfig';
import {
    DeviceConfigFromJSON,
    DeviceConfigFromJSONTyped,
    DeviceConfigToJSON,
} from './DeviceConfig';
import type { DeviceMetadata } from './DeviceMetadata';
import {
    DeviceMetadataFromJSON,
    DeviceMetadataFromJSONTyped,
    DeviceMetadataToJSON,
} from './DeviceMetadata';
import type { FirmwareMetadata } from './FirmwareMetadata';
import {
    FirmwareMetadataFromJSON,
    FirmwareMetadataFromJSONTyped,
    FirmwareMetadataToJSON,
} from './FirmwareMetadata';

/**
 * Request object to create new devices
 * @export
 * @interface CreateDeviceRequest
 */
export interface CreateDeviceRequest {
    /**
     * Tags are metadata for the device that you can set. These are just
     * strings.
     * @type {{ [key: string]: string; }}
     * @memberof CreateDeviceRequest
     */
    tags?: { [key: string]: string; };
    /**
     * 
     * @type {FirmwareMetadata}
     * @memberof CreateDeviceRequest
     */
    firmware?: FirmwareMetadata;
    /**
     * 
     * @type {DeviceConfig}
     * @memberof CreateDeviceRequest
     */
    config?: DeviceConfig;
    /**
     * 
     * @type {DeviceMetadata}
     * @memberof CreateDeviceRequest
     */
    metadata?: DeviceMetadata;
}

/**
 * Check if a given object implements the CreateDeviceRequest interface.
 */
export function instanceOfCreateDeviceRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreateDeviceRequestFromJSON(json: any): CreateDeviceRequest {
    return CreateDeviceRequestFromJSONTyped(json, false);
}

export function CreateDeviceRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateDeviceRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'firmware': !exists(json, 'firmware') ? undefined : FirmwareMetadataFromJSON(json['firmware']),
        'config': !exists(json, 'config') ? undefined : DeviceConfigFromJSON(json['config']),
        'metadata': !exists(json, 'metadata') ? undefined : DeviceMetadataFromJSON(json['metadata']),
    };
}

export function CreateDeviceRequestToJSON(value?: CreateDeviceRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'tags': value.tags,
        'firmware': FirmwareMetadataToJSON(value.firmware),
        'config': DeviceConfigToJSON(value.config),
        'metadata': DeviceMetadataToJSON(value.metadata),
    };
}


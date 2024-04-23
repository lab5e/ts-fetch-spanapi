/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.9.5 spattered-kelvin
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
import type { FirmwareMetadata } from './FirmwareMetadata';
import {
    FirmwareMetadataFromJSON,
    FirmwareMetadataFromJSONTyped,
    FirmwareMetadataToJSON,
} from './FirmwareMetadata';

/**
 * Updating the device
 * @export
 * @interface UpdateDeviceRequest
 */
export interface UpdateDeviceRequest {
    /**
     * The collection id for the device. This field is optional and can be
     * omitted if the collection id isn't changed. When changing to a new
     * collection you must be an owner of the other collection, ie an
     * administrator of the team that owns the new collection.
     * @type {string}
     * @memberof UpdateDeviceRequest
     */
    collectionId?: string;
    /**
     * Tags are metadata for the device that you can set. These are just
     * strings.
     * @type {{ [key: string]: string; }}
     * @memberof UpdateDeviceRequest
     */
    tags?: { [key: string]: string; };
    /**
     * 
     * @type {FirmwareMetadata}
     * @memberof UpdateDeviceRequest
     */
    firmware?: FirmwareMetadata;
    /**
     * 
     * @type {DeviceConfig}
     * @memberof UpdateDeviceRequest
     */
    config?: DeviceConfig;
}

/**
 * Check if a given object implements the UpdateDeviceRequest interface.
 */
export function instanceOfUpdateDeviceRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpdateDeviceRequestFromJSON(json: any): UpdateDeviceRequest {
    return UpdateDeviceRequestFromJSONTyped(json, false);
}

export function UpdateDeviceRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateDeviceRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'collectionId': !exists(json, 'collectionId') ? undefined : json['collectionId'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'firmware': !exists(json, 'firmware') ? undefined : FirmwareMetadataFromJSON(json['firmware']),
        'config': !exists(json, 'config') ? undefined : DeviceConfigFromJSON(json['config']),
    };
}

export function UpdateDeviceRequestToJSON(value?: UpdateDeviceRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'collectionId': value.collectionId,
        'tags': value.tags,
        'firmware': FirmwareMetadataToJSON(value.firmware),
        'config': DeviceConfigToJSON(value.config),
    };
}


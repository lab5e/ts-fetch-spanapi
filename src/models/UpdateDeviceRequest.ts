/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.1.13 interdependent-karson
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    FirmwareMetadata,
    FirmwareMetadataFromJSON,
    FirmwareMetadataFromJSONTyped,
    FirmwareMetadataToJSON,
} from './';

/**
 * 
 * @export
 * @interface UpdateDeviceRequest
 */
export interface UpdateDeviceRequest {
    /**
     * 
     * @type {string}
     * @memberof UpdateDeviceRequest
     */
    existingCollectionId?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateDeviceRequest
     */
    deviceId?: string;
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
     * The IMSI is the unique ID for the (e|nu|whatever)SIM card on your device.
     * This is the primary identifier for your device on the network.
     * @type {string}
     * @memberof UpdateDeviceRequest
     */
    imsi?: string;
    /**
     * The IMEI number is the unique ID for your hardware as seen by the network.
     * Obviously you might have a completely different view on things.
     * @type {string}
     * @memberof UpdateDeviceRequest
     */
    imei?: string;
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
}

export function UpdateDeviceRequestFromJSON(json: any): UpdateDeviceRequest {
    return UpdateDeviceRequestFromJSONTyped(json, false);
}

export function UpdateDeviceRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateDeviceRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'existingCollectionId': !exists(json, 'existingCollectionId') ? undefined : json['existingCollectionId'],
        'deviceId': !exists(json, 'deviceId') ? undefined : json['deviceId'],
        'collectionId': !exists(json, 'collectionId') ? undefined : json['collectionId'],
        'imsi': !exists(json, 'imsi') ? undefined : json['imsi'],
        'imei': !exists(json, 'imei') ? undefined : json['imei'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'firmware': !exists(json, 'firmware') ? undefined : FirmwareMetadataFromJSON(json['firmware']),
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
        
        'existingCollectionId': value.existingCollectionId,
        'deviceId': value.deviceId,
        'collectionId': value.collectionId,
        'imsi': value.imsi,
        'imei': value.imei,
        'tags': value.tags,
        'firmware': FirmwareMetadataToJSON(value.firmware),
    };
}



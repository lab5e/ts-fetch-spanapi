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
 * Metadata about firmware on devices.
 * @export
 * @interface FirmwareMetadata
 */
export interface FirmwareMetadata {
    /**
     * 
     * @type {string}
     * @memberof FirmwareMetadata
     */
    currentFirmwareId?: string;
    /**
     * 
     * @type {string}
     * @memberof FirmwareMetadata
     */
    targetFirmwareId?: string;
    /**
     * Last reported firmware version.
     * @type {string}
     * @memberof FirmwareMetadata
     */
    firmwareVersion?: string;
    /**
     * 
     * @type {string}
     * @memberof FirmwareMetadata
     */
    serialNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof FirmwareMetadata
     */
    modelNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof FirmwareMetadata
     */
    manufacturer?: string;
    /**
     * 
     * @type {string}
     * @memberof FirmwareMetadata
     */
    state?: string;
    /**
     * 
     * @type {string}
     * @memberof FirmwareMetadata
     */
    stateMessage?: string;
}

/**
 * Check if a given object implements the FirmwareMetadata interface.
 */
export function instanceOfFirmwareMetadata(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FirmwareMetadataFromJSON(json: any): FirmwareMetadata {
    return FirmwareMetadataFromJSONTyped(json, false);
}

export function FirmwareMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): FirmwareMetadata {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'currentFirmwareId': !exists(json, 'currentFirmwareId') ? undefined : json['currentFirmwareId'],
        'targetFirmwareId': !exists(json, 'targetFirmwareId') ? undefined : json['targetFirmwareId'],
        'firmwareVersion': !exists(json, 'firmwareVersion') ? undefined : json['firmwareVersion'],
        'serialNumber': !exists(json, 'serialNumber') ? undefined : json['serialNumber'],
        'modelNumber': !exists(json, 'modelNumber') ? undefined : json['modelNumber'],
        'manufacturer': !exists(json, 'manufacturer') ? undefined : json['manufacturer'],
        'state': !exists(json, 'state') ? undefined : json['state'],
        'stateMessage': !exists(json, 'stateMessage') ? undefined : json['stateMessage'],
    };
}

export function FirmwareMetadataToJSON(value?: FirmwareMetadata | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'currentFirmwareId': value.currentFirmwareId,
        'targetFirmwareId': value.targetFirmwareId,
        'firmwareVersion': value.firmwareVersion,
        'serialNumber': value.serialNumber,
        'modelNumber': value.modelNumber,
        'manufacturer': value.manufacturer,
        'state': value.state,
        'stateMessage': value.stateMessage,
    };
}


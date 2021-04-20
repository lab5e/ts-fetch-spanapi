/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.1.8 adopted-kali
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    CollectionFirmwareFirmwareManagement,
    CollectionFirmwareFirmwareManagementFromJSON,
    CollectionFirmwareFirmwareManagementFromJSONTyped,
    CollectionFirmwareFirmwareManagementToJSON,
} from './';

/**
 * 
 * @export
 * @interface CollectionFirmware
 */
export interface CollectionFirmware {
    /**
     * The current firmware is the firmware that the devices are currently using.
     * @type {string}
     * @memberof CollectionFirmware
     */
    currentFirmwareId?: string;
    /**
     * The target firmware is set to the desired firmware image for the devices in
     * this collection. If the management is set to "device" this will only be
     * used if the target firmware isn't set on the device itself.
     * @type {string}
     * @memberof CollectionFirmware
     */
    targetFirmwareId?: string;
    /**
     * 
     * @type {CollectionFirmwareFirmwareManagement}
     * @memberof CollectionFirmware
     */
    management?: CollectionFirmwareFirmwareManagement;
}

export function CollectionFirmwareFromJSON(json: any): CollectionFirmware {
    return CollectionFirmwareFromJSONTyped(json, false);
}

export function CollectionFirmwareFromJSONTyped(json: any, ignoreDiscriminator: boolean): CollectionFirmware {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'currentFirmwareId': !exists(json, 'currentFirmwareId') ? undefined : json['currentFirmwareId'],
        'targetFirmwareId': !exists(json, 'targetFirmwareId') ? undefined : json['targetFirmwareId'],
        'management': !exists(json, 'management') ? undefined : CollectionFirmwareFirmwareManagementFromJSON(json['management']),
    };
}

export function CollectionFirmwareToJSON(value?: CollectionFirmware | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'currentFirmwareId': value.currentFirmwareId,
        'targetFirmwareId': value.targetFirmwareId,
        'management': CollectionFirmwareFirmwareManagementToJSON(value.management),
    };
}



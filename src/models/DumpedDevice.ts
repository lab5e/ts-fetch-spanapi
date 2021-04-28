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
    Device,
    DeviceFromJSON,
    DeviceFromJSONTyped,
    DeviceToJSON,
} from './';

/**
 * 
 * @export
 * @interface DumpedDevice
 */
export interface DumpedDevice {
    /**
     * 
     * @type {Device}
     * @memberof DumpedDevice
     */
    device?: Device;
}

export function DumpedDeviceFromJSON(json: any): DumpedDevice {
    return DumpedDeviceFromJSONTyped(json, false);
}

export function DumpedDeviceFromJSONTyped(json: any, ignoreDiscriminator: boolean): DumpedDevice {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'device': !exists(json, 'device') ? undefined : DeviceFromJSON(json['device']),
    };
}

export function DumpedDeviceToJSON(value?: DumpedDevice | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'device': DeviceToJSON(value.device),
    };
}



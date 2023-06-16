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
import type { Device } from './Device';
import {
    DeviceFromJSON,
    DeviceFromJSONTyped,
    DeviceToJSON,
} from './Device';

/**
 * List device response
 * @export
 * @interface ListDevicesResponse
 */
export interface ListDevicesResponse {
    /**
     * 
     * @type {Array<Device>}
     * @memberof ListDevicesResponse
     */
    devices?: Array<Device>;
}

/**
 * Check if a given object implements the ListDevicesResponse interface.
 */
export function instanceOfListDevicesResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ListDevicesResponseFromJSON(json: any): ListDevicesResponse {
    return ListDevicesResponseFromJSONTyped(json, false);
}

export function ListDevicesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListDevicesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'devices': !exists(json, 'devices') ? undefined : ((json['devices'] as Array<any>).map(DeviceFromJSON)),
    };
}

export function ListDevicesResponseToJSON(value?: ListDevicesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'devices': value.devices === undefined ? undefined : ((value.devices as Array<any>).map(DeviceToJSON)),
    };
}


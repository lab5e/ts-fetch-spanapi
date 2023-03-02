/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.4.2 nonviolent-adelbert
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    Firmware,
    FirmwareFromJSON,
    FirmwareFromJSONTyped,
    FirmwareToJSON,
} from './';

/**
 * List firmware response
 * @export
 * @interface ListFirmwareResponse
 */
export interface ListFirmwareResponse {
    /**
     * 
     * @type {Array<Firmware>}
     * @memberof ListFirmwareResponse
     */
    images?: Array<Firmware>;
}

export function ListFirmwareResponseFromJSON(json: any): ListFirmwareResponse {
    return ListFirmwareResponseFromJSONTyped(json, false);
}

export function ListFirmwareResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListFirmwareResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'images': !exists(json, 'images') ? undefined : ((json['images'] as Array<any>).map(FirmwareFromJSON)),
    };
}

export function ListFirmwareResponseToJSON(value?: ListFirmwareResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'images': value.images === undefined ? undefined : ((value.images as Array<any>).map(FirmwareToJSON)),
    };
}



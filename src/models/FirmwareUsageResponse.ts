/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.1.10 hulking-betty
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface FirmwareUsageResponse
 */
export interface FirmwareUsageResponse {
    /**
     * 
     * @type {string}
     * @memberof FirmwareUsageResponse
     */
    imageId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof FirmwareUsageResponse
     */
    targeted?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof FirmwareUsageResponse
     */
    current?: Array<string>;
}

export function FirmwareUsageResponseFromJSON(json: any): FirmwareUsageResponse {
    return FirmwareUsageResponseFromJSONTyped(json, false);
}

export function FirmwareUsageResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FirmwareUsageResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'imageId': !exists(json, 'imageId') ? undefined : json['imageId'],
        'targeted': !exists(json, 'targeted') ? undefined : json['targeted'],
        'current': !exists(json, 'current') ? undefined : json['current'],
    };
}

export function FirmwareUsageResponseToJSON(value?: FirmwareUsageResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'imageId': value.imageId,
        'targeted': value.targeted,
        'current': value.current,
    };
}



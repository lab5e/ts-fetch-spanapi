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
/**
 * Clear firmware error response object
 * @export
 * @interface ClearFirmwareErrorResponse
 */
export interface ClearFirmwareErrorResponse {
    /**
     * 
     * @type {string}
     * @memberof ClearFirmwareErrorResponse
     */
    result?: string;
}

/**
 * Check if a given object implements the ClearFirmwareErrorResponse interface.
 */
export function instanceOfClearFirmwareErrorResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ClearFirmwareErrorResponseFromJSON(json: any): ClearFirmwareErrorResponse {
    return ClearFirmwareErrorResponseFromJSONTyped(json, false);
}

export function ClearFirmwareErrorResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ClearFirmwareErrorResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'result': !exists(json, 'result') ? undefined : json['result'],
    };
}

export function ClearFirmwareErrorResponseToJSON(value?: ClearFirmwareErrorResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'result': value.result,
    };
}


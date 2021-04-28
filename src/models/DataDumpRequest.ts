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
/**
 * 
 * @export
 * @interface DataDumpRequest
 */
export interface DataDumpRequest {
    /**
     * 
     * @type {string}
     * @memberof DataDumpRequest
     */
    comment?: string;
}

export function DataDumpRequestFromJSON(json: any): DataDumpRequest {
    return DataDumpRequestFromJSONTyped(json, false);
}

export function DataDumpRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): DataDumpRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'comment': !exists(json, 'comment') ? undefined : json['comment'],
    };
}

export function DataDumpRequestToJSON(value?: DataDumpRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'comment': value.comment,
    };
}



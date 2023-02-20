/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.4.0 lean-joline
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * This is not available throught the API, just as a regular HTTP response
 * @export
 * @interface RetrieveBlobResponse
 */
export interface RetrieveBlobResponse {
    /**
     * 
     * @type {string}
     * @memberof RetrieveBlobResponse
     */
    contentType?: string;
    /**
     * 
     * @type {number}
     * @memberof RetrieveBlobResponse
     */
    size?: number;
    /**
     * 
     * @type {string}
     * @memberof RetrieveBlobResponse
     */
    data?: string;
}

export function RetrieveBlobResponseFromJSON(json: any): RetrieveBlobResponse {
    return RetrieveBlobResponseFromJSONTyped(json, false);
}

export function RetrieveBlobResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RetrieveBlobResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'contentType': !exists(json, 'contentType') ? undefined : json['contentType'],
        'size': !exists(json, 'size') ? undefined : json['size'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function RetrieveBlobResponseToJSON(value?: RetrieveBlobResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'contentType': value.contentType,
        'size': value.size,
        'data': value.data,
    };
}


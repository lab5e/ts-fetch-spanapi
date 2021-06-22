/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.1.15 disproved-darryl
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
 * @interface SendMessageResponse
 */
export interface SendMessageResponse {
    /**
     * 
     * @type {string}
     * @memberof SendMessageResponse
     */
    collectionId?: string;
    /**
     * 
     * @type {string}
     * @memberof SendMessageResponse
     */
    deviceId?: string;
    /**
     * 
     * @type {number}
     * @memberof SendMessageResponse
     */
    bytesSent?: number;
}

export function SendMessageResponseFromJSON(json: any): SendMessageResponse {
    return SendMessageResponseFromJSONTyped(json, false);
}

export function SendMessageResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SendMessageResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'collectionId': !exists(json, 'collectionId') ? undefined : json['collectionId'],
        'deviceId': !exists(json, 'deviceId') ? undefined : json['deviceId'],
        'bytesSent': !exists(json, 'bytesSent') ? undefined : json['bytesSent'],
    };
}

export function SendMessageResponseToJSON(value?: SendMessageResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'collectionId': value.collectionId,
        'deviceId': value.deviceId,
        'bytesSent': value.bytesSent,
    };
}



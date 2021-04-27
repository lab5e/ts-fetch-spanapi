/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.1.12 infinite-dana
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
 * @interface MessageSendResult
 */
export interface MessageSendResult {
    /**
     * 
     * @type {string}
     * @memberof MessageSendResult
     */
    deviceId?: string;
    /**
     * 
     * @type {string}
     * @memberof MessageSendResult
     */
    message?: string;
}

export function MessageSendResultFromJSON(json: any): MessageSendResult {
    return MessageSendResultFromJSONTyped(json, false);
}

export function MessageSendResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageSendResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'deviceId': !exists(json, 'deviceId') ? undefined : json['deviceId'],
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function MessageSendResultToJSON(value?: MessageSendResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'deviceId': value.deviceId,
        'message': value.message,
    };
}



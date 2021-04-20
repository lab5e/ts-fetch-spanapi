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
    MessageSendResult,
    MessageSendResultFromJSON,
    MessageSendResultFromJSONTyped,
    MessageSendResultToJSON,
} from './';

/**
 * Broadcast message result. The errors array contains the list of errors
 * ocurred when sending a message.
 * @export
 * @interface MultiSendMessageResponse
 */
export interface MultiSendMessageResponse {
    /**
     * 
     * @type {Array<MessageSendResult>}
     * @memberof MultiSendMessageResponse
     */
    errors?: Array<MessageSendResult>;
    /**
     * 
     * @type {number}
     * @memberof MultiSendMessageResponse
     */
    sent?: number;
    /**
     * 
     * @type {number}
     * @memberof MultiSendMessageResponse
     */
    failed?: number;
}

export function MultiSendMessageResponseFromJSON(json: any): MultiSendMessageResponse {
    return MultiSendMessageResponseFromJSONTyped(json, false);
}

export function MultiSendMessageResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MultiSendMessageResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'errors': !exists(json, 'errors') ? undefined : ((json['errors'] as Array<any>).map(MessageSendResultFromJSON)),
        'sent': !exists(json, 'sent') ? undefined : json['sent'],
        'failed': !exists(json, 'failed') ? undefined : json['failed'],
    };
}

export function MultiSendMessageResponseToJSON(value?: MultiSendMessageResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'errors': value.errors === undefined ? undefined : ((value.errors as Array<any>).map(MessageSendResultToJSON)),
        'sent': value.sent,
        'failed': value.failed,
    };
}



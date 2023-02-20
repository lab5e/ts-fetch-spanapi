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
import {
    MessageUpstream,
    MessageUpstreamFromJSON,
    MessageUpstreamFromJSONTyped,
    MessageUpstreamToJSON,
} from './';

/**
 * Response object when listing upstream messages
 * @export
 * @interface ListUpstreamMessagesResponse
 */
export interface ListUpstreamMessagesResponse {
    /**
     * 
     * @type {Array<MessageUpstream>}
     * @memberof ListUpstreamMessagesResponse
     */
    messages?: Array<MessageUpstream>;
}

export function ListUpstreamMessagesResponseFromJSON(json: any): ListUpstreamMessagesResponse {
    return ListUpstreamMessagesResponseFromJSONTyped(json, false);
}

export function ListUpstreamMessagesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListUpstreamMessagesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'messages': !exists(json, 'messages') ? undefined : ((json['messages'] as Array<any>).map(MessageUpstreamFromJSON)),
    };
}

export function ListUpstreamMessagesResponseToJSON(value?: ListUpstreamMessagesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'messages': value.messages === undefined ? undefined : ((value.messages as Array<any>).map(MessageUpstreamToJSON)),
    };
}



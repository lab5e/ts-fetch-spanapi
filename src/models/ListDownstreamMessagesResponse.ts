/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.6.0 truthful-holli
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { MessageDownstream } from './MessageDownstream';
import {
    MessageDownstreamFromJSON,
    MessageDownstreamFromJSONTyped,
    MessageDownstreamToJSON,
} from './MessageDownstream';

/**
 * Response object when listing downstream messages
 * @export
 * @interface ListDownstreamMessagesResponse
 */
export interface ListDownstreamMessagesResponse {
    /**
     * 
     * @type {Array<MessageDownstream>}
     * @memberof ListDownstreamMessagesResponse
     */
    messages?: Array<MessageDownstream>;
}

/**
 * Check if a given object implements the ListDownstreamMessagesResponse interface.
 */
export function instanceOfListDownstreamMessagesResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ListDownstreamMessagesResponseFromJSON(json: any): ListDownstreamMessagesResponse {
    return ListDownstreamMessagesResponseFromJSONTyped(json, false);
}

export function ListDownstreamMessagesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListDownstreamMessagesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'messages': !exists(json, 'messages') ? undefined : ((json['messages'] as Array<any>).map(MessageDownstreamFromJSON)),
    };
}

export function ListDownstreamMessagesResponseToJSON(value?: ListDownstreamMessagesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'messages': value.messages === undefined ? undefined : ((value.messages as Array<any>).map(MessageDownstreamToJSON)),
    };
}


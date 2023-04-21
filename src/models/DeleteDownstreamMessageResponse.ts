/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.5.0 overwrought-dorla
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Response object when deleting a downstream message
 * @export
 * @interface DeleteDownstreamMessageResponse
 */
export interface DeleteDownstreamMessageResponse {
    /**
     * 
     * @type {string}
     * @memberof DeleteDownstreamMessageResponse
     */
    messageId?: string;
}

/**
 * Check if a given object implements the DeleteDownstreamMessageResponse interface.
 */
export function instanceOfDeleteDownstreamMessageResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DeleteDownstreamMessageResponseFromJSON(json: any): DeleteDownstreamMessageResponse {
    return DeleteDownstreamMessageResponseFromJSONTyped(json, false);
}

export function DeleteDownstreamMessageResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteDownstreamMessageResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'messageId': !exists(json, 'messageId') ? undefined : json['messageId'],
    };
}

export function DeleteDownstreamMessageResponseToJSON(value?: DeleteDownstreamMessageResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'messageId': value.messageId,
    };
}


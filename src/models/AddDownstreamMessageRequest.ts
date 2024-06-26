/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.9.6 authoritarian-betty
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * This is the request object to send messages out to the devices
 * @export
 * @interface AddDownstreamMessageRequest
 */
export interface AddDownstreamMessageRequest {
    /**
     * 
     * @type {string}
     * @memberof AddDownstreamMessageRequest
     */
    payload?: string;
}

/**
 * Check if a given object implements the AddDownstreamMessageRequest interface.
 */
export function instanceOfAddDownstreamMessageRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AddDownstreamMessageRequestFromJSON(json: any): AddDownstreamMessageRequest {
    return AddDownstreamMessageRequestFromJSONTyped(json, false);
}

export function AddDownstreamMessageRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddDownstreamMessageRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'payload': !exists(json, 'payload') ? undefined : json['payload'],
    };
}

export function AddDownstreamMessageRequestToJSON(value?: AddDownstreamMessageRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'payload': value.payload,
    };
}


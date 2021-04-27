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
 * @interface OutputStatusResponse
 */
export interface OutputStatusResponse {
    /**
     * 
     * @type {string}
     * @memberof OutputStatusResponse
     */
    collectionId?: string;
    /**
     * 
     * @type {string}
     * @memberof OutputStatusResponse
     */
    outputId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof OutputStatusResponse
     */
    enabled?: boolean;
    /**
     * 
     * @type {number}
     * @memberof OutputStatusResponse
     */
    errorCount?: number;
    /**
     * 
     * @type {number}
     * @memberof OutputStatusResponse
     */
    forwarded?: number;
    /**
     * 
     * @type {number}
     * @memberof OutputStatusResponse
     */
    received?: number;
    /**
     * 
     * @type {number}
     * @memberof OutputStatusResponse
     */
    retransmits?: number;
}

export function OutputStatusResponseFromJSON(json: any): OutputStatusResponse {
    return OutputStatusResponseFromJSONTyped(json, false);
}

export function OutputStatusResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): OutputStatusResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'collectionId': !exists(json, 'collectionId') ? undefined : json['collectionId'],
        'outputId': !exists(json, 'outputId') ? undefined : json['outputId'],
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'errorCount': !exists(json, 'errorCount') ? undefined : json['errorCount'],
        'forwarded': !exists(json, 'forwarded') ? undefined : json['forwarded'],
        'received': !exists(json, 'received') ? undefined : json['received'],
        'retransmits': !exists(json, 'retransmits') ? undefined : json['retransmits'],
    };
}

export function OutputStatusResponseToJSON(value?: OutputStatusResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'collectionId': value.collectionId,
        'outputId': value.outputId,
        'enabled': value.enabled,
        'errorCount': value.errorCount,
        'forwarded': value.forwarded,
        'received': value.received,
        'retransmits': value.retransmits,
    };
}



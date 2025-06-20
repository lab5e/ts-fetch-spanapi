/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 5.0.5 contented-jamila
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ImageVersionEntry } from './ImageVersionEntry';
import {
    ImageVersionEntryFromJSON,
    ImageVersionEntryFromJSONTyped,
    ImageVersionEntryToJSON,
} from './ImageVersionEntry';

/**
 * Response obejct when listing image version log for a device
 * @export
 * @interface ListImageVersionHistoryResponse
 */
export interface ListImageVersionHistoryResponse {
    /**
     * 
     * @type {string}
     * @memberof ListImageVersionHistoryResponse
     */
    collectionId?: string;
    /**
     * 
     * @type {Array<ImageVersionEntry>}
     * @memberof ListImageVersionHistoryResponse
     */
    log?: Array<ImageVersionEntry>;
}

/**
 * Check if a given object implements the ListImageVersionHistoryResponse interface.
 */
export function instanceOfListImageVersionHistoryResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ListImageVersionHistoryResponseFromJSON(json: any): ListImageVersionHistoryResponse {
    return ListImageVersionHistoryResponseFromJSONTyped(json, false);
}

export function ListImageVersionHistoryResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListImageVersionHistoryResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'collectionId': !exists(json, 'collectionId') ? undefined : json['collectionId'],
        'log': !exists(json, 'log') ? undefined : ((json['log'] as Array<any>).map(ImageVersionEntryFromJSON)),
    };
}

export function ListImageVersionHistoryResponseToJSON(value?: ListImageVersionHistoryResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'collectionId': value.collectionId,
        'log': value.log === undefined ? undefined : ((value.log as Array<any>).map(ImageVersionEntryToJSON)),
    };
}


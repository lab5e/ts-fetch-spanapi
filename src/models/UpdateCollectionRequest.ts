/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.7.0 actionable-aryanna
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CollectionFirmware } from './CollectionFirmware';
import {
    CollectionFirmwareFromJSON,
    CollectionFirmwareFromJSONTyped,
    CollectionFirmwareToJSON,
} from './CollectionFirmware';

/**
 * Request object when updating a collection
 * @export
 * @interface UpdateCollectionRequest
 */
export interface UpdateCollectionRequest {
    /**
     * The team ID that owns the collection. This field is required. When you
     * create new collections the default is to use your private team ID.
     * @type {string}
     * @memberof UpdateCollectionRequest
     */
    teamId?: string;
    /**
     * 
     * @type {CollectionFirmware}
     * @memberof UpdateCollectionRequest
     */
    firmware?: CollectionFirmware;
    /**
     * Tags for the collection. Tags are metadata fields that you can assign to
     * the collection.
     * @type {{ [key: string]: string; }}
     * @memberof UpdateCollectionRequest
     */
    tags?: { [key: string]: string; };
}

/**
 * Check if a given object implements the UpdateCollectionRequest interface.
 */
export function instanceOfUpdateCollectionRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpdateCollectionRequestFromJSON(json: any): UpdateCollectionRequest {
    return UpdateCollectionRequestFromJSONTyped(json, false);
}

export function UpdateCollectionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateCollectionRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'teamId': !exists(json, 'teamId') ? undefined : json['teamId'],
        'firmware': !exists(json, 'firmware') ? undefined : CollectionFirmwareFromJSON(json['firmware']),
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
    };
}

export function UpdateCollectionRequestToJSON(value?: UpdateCollectionRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'teamId': value.teamId,
        'firmware': CollectionFirmwareToJSON(value.firmware),
        'tags': value.tags,
    };
}


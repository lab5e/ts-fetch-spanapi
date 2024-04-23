/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.9.5 spattered-kelvin
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
 * Request object when creating a collection. The collect ID is assigned by the
 * service.
 * @export
 * @interface CreateCollectionRequest
 */
export interface CreateCollectionRequest {
    /**
     * The team ID that owns the collection. This field is required. When you
     * create new collections the default is to use your private team ID.
     * @type {string}
     * @memberof CreateCollectionRequest
     */
    teamId?: string;
    /**
     * 
     * @type {CollectionFirmware}
     * @memberof CreateCollectionRequest
     */
    firmware?: CollectionFirmware;
    /**
     * Tags for the collection. Tags are metadata fields that you can assign to
     * the collection.
     * @type {{ [key: string]: string; }}
     * @memberof CreateCollectionRequest
     */
    tags?: { [key: string]: string; };
}

/**
 * Check if a given object implements the CreateCollectionRequest interface.
 */
export function instanceOfCreateCollectionRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreateCollectionRequestFromJSON(json: any): CreateCollectionRequest {
    return CreateCollectionRequestFromJSONTyped(json, false);
}

export function CreateCollectionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateCollectionRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'teamId': !exists(json, 'teamId') ? undefined : json['teamId'],
        'firmware': !exists(json, 'firmware') ? undefined : CollectionFirmwareFromJSON(json['firmware']),
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
    };
}

export function CreateCollectionRequestToJSON(value?: CreateCollectionRequest | null): any {
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


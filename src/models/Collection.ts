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
 * This is a collection
 * @export
 * @interface Collection
 */
export interface Collection {
    /**
     * The ID of the collection. This is assigned by the backend.
     * @type {string}
     * @memberof Collection
     */
    collectionId?: string;
    /**
     * The team ID that owns the collection. This field is required. When you
     * create new collections the default is to use your private team ID.
     * @type {string}
     * @memberof Collection
     */
    teamId?: string;
    /**
     * 
     * @type {CollectionFirmware}
     * @memberof Collection
     */
    firmware?: CollectionFirmware;
    /**
     * Tags for the collection. Tags are metadata fields that you can assign to
     * the collection.
     * @type {{ [key: string]: string; }}
     * @memberof Collection
     */
    tags?: { [key: string]: string; };
    /**
     * 
     * @type {Array<string>}
     * @memberof Collection
     */
    upstreamTimestamps?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Collection
     */
    downstreamTimestamps?: Array<string>;
}

/**
 * Check if a given object implements the Collection interface.
 */
export function instanceOfCollection(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CollectionFromJSON(json: any): Collection {
    return CollectionFromJSONTyped(json, false);
}

export function CollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Collection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'collectionId': !exists(json, 'collectionId') ? undefined : json['collectionId'],
        'teamId': !exists(json, 'teamId') ? undefined : json['teamId'],
        'firmware': !exists(json, 'firmware') ? undefined : CollectionFirmwareFromJSON(json['firmware']),
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'upstreamTimestamps': !exists(json, 'upstreamTimestamps') ? undefined : json['upstreamTimestamps'],
        'downstreamTimestamps': !exists(json, 'downstreamTimestamps') ? undefined : json['downstreamTimestamps'],
    };
}

export function CollectionToJSON(value?: Collection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'collectionId': value.collectionId,
        'teamId': value.teamId,
        'firmware': CollectionFirmwareToJSON(value.firmware),
        'tags': value.tags,
        'upstreamTimestamps': value.upstreamTimestamps,
        'downstreamTimestamps': value.downstreamTimestamps,
    };
}


/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.1.17 enhanced-allie
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    CollectionFirmware,
    CollectionFirmwareFromJSON,
    CollectionFirmwareFromJSONTyped,
    CollectionFirmwareToJSON,
    FieldMask,
    FieldMaskFromJSON,
    FieldMaskFromJSONTyped,
    FieldMaskToJSON,
} from './';

/**
 * 
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
     * @type {FieldMask}
     * @memberof Collection
     */
    fieldMask?: FieldMask;
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
        'fieldMask': !exists(json, 'fieldMask') ? undefined : FieldMaskFromJSON(json['fieldMask']),
        'firmware': !exists(json, 'firmware') ? undefined : CollectionFirmwareFromJSON(json['firmware']),
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
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
        'fieldMask': FieldMaskToJSON(value.fieldMask),
        'firmware': CollectionFirmwareToJSON(value.firmware),
        'tags': value.tags,
    };
}



/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.1.15 disproved-darryl
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
 * @interface CreateFirmwareRequest
 */
export interface CreateFirmwareRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateFirmwareRequest
     */
    collectionId?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateFirmwareRequest
     */
    image?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateFirmwareRequest
     */
    version?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateFirmwareRequest
     */
    filename?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof CreateFirmwareRequest
     */
    tags?: { [key: string]: string; };
}

export function CreateFirmwareRequestFromJSON(json: any): CreateFirmwareRequest {
    return CreateFirmwareRequestFromJSONTyped(json, false);
}

export function CreateFirmwareRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateFirmwareRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'collectionId': !exists(json, 'collectionId') ? undefined : json['collectionId'],
        'image': !exists(json, 'image') ? undefined : json['image'],
        'version': !exists(json, 'version') ? undefined : json['version'],
        'filename': !exists(json, 'filename') ? undefined : json['filename'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
    };
}

export function CreateFirmwareRequestToJSON(value?: CreateFirmwareRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'collectionId': value.collectionId,
        'image': value.image,
        'version': value.version,
        'filename': value.filename,
        'tags': value.tags,
    };
}



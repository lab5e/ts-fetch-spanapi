/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.4.0 lean-joline
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    Blob,
    BlobFromJSON,
    BlobFromJSONTyped,
    BlobToJSON,
} from './';

/**
 * Response object when listing blobs for a collection
 * @export
 * @interface ListBlobResponse
 */
export interface ListBlobResponse {
    /**
     * 
     * @type {Array<Blob>}
     * @memberof ListBlobResponse
     */
    blobs?: Array<Blob>;
}

export function ListBlobResponseFromJSON(json: any): ListBlobResponse {
    return ListBlobResponseFromJSONTyped(json, false);
}

export function ListBlobResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListBlobResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'blobs': !exists(json, 'blobs') ? undefined : ((json['blobs'] as Array<any>).map(BlobFromJSON)),
    };
}

export function ListBlobResponseToJSON(value?: ListBlobResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'blobs': value.blobs === undefined ? undefined : ((value.blobs as Array<any>).map(BlobToJSON)),
    };
}


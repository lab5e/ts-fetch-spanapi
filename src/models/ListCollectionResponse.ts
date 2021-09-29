/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.1.18 disgruntled-jerald
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    Collection,
    CollectionFromJSON,
    CollectionFromJSONTyped,
    CollectionToJSON,
} from './';

/**
 * Collection list. The list contains all the collections you have access to.
 * @export
 * @interface ListCollectionResponse
 */
export interface ListCollectionResponse {
    /**
     * 
     * @type {Array<Collection>}
     * @memberof ListCollectionResponse
     */
    collections?: Array<Collection>;
}

export function ListCollectionResponseFromJSON(json: any): ListCollectionResponse {
    return ListCollectionResponseFromJSONTyped(json, false);
}

export function ListCollectionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListCollectionResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'collections': !exists(json, 'collections') ? undefined : ((json['collections'] as Array<any>).map(CollectionFromJSON)),
    };
}

export function ListCollectionResponseToJSON(value?: ListCollectionResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'collections': value.collections === undefined ? undefined : ((value.collections as Array<any>).map(CollectionToJSON)),
    };
}



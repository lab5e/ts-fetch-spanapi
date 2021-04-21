/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.1.9 receding-glennis
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    Output,
    OutputFromJSON,
    OutputFromJSONTyped,
    OutputToJSON,
} from './';

/**
 * 
 * @export
 * @interface ListOutputResponse
 */
export interface ListOutputResponse {
    /**
     * 
     * @type {string}
     * @memberof ListOutputResponse
     */
    collectionId?: string;
    /**
     * 
     * @type {Array<Output>}
     * @memberof ListOutputResponse
     */
    outputs?: Array<Output>;
}

export function ListOutputResponseFromJSON(json: any): ListOutputResponse {
    return ListOutputResponseFromJSONTyped(json, false);
}

export function ListOutputResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListOutputResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'collectionId': !exists(json, 'collectionId') ? undefined : json['collectionId'],
        'outputs': !exists(json, 'outputs') ? undefined : ((json['outputs'] as Array<any>).map(OutputFromJSON)),
    };
}

export function ListOutputResponseToJSON(value?: ListOutputResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'collectionId': value.collectionId,
        'outputs': value.outputs === undefined ? undefined : ((value.outputs as Array<any>).map(OutputToJSON)),
    };
}



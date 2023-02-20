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
    OutputDataMessage,
    OutputDataMessageFromJSON,
    OutputDataMessageFromJSONTyped,
    OutputDataMessageToJSON,
} from './';

/**
 * List of device payloads
 * @export
 * @interface ListDataResponse
 */
export interface ListDataResponse {
    /**
     * 
     * @type {Array<OutputDataMessage>}
     * @memberof ListDataResponse
     */
    data?: Array<OutputDataMessage>;
}

export function ListDataResponseFromJSON(json: any): ListDataResponse {
    return ListDataResponseFromJSONTyped(json, false);
}

export function ListDataResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListDataResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(OutputDataMessageFromJSON)),
    };
}

export function ListDataResponseToJSON(value?: ListDataResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(OutputDataMessageToJSON)),
    };
}



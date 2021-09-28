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
/**
 * 
 * @export
 * @interface ProtobufAny
 */
export interface ProtobufAny {
    /**
     * 
     * @type {string}
     * @memberof ProtobufAny
     */
    typeUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof ProtobufAny
     */
    value?: string;
}

export function ProtobufAnyFromJSON(json: any): ProtobufAny {
    return ProtobufAnyFromJSONTyped(json, false);
}

export function ProtobufAnyFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProtobufAny {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'typeUrl': !exists(json, 'typeUrl') ? undefined : json['typeUrl'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function ProtobufAnyToJSON(value?: ProtobufAny | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'typeUrl': value.typeUrl,
        'value': value.value,
    };
}



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
    NetworkOperator,
    NetworkOperatorFromJSON,
    NetworkOperatorFromJSONTyped,
    NetworkOperatorToJSON,
} from './';

/**
 * 
 * @export
 * @interface DeviceMetadata
 */
export interface DeviceMetadata {
    /**
     * 
     * @type {NetworkOperator}
     * @memberof DeviceMetadata
     */
    simOperator?: NetworkOperator;
}

export function DeviceMetadataFromJSON(json: any): DeviceMetadata {
    return DeviceMetadataFromJSONTyped(json, false);
}

export function DeviceMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeviceMetadata {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'simOperator': !exists(json, 'simOperator') ? undefined : NetworkOperatorFromJSON(json['simOperator']),
    };
}

export function DeviceMetadataToJSON(value?: DeviceMetadata | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'simOperator': NetworkOperatorToJSON(value.simOperator),
    };
}



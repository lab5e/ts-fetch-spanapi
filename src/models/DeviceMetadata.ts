/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.3.0 grouchy-aloysius
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    CellularIoTMetadata,
    CellularIoTMetadataFromJSON,
    CellularIoTMetadataFromJSONTyped,
    CellularIoTMetadataToJSON,
    InetMetadata,
    InetMetadataFromJSON,
    InetMetadataFromJSONTyped,
    InetMetadataToJSON,
    NetworkOperator,
    NetworkOperatorFromJSON,
    NetworkOperatorFromJSONTyped,
    NetworkOperatorToJSON,
} from './';

/**
 * This is the metadata for devices.
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
    /**
     * 
     * @type {CellularIoTMetadata}
     * @memberof DeviceMetadata
     */
    ciot?: CellularIoTMetadata;
    /**
     * 
     * @type {InetMetadata}
     * @memberof DeviceMetadata
     */
    inet?: InetMetadata;
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
        'ciot': !exists(json, 'ciot') ? undefined : CellularIoTMetadataFromJSON(json['ciot']),
        'inet': !exists(json, 'inet') ? undefined : InetMetadataFromJSON(json['inet']),
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
        'ciot': CellularIoTMetadataToJSON(value.ciot),
        'inet': InetMetadataToJSON(value.inet),
    };
}



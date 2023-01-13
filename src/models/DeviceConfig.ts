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
    CellularIoTConfig,
    CellularIoTConfigFromJSON,
    CellularIoTConfigFromJSONTyped,
    CellularIoTConfigToJSON,
} from './';

/**
 * This is the configuration for the device via the various gateways.
 * @export
 * @interface DeviceConfig
 */
export interface DeviceConfig {
    /**
     * 
     * @type {CellularIoTConfig}
     * @memberof DeviceConfig
     */
    ciot?: CellularIoTConfig;
}

export function DeviceConfigFromJSON(json: any): DeviceConfig {
    return DeviceConfigFromJSONTyped(json, false);
}

export function DeviceConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeviceConfig {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ciot': !exists(json, 'ciot') ? undefined : CellularIoTConfigFromJSON(json['ciot']),
    };
}

export function DeviceConfigToJSON(value?: DeviceConfig | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ciot': CellularIoTConfigToJSON(value.ciot),
    };
}


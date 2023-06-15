/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.6.0 truthful-holli
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * This is the cellular IOT config
 * @export
 * @interface CellularIoTConfig
 */
export interface CellularIoTConfig {
    /**
     * 
     * @type {string}
     * @memberof CellularIoTConfig
     */
    imsi?: string;
    /**
     * on your device. This is the primary identifier for your
     * device on the network.
     * 
     * The IMEI number is the unique ID for your hardware as
     * @type {string}
     * @memberof CellularIoTConfig
     */
    imei?: string;
}

/**
 * Check if a given object implements the CellularIoTConfig interface.
 */
export function instanceOfCellularIoTConfig(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CellularIoTConfigFromJSON(json: any): CellularIoTConfig {
    return CellularIoTConfigFromJSONTyped(json, false);
}

export function CellularIoTConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): CellularIoTConfig {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'imsi': !exists(json, 'imsi') ? undefined : json['imsi'],
        'imei': !exists(json, 'imei') ? undefined : json['imei'],
    };
}

export function CellularIoTConfigToJSON(value?: CellularIoTConfig | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'imsi': value.imsi,
        'imei': value.imei,
    };
}


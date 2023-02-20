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
    CellularIoTConfig,
    CellularIoTConfigFromJSON,
    CellularIoTConfigFromJSONTyped,
    CellularIoTConfigToJSON,
    GatewayDeviceConfig,
    GatewayDeviceConfigFromJSON,
    GatewayDeviceConfigFromJSONTyped,
    GatewayDeviceConfigToJSON,
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
    /**
     * This is the configuration for an internet-connected device. There are
     * currently no configuration options for internet devices; the device is
     * identified via the clientcertificate.
     * 
     * This is empty since there's no configuration required for the internet
     *  gateway
     * @type {object}
     * @memberof DeviceConfig
     */
    inet?: object;
    /**
     * 
     * @type {{ [key: string]: GatewayDeviceConfig; }}
     * @memberof DeviceConfig
     */
    gateway?: { [key: string]: GatewayDeviceConfig; };
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
        'inet': !exists(json, 'inet') ? undefined : json['inet'],
        'gateway': !exists(json, 'gateway') ? undefined : (mapValues(json['gateway'], GatewayDeviceConfigFromJSON)),
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
        'inet': value.inet,
        'gateway': value.gateway === undefined ? undefined : (mapValues(value.gateway, GatewayDeviceConfigToJSON)),
    };
}



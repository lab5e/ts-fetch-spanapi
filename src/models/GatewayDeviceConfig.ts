/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.8.0 indecipherable-ferman
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Configuration parameters for a device in a user-managed gateway. The
 * configuration parameters depends on the type of gateway.
 * @export
 * @interface GatewayDeviceConfig
 */
export interface GatewayDeviceConfig {
    /**
     * This is the ID of the gateway this configuration applies to.
     * @type {string}
     * @memberof GatewayDeviceConfig
     */
    gatewayId?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof GatewayDeviceConfig
     */
    params?: { [key: string]: string; };
}

/**
 * Check if a given object implements the GatewayDeviceConfig interface.
 */
export function instanceOfGatewayDeviceConfig(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GatewayDeviceConfigFromJSON(json: any): GatewayDeviceConfig {
    return GatewayDeviceConfigFromJSONTyped(json, false);
}

export function GatewayDeviceConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): GatewayDeviceConfig {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'gatewayId': !exists(json, 'gatewayId') ? undefined : json['gatewayId'],
        'params': !exists(json, 'params') ? undefined : json['params'],
    };
}

export function GatewayDeviceConfigToJSON(value?: GatewayDeviceConfig | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'gatewayId': value.gatewayId,
        'params': value.params,
    };
}


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
 * 
 * @export
 * @interface GatewayInetConfig
 */
export interface GatewayInetConfig {
    /**
     * 
     * @type {string}
     * @memberof GatewayInetConfig
     */
    dtlsEndpoint?: string;
    /**
     * 
     * @type {string}
     * @memberof GatewayInetConfig
     */
    coapEndpoint?: string;
    /**
     * 
     * @type {string}
     * @memberof GatewayInetConfig
     */
    mqttEndpoint?: string;
}

/**
 * Check if a given object implements the GatewayInetConfig interface.
 */
export function instanceOfGatewayInetConfig(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GatewayInetConfigFromJSON(json: any): GatewayInetConfig {
    return GatewayInetConfigFromJSONTyped(json, false);
}

export function GatewayInetConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): GatewayInetConfig {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dtlsEndpoint': !exists(json, 'dtlsEndpoint') ? undefined : json['dtlsEndpoint'],
        'coapEndpoint': !exists(json, 'coapEndpoint') ? undefined : json['coapEndpoint'],
        'mqttEndpoint': !exists(json, 'mqttEndpoint') ? undefined : json['mqttEndpoint'],
    };
}

export function GatewayInetConfigToJSON(value?: GatewayInetConfig | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'dtlsEndpoint': value.dtlsEndpoint,
        'coapEndpoint': value.coapEndpoint,
        'mqttEndpoint': value.mqttEndpoint,
    };
}


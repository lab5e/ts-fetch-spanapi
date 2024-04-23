/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.9.5 spattered-kelvin
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
 * @interface GatewayCustomConfig
 */
export interface GatewayCustomConfig {
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof GatewayCustomConfig
     */
    params?: { [key: string]: string; };
}

/**
 * Check if a given object implements the GatewayCustomConfig interface.
 */
export function instanceOfGatewayCustomConfig(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GatewayCustomConfigFromJSON(json: any): GatewayCustomConfig {
    return GatewayCustomConfigFromJSONTyped(json, false);
}

export function GatewayCustomConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): GatewayCustomConfig {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'params': !exists(json, 'params') ? undefined : json['params'],
    };
}

export function GatewayCustomConfigToJSON(value?: GatewayCustomConfig | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'params': value.params,
    };
}


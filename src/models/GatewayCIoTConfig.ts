/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.5.0 overwrought-dorla
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
 * @interface GatewayCIoTConfig
 */
export interface GatewayCIoTConfig {
    /**
     * 
     * @type {string}
     * @memberof GatewayCIoTConfig
     */
    apn?: string;
    /**
     * 
     * @type {string}
     * @memberof GatewayCIoTConfig
     */
    udpEndpoint?: string;
    /**
     * 
     * @type {string}
     * @memberof GatewayCIoTConfig
     */
    coapEndpoint?: string;
}

/**
 * Check if a given object implements the GatewayCIoTConfig interface.
 */
export function instanceOfGatewayCIoTConfig(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GatewayCIoTConfigFromJSON(json: any): GatewayCIoTConfig {
    return GatewayCIoTConfigFromJSONTyped(json, false);
}

export function GatewayCIoTConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): GatewayCIoTConfig {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apn': !exists(json, 'apn') ? undefined : json['apn'],
        'udpEndpoint': !exists(json, 'udpEndpoint') ? undefined : json['udpEndpoint'],
        'coapEndpoint': !exists(json, 'coapEndpoint') ? undefined : json['coapEndpoint'],
    };
}

export function GatewayCIoTConfigToJSON(value?: GatewayCIoTConfig | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apn': value.apn,
        'udpEndpoint': value.udpEndpoint,
        'coapEndpoint': value.coapEndpoint,
    };
}


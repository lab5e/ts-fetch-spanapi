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
/**
 * Metadata for devices connected via user-managed gateways. This metadata shows
 * the configuration for the last message transmission
 * @export
 * @interface GatewayDeviceMetadata
 */
export interface GatewayDeviceMetadata {
    /**
     * 
     * @type {string}
     * @memberof GatewayDeviceMetadata
     */
    gatewayId?: string;
    /**
     * 
     * @type {string}
     * @memberof GatewayDeviceMetadata
     */
    lastUpdate?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof GatewayDeviceMetadata
     */
    params?: { [key: string]: string; };
}

export function GatewayDeviceMetadataFromJSON(json: any): GatewayDeviceMetadata {
    return GatewayDeviceMetadataFromJSONTyped(json, false);
}

export function GatewayDeviceMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GatewayDeviceMetadata {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'gatewayId': !exists(json, 'gatewayId') ? undefined : json['gatewayId'],
        'lastUpdate': !exists(json, 'lastUpdate') ? undefined : json['lastUpdate'],
        'params': !exists(json, 'params') ? undefined : json['params'],
    };
}

export function GatewayDeviceMetadataToJSON(value?: GatewayDeviceMetadata | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'gatewayId': value.gatewayId,
        'lastUpdate': value.lastUpdate,
        'params': value.params,
    };
}


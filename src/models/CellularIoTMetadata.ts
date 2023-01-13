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
/**
 * This is the metadata for a Cellular IoT device connected via an APN.
 * @export
 * @interface CellularIoTMetadata
 */
export interface CellularIoTMetadata {
    /**
     * 
     * @type {string}
     * @memberof CellularIoTMetadata
     */
    gatewayId?: string;
    /**
     * Allocated IP address.
     * @type {string}
     * @memberof CellularIoTMetadata
     */
    allocatedIp?: string;
    /**
     * 
     * @type {string}
     * @memberof CellularIoTMetadata
     */
    allocatedAt?: string;
    /**
     * 
     * @type {string}
     * @memberof CellularIoTMetadata
     */
    cellId?: string;
    /**
     * the provider in use.
     * 
     * The Mobile Country Code for the operator.
     * @type {number}
     * @memberof CellularIoTMetadata
     */
    mcc?: number;
    /**
     * 
     * @type {number}
     * @memberof CellularIoTMetadata
     */
    mnc?: number;
    /**
     * 
     * @type {string}
     * @memberof CellularIoTMetadata
     */
    country?: string;
    /**
     * 
     * @type {string}
     * @memberof CellularIoTMetadata
     */
    network?: string;
    /**
     * 
     * @type {string}
     * @memberof CellularIoTMetadata
     */
    countryCode?: string;
    /**
     * 
     * @type {string}
     * @memberof CellularIoTMetadata
     */
    lastUpdate?: string;
}

export function CellularIoTMetadataFromJSON(json: any): CellularIoTMetadata {
    return CellularIoTMetadataFromJSONTyped(json, false);
}

export function CellularIoTMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CellularIoTMetadata {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'gatewayId': !exists(json, 'gatewayId') ? undefined : json['gatewayId'],
        'allocatedIp': !exists(json, 'allocatedIp') ? undefined : json['allocatedIp'],
        'allocatedAt': !exists(json, 'allocatedAt') ? undefined : json['allocatedAt'],
        'cellId': !exists(json, 'cellId') ? undefined : json['cellId'],
        'mcc': !exists(json, 'mcc') ? undefined : json['mcc'],
        'mnc': !exists(json, 'mnc') ? undefined : json['mnc'],
        'country': !exists(json, 'country') ? undefined : json['country'],
        'network': !exists(json, 'network') ? undefined : json['network'],
        'countryCode': !exists(json, 'countryCode') ? undefined : json['countryCode'],
        'lastUpdate': !exists(json, 'lastUpdate') ? undefined : json['lastUpdate'],
    };
}

export function CellularIoTMetadataToJSON(value?: CellularIoTMetadata | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'gatewayId': value.gatewayId,
        'allocatedIp': value.allocatedIp,
        'allocatedAt': value.allocatedAt,
        'cellId': value.cellId,
        'mcc': value.mcc,
        'mnc': value.mnc,
        'country': value.country,
        'network': value.network,
        'countryCode': value.countryCode,
        'lastUpdate': value.lastUpdate,
    };
}


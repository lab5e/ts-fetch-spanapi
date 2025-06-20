/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 5.0.5 contented-jamila
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Metadata for devices connected via the internet gateway. This metadata shows
 * the configuration for the last message transmission.
 * @export
 * @interface InetMetadata
 */
export interface InetMetadata {
    /**
     * 
     * @type {string}
     * @memberof InetMetadata
     */
    gatewayId?: string;
    /**
     * 
     * @type {string}
     * @memberof InetMetadata
     */
    lastUpdate?: string;
    /**
     * 
     * @type {string}
     * @memberof InetMetadata
     */
    remoteAddress?: string;
    /**
     * 
     * @type {string}
     * @memberof InetMetadata
     */
    certificateSerial?: string;
}

/**
 * Check if a given object implements the InetMetadata interface.
 */
export function instanceOfInetMetadata(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function InetMetadataFromJSON(json: any): InetMetadata {
    return InetMetadataFromJSONTyped(json, false);
}

export function InetMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): InetMetadata {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'gatewayId': !exists(json, 'gatewayId') ? undefined : json['gatewayId'],
        'lastUpdate': !exists(json, 'lastUpdate') ? undefined : json['lastUpdate'],
        'remoteAddress': !exists(json, 'remoteAddress') ? undefined : json['remoteAddress'],
        'certificateSerial': !exists(json, 'certificateSerial') ? undefined : json['certificateSerial'],
    };
}

export function InetMetadataToJSON(value?: InetMetadata | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'gatewayId': value.gatewayId,
        'lastUpdate': value.lastUpdate,
        'remoteAddress': value.remoteAddress,
        'certificateSerial': value.certificateSerial,
    };
}


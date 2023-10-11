/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.7.0 actionable-aryanna
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * UDP metadata for messages receveied through one of the UDP endpoints
 * @export
 * @interface UDPMetadata
 */
export interface UDPMetadata {
    /**
     * 
     * @type {number}
     * @memberof UDPMetadata
     */
    localPort?: number;
    /**
     * 
     * @type {number}
     * @memberof UDPMetadata
     */
    remotePort?: number;
}

/**
 * Check if a given object implements the UDPMetadata interface.
 */
export function instanceOfUDPMetadata(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UDPMetadataFromJSON(json: any): UDPMetadata {
    return UDPMetadataFromJSONTyped(json, false);
}

export function UDPMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): UDPMetadata {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'localPort': !exists(json, 'localPort') ? undefined : json['localPort'],
        'remotePort': !exists(json, 'remotePort') ? undefined : json['remotePort'],
    };
}

export function UDPMetadataToJSON(value?: UDPMetadata | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'localPort': value.localPort,
        'remotePort': value.remotePort,
    };
}


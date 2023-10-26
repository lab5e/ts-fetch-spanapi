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
 * Metadata for gateway transports. The actual contents varies from gateway to
 * gateway
 * @export
 * @interface GatewayMetadata
 */
export interface GatewayMetadata {
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof GatewayMetadata
     */
    metadata?: { [key: string]: string; };
}

/**
 * Check if a given object implements the GatewayMetadata interface.
 */
export function instanceOfGatewayMetadata(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GatewayMetadataFromJSON(json: any): GatewayMetadata {
    return GatewayMetadataFromJSONTyped(json, false);
}

export function GatewayMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GatewayMetadata {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
    };
}

export function GatewayMetadataToJSON(value?: GatewayMetadata | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'metadata': value.metadata,
    };
}


/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.6.1 squirming-codi
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { GatewayConfig } from './GatewayConfig';
import {
    GatewayConfigFromJSON,
    GatewayConfigFromJSONTyped,
    GatewayConfigToJSON,
} from './GatewayConfig';
import type { GatewayType } from './GatewayType';
import {
    GatewayTypeFromJSON,
    GatewayTypeFromJSONTyped,
    GatewayTypeToJSON,
} from './GatewayType';

/**
 * 
 * @export
 * @interface UpdateGatewayRequest
 */
export interface UpdateGatewayRequest {
    /**
     * 
     * @type {string}
     * @memberof UpdateGatewayRequest
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateGatewayRequest
     */
    collectionId?: string;
    /**
     * 
     * @type {GatewayType}
     * @memberof UpdateGatewayRequest
     */
    type?: GatewayType;
    /**
     * 
     * @type {GatewayConfig}
     * @memberof UpdateGatewayRequest
     */
    config?: GatewayConfig;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof UpdateGatewayRequest
     */
    tags?: { [key: string]: string; };
}

/**
 * Check if a given object implements the UpdateGatewayRequest interface.
 */
export function instanceOfUpdateGatewayRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpdateGatewayRequestFromJSON(json: any): UpdateGatewayRequest {
    return UpdateGatewayRequestFromJSONTyped(json, false);
}

export function UpdateGatewayRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateGatewayRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'collectionId': !exists(json, 'collectionId') ? undefined : json['collectionId'],
        'type': !exists(json, 'type') ? undefined : GatewayTypeFromJSON(json['type']),
        'config': !exists(json, 'config') ? undefined : GatewayConfigFromJSON(json['config']),
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
    };
}

export function UpdateGatewayRequestToJSON(value?: UpdateGatewayRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'collectionId': value.collectionId,
        'type': GatewayTypeToJSON(value.type),
        'config': GatewayConfigToJSON(value.config),
        'tags': value.tags,
    };
}


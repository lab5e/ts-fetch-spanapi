/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.9.6 authoritarian-betty
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
 * @interface CreateGatewayRequest
 */
export interface CreateGatewayRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateGatewayRequest
     */
    name?: string;
    /**
     * 
     * @type {GatewayType}
     * @memberof CreateGatewayRequest
     */
    type?: GatewayType;
    /**
     * 
     * @type {GatewayConfig}
     * @memberof CreateGatewayRequest
     */
    config?: GatewayConfig;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof CreateGatewayRequest
     */
    tags?: { [key: string]: string; };
}

/**
 * Check if a given object implements the CreateGatewayRequest interface.
 */
export function instanceOfCreateGatewayRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreateGatewayRequestFromJSON(json: any): CreateGatewayRequest {
    return CreateGatewayRequestFromJSONTyped(json, false);
}

export function CreateGatewayRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateGatewayRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'type': !exists(json, 'type') ? undefined : GatewayTypeFromJSON(json['type']),
        'config': !exists(json, 'config') ? undefined : GatewayConfigFromJSON(json['config']),
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
    };
}

export function CreateGatewayRequestToJSON(value?: CreateGatewayRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'type': GatewayTypeToJSON(value.type),
        'config': GatewayConfigToJSON(value.config),
        'tags': value.tags,
    };
}


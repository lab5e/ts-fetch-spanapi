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
import type { GatewayConfig } from './GatewayConfig';
import {
    GatewayConfigFromJSON,
    GatewayConfigFromJSONTyped,
    GatewayConfigToJSON,
} from './GatewayConfig';
import type { GatewayStatus } from './GatewayStatus';
import {
    GatewayStatusFromJSON,
    GatewayStatusFromJSONTyped,
    GatewayStatusToJSON,
} from './GatewayStatus';
import type { GatewayType } from './GatewayType';
import {
    GatewayTypeFromJSON,
    GatewayTypeFromJSONTyped,
    GatewayTypeToJSON,
} from './GatewayType';

/**
 * A gateway is a connection between devices and Span
 * @export
 * @interface Gateway
 */
export interface Gateway {
    /**
     * 
     * @type {string}
     * @memberof Gateway
     */
    gatewayId?: string;
    /**
     * 
     * @type {string}
     * @memberof Gateway
     */
    collectionId?: string;
    /**
     * 
     * @type {string}
     * @memberof Gateway
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Gateway
     */
    builtIn?: boolean;
    /**
     * 
     * @type {GatewayType}
     * @memberof Gateway
     */
    type?: GatewayType;
    /**
     * 
     * @type {GatewayConfig}
     * @memberof Gateway
     */
    config?: GatewayConfig;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof Gateway
     */
    tags?: { [key: string]: string; };
    /**
     * 
     * @type {GatewayStatus}
     * @memberof Gateway
     */
    status?: GatewayStatus;
}

/**
 * Check if a given object implements the Gateway interface.
 */
export function instanceOfGateway(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GatewayFromJSON(json: any): Gateway {
    return GatewayFromJSONTyped(json, false);
}

export function GatewayFromJSONTyped(json: any, ignoreDiscriminator: boolean): Gateway {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'gatewayId': !exists(json, 'gatewayId') ? undefined : json['gatewayId'],
        'collectionId': !exists(json, 'collectionId') ? undefined : json['collectionId'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'builtIn': !exists(json, 'builtIn') ? undefined : json['builtIn'],
        'type': !exists(json, 'type') ? undefined : GatewayTypeFromJSON(json['type']),
        'config': !exists(json, 'config') ? undefined : GatewayConfigFromJSON(json['config']),
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'status': !exists(json, 'status') ? undefined : GatewayStatusFromJSON(json['status']),
    };
}

export function GatewayToJSON(value?: Gateway | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'gatewayId': value.gatewayId,
        'collectionId': value.collectionId,
        'name': value.name,
        'builtIn': value.builtIn,
        'type': GatewayTypeToJSON(value.type),
        'config': GatewayConfigToJSON(value.config),
        'tags': value.tags,
        'status': GatewayStatusToJSON(value.status),
    };
}


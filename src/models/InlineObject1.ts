/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.4.1 busy-janay
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    GatewayConfig,
    GatewayConfigFromJSON,
    GatewayConfigFromJSONTyped,
    GatewayConfigToJSON,
    GatewayType,
    GatewayTypeFromJSON,
    GatewayTypeFromJSONTyped,
    GatewayTypeToJSON,
} from './';

/**
 * 
 * @export
 * @interface InlineObject1
 */
export interface InlineObject1 {
    /**
     * 
     * @type {string}
     * @memberof InlineObject1
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineObject1
     */
    collectionId?: string;
    /**
     * 
     * @type {GatewayType}
     * @memberof InlineObject1
     */
    type?: GatewayType;
    /**
     * 
     * @type {GatewayConfig}
     * @memberof InlineObject1
     */
    config?: GatewayConfig;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof InlineObject1
     */
    tags?: { [key: string]: string; };
}

export function InlineObject1FromJSON(json: any): InlineObject1 {
    return InlineObject1FromJSONTyped(json, false);
}

export function InlineObject1FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineObject1 {
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

export function InlineObject1ToJSON(value?: InlineObject1 | null): any {
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



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
 * @interface InlineObject
 */
export interface InlineObject {
    /**
     * 
     * @type {string}
     * @memberof InlineObject
     */
    name?: string;
    /**
     * 
     * @type {GatewayType}
     * @memberof InlineObject
     */
    type?: GatewayType;
    /**
     * 
     * @type {GatewayConfig}
     * @memberof InlineObject
     */
    config?: GatewayConfig;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof InlineObject
     */
    tags?: { [key: string]: string; };
}

export function InlineObjectFromJSON(json: any): InlineObject {
    return InlineObjectFromJSONTyped(json, false);
}

export function InlineObjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineObject {
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

export function InlineObjectToJSON(value?: InlineObject | null): any {
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


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
    OutputConfig,
    OutputConfigFromJSON,
    OutputConfigFromJSONTyped,
    OutputConfigToJSON,
    OutputType,
    OutputTypeFromJSON,
    OutputTypeFromJSONTyped,
    OutputTypeToJSON,
} from './';

/**
 * Output resource. The configuration depends on the kind of output type. There
 * are five outputs: Webhooks, UDP forwarding, IFTTT events, MQTT client and
 * MQTT broker. The MQTT broker output is just used to configure the built-in
 * MQTT broker in Span.
 * @export
 * @interface Output
 */
export interface Output {
    /**
     * 
     * @type {string}
     * @memberof Output
     */
    outputId?: string;
    /**
     * 
     * @type {string}
     * @memberof Output
     */
    collectionId?: string;
    /**
     * 
     * @type {OutputType}
     * @memberof Output
     */
    type?: OutputType;
    /**
     * 
     * @type {OutputConfig}
     * @memberof Output
     */
    config?: OutputConfig;
    /**
     * 
     * @type {boolean}
     * @memberof Output
     */
    enabled?: boolean;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof Output
     */
    tags?: { [key: string]: string; };
}

export function OutputFromJSON(json: any): Output {
    return OutputFromJSONTyped(json, false);
}

export function OutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): Output {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'outputId': !exists(json, 'outputId') ? undefined : json['outputId'],
        'collectionId': !exists(json, 'collectionId') ? undefined : json['collectionId'],
        'type': !exists(json, 'type') ? undefined : OutputTypeFromJSON(json['type']),
        'config': !exists(json, 'config') ? undefined : OutputConfigFromJSON(json['config']),
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
    };
}

export function OutputToJSON(value?: Output | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'outputId': value.outputId,
        'collectionId': value.collectionId,
        'type': OutputTypeToJSON(value.type),
        'config': OutputConfigToJSON(value.config),
        'enabled': value.enabled,
        'tags': value.tags,
    };
}



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
import type { OutputConfig } from './OutputConfig';
import {
    OutputConfigFromJSON,
    OutputConfigFromJSONTyped,
    OutputConfigToJSON,
} from './OutputConfig';
import type { OutputType } from './OutputType';
import {
    OutputTypeFromJSON,
    OutputTypeFromJSONTyped,
    OutputTypeToJSON,
} from './OutputType';

/**
 * Request type when creating new outputs
 * @export
 * @interface CreateOutputRequest
 */
export interface CreateOutputRequest {
    /**
     * 
     * @type {OutputType}
     * @memberof CreateOutputRequest
     */
    type?: OutputType;
    /**
     * 
     * @type {OutputConfig}
     * @memberof CreateOutputRequest
     */
    config?: OutputConfig;
    /**
     * 
     * @type {boolean}
     * @memberof CreateOutputRequest
     */
    enabled?: boolean;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof CreateOutputRequest
     */
    tags?: { [key: string]: string; };
}

/**
 * Check if a given object implements the CreateOutputRequest interface.
 */
export function instanceOfCreateOutputRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreateOutputRequestFromJSON(json: any): CreateOutputRequest {
    return CreateOutputRequestFromJSONTyped(json, false);
}

export function CreateOutputRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateOutputRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': !exists(json, 'type') ? undefined : OutputTypeFromJSON(json['type']),
        'config': !exists(json, 'config') ? undefined : OutputConfigFromJSON(json['config']),
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
    };
}

export function CreateOutputRequestToJSON(value?: CreateOutputRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': OutputTypeToJSON(value.type),
        'config': OutputConfigToJSON(value.config),
        'enabled': value.enabled,
        'tags': value.tags,
    };
}


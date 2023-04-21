/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.5.0 overwrought-dorla
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
 * Request type to update outputs
 * @export
 * @interface UpdateOutputRequest
 */
export interface UpdateOutputRequest {
    /**
     * 
     * @type {string}
     * @memberof UpdateOutputRequest
     */
    collectionId?: string;
    /**
     * 
     * @type {OutputType}
     * @memberof UpdateOutputRequest
     */
    type?: OutputType;
    /**
     * 
     * @type {OutputConfig}
     * @memberof UpdateOutputRequest
     */
    config?: OutputConfig;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateOutputRequest
     */
    enabled?: boolean;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof UpdateOutputRequest
     */
    tags?: { [key: string]: string; };
}

/**
 * Check if a given object implements the UpdateOutputRequest interface.
 */
export function instanceOfUpdateOutputRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpdateOutputRequestFromJSON(json: any): UpdateOutputRequest {
    return UpdateOutputRequestFromJSONTyped(json, false);
}

export function UpdateOutputRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateOutputRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'collectionId': !exists(json, 'collectionId') ? undefined : json['collectionId'],
        'type': !exists(json, 'type') ? undefined : OutputTypeFromJSON(json['type']),
        'config': !exists(json, 'config') ? undefined : OutputConfigFromJSON(json['config']),
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
    };
}

export function UpdateOutputRequestToJSON(value?: UpdateOutputRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'collectionId': value.collectionId,
        'type': OutputTypeToJSON(value.type),
        'config': OutputConfigToJSON(value.config),
        'enabled': value.enabled,
        'tags': value.tags,
    };
}


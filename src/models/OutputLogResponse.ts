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
import type { OutputLogEntry } from './OutputLogEntry';
import {
    OutputLogEntryFromJSON,
    OutputLogEntryFromJSONTyped,
    OutputLogEntryToJSON,
} from './OutputLogEntry';

/**
 * List logs for output
 * @export
 * @interface OutputLogResponse
 */
export interface OutputLogResponse {
    /**
     * 
     * @type {Array<OutputLogEntry>}
     * @memberof OutputLogResponse
     */
    logs?: Array<OutputLogEntry>;
}

/**
 * Check if a given object implements the OutputLogResponse interface.
 */
export function instanceOfOutputLogResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OutputLogResponseFromJSON(json: any): OutputLogResponse {
    return OutputLogResponseFromJSONTyped(json, false);
}

export function OutputLogResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): OutputLogResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'logs': !exists(json, 'logs') ? undefined : ((json['logs'] as Array<any>).map(OutputLogEntryFromJSON)),
    };
}

export function OutputLogResponseToJSON(value?: OutputLogResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'logs': value.logs === undefined ? undefined : ((value.logs as Array<any>).map(OutputLogEntryToJSON)),
    };
}


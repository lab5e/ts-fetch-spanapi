/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.4.2 nonviolent-adelbert
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Log entries for outputs
 * @export
 * @interface OutputLogEntry
 */
export interface OutputLogEntry {
    /**
     * 
     * @type {string}
     * @memberof OutputLogEntry
     */
    time?: string;
    /**
     * 
     * @type {string}
     * @memberof OutputLogEntry
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof OutputLogEntry
     */
    repeated?: number;
}

export function OutputLogEntryFromJSON(json: any): OutputLogEntry {
    return OutputLogEntryFromJSONTyped(json, false);
}

export function OutputLogEntryFromJSONTyped(json: any, ignoreDiscriminator: boolean): OutputLogEntry {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'time': !exists(json, 'time') ? undefined : json['time'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'repeated': !exists(json, 'repeated') ? undefined : json['repeated'],
    };
}

export function OutputLogEntryToJSON(value?: OutputLogEntry | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'time': value.time,
        'message': value.message,
        'repeated': value.repeated,
    };
}



/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.1.10 hulking-betty
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    FieldMask,
    FieldMaskFromJSON,
    FieldMaskFromJSONTyped,
    FieldMaskToJSON,
} from './';

/**
 * 
 * @export
 * @interface SystemInfoResponse
 */
export interface SystemInfoResponse {
    /**
     * 
     * @type {string}
     * @memberof SystemInfoResponse
     */
    version?: string;
    /**
     * 
     * @type {string}
     * @memberof SystemInfoResponse
     */
    buildDate?: string;
    /**
     * 
     * @type {string}
     * @memberof SystemInfoResponse
     */
    releaseName?: string;
    /**
     * 
     * @type {FieldMask}
     * @memberof SystemInfoResponse
     */
    defaultFieldMask?: FieldMask;
    /**
     * 
     * @type {FieldMask}
     * @memberof SystemInfoResponse
     */
    forcedFieldMask?: FieldMask;
}

export function SystemInfoResponseFromJSON(json: any): SystemInfoResponse {
    return SystemInfoResponseFromJSONTyped(json, false);
}

export function SystemInfoResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SystemInfoResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': !exists(json, 'version') ? undefined : json['version'],
        'buildDate': !exists(json, 'buildDate') ? undefined : json['buildDate'],
        'releaseName': !exists(json, 'releaseName') ? undefined : json['releaseName'],
        'defaultFieldMask': !exists(json, 'defaultFieldMask') ? undefined : FieldMaskFromJSON(json['defaultFieldMask']),
        'forcedFieldMask': !exists(json, 'forcedFieldMask') ? undefined : FieldMaskFromJSON(json['forcedFieldMask']),
    };
}

export function SystemInfoResponseToJSON(value?: SystemInfoResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'version': value.version,
        'buildDate': value.buildDate,
        'releaseName': value.releaseName,
        'defaultFieldMask': FieldMaskToJSON(value.defaultFieldMask),
        'forcedFieldMask': FieldMaskToJSON(value.forcedFieldMask),
    };
}



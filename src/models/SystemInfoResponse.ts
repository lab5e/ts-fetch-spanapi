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
/**
 * Response object for system information. This contains system-level
 * information.
 * @export
 * @interface SystemInfoResponse
 */
export interface SystemInfoResponse {
    /**
     * This is the system version
     * @type {string}
     * @memberof SystemInfoResponse
     */
    version?: string;
    /**
     * The build time for this version.
     * @type {string}
     * @memberof SystemInfoResponse
     */
    buildDate?: string;
    /**
     * Human-readable code name for this release. This can be easier to remember
     * than the version number.
     * @type {string}
     * @memberof SystemInfoResponse
     */
    releaseName?: string;
}

/**
 * Check if a given object implements the SystemInfoResponse interface.
 */
export function instanceOfSystemInfoResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
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
    };
}


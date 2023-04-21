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
/**
 * Certificate information
 * @export
 * @interface CertificateInfo
 */
export interface CertificateInfo {
    /**
     * 
     * @type {string}
     * @memberof CertificateInfo
     */
    certificateSerial?: string;
    /**
     * 
     * @type {string}
     * @memberof CertificateInfo
     */
    expires?: string;
}

/**
 * Check if a given object implements the CertificateInfo interface.
 */
export function instanceOfCertificateInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CertificateInfoFromJSON(json: any): CertificateInfo {
    return CertificateInfoFromJSONTyped(json, false);
}

export function CertificateInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CertificateInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'certificateSerial': !exists(json, 'certificateSerial') ? undefined : json['certificateSerial'],
        'expires': !exists(json, 'expires') ? undefined : json['expires'],
    };
}

export function CertificateInfoToJSON(value?: CertificateInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'certificateSerial': value.certificateSerial,
        'expires': value.expires,
    };
}


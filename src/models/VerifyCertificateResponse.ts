/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 5.0.5 contented-jamila
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Response when verifying a certificate. The valid flag is set to true when the
 * certificate is valid. Any errors will be added to the errors array.
 * @export
 * @interface VerifyCertificateResponse
 */
export interface VerifyCertificateResponse {
    /**
     * 
     * @type {boolean}
     * @memberof VerifyCertificateResponse
     */
    valid?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof VerifyCertificateResponse
     */
    errors?: Array<string>;
}

/**
 * Check if a given object implements the VerifyCertificateResponse interface.
 */
export function instanceOfVerifyCertificateResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function VerifyCertificateResponseFromJSON(json: any): VerifyCertificateResponse {
    return VerifyCertificateResponseFromJSONTyped(json, false);
}

export function VerifyCertificateResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): VerifyCertificateResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'valid': !exists(json, 'valid') ? undefined : json['valid'],
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
    };
}

export function VerifyCertificateResponseToJSON(value?: VerifyCertificateResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'valid': value.valid,
        'errors': value.errors,
    };
}


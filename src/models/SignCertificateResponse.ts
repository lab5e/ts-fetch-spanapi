/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.9.6 authoritarian-betty
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Response when signing a certificate
 * @export
 * @interface SignCertificateResponse
 */
export interface SignCertificateResponse {
    /**
     * 
     * @type {string}
     * @memberof SignCertificateResponse
     */
    certificate?: string;
    /**
     * 
     * @type {string}
     * @memberof SignCertificateResponse
     */
    chain?: string;
}

/**
 * Check if a given object implements the SignCertificateResponse interface.
 */
export function instanceOfSignCertificateResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SignCertificateResponseFromJSON(json: any): SignCertificateResponse {
    return SignCertificateResponseFromJSONTyped(json, false);
}

export function SignCertificateResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SignCertificateResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'certificate': !exists(json, 'certificate') ? undefined : json['certificate'],
        'chain': !exists(json, 'chain') ? undefined : json['chain'],
    };
}

export function SignCertificateResponseToJSON(value?: SignCertificateResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'certificate': value.certificate,
        'chain': value.chain,
    };
}


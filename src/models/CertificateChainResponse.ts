/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.2.3 lower-elian
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Response when retrieving a certificate chain
 * @export
 * @interface CertificateChainResponse
 */
export interface CertificateChainResponse {
    /**
     * 
     * @type {string}
     * @memberof CertificateChainResponse
     */
    chain?: string;
}

export function CertificateChainResponseFromJSON(json: any): CertificateChainResponse {
    return CertificateChainResponseFromJSONTyped(json, false);
}

export function CertificateChainResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CertificateChainResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'chain': !exists(json, 'chain') ? undefined : json['chain'],
    };
}

export function CertificateChainResponseToJSON(value?: CertificateChainResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'chain': value.chain,
    };
}



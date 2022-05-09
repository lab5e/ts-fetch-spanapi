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
 * Response when creating a new certificate
 * @export
 * @interface CreateCertificateResponse
 */
export interface CreateCertificateResponse {
    /**
     * 
     * @type {string}
     * @memberof CreateCertificateResponse
     */
    certificate?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateCertificateResponse
     */
    privateKey?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateCertificateResponse
     */
    chain?: string;
}

export function CreateCertificateResponseFromJSON(json: any): CreateCertificateResponse {
    return CreateCertificateResponseFromJSONTyped(json, false);
}

export function CreateCertificateResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateCertificateResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'certificate': !exists(json, 'certificate') ? undefined : json['certificate'],
        'privateKey': !exists(json, 'privateKey') ? undefined : json['privateKey'],
        'chain': !exists(json, 'chain') ? undefined : json['chain'],
    };
}

export function CreateCertificateResponseToJSON(value?: CreateCertificateResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'certificate': value.certificate,
        'privateKey': value.privateKey,
        'chain': value.chain,
    };
}



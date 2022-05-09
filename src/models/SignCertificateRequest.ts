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
 * Request certificate signing
 * @export
 * @interface SignCertificateRequest
 */
export interface SignCertificateRequest {
    /**
     * 
     * @type {string}
     * @memberof SignCertificateRequest
     */
    gatewayId?: string;
    /**
     * 
     * @type {string}
     * @memberof SignCertificateRequest
     */
    deviceId?: string;
    /**
     * 
     * @type {string}
     * @memberof SignCertificateRequest
     */
    csr?: string;
}

export function SignCertificateRequestFromJSON(json: any): SignCertificateRequest {
    return SignCertificateRequestFromJSONTyped(json, false);
}

export function SignCertificateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SignCertificateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'gatewayId': !exists(json, 'gatewayId') ? undefined : json['gatewayId'],
        'deviceId': !exists(json, 'deviceId') ? undefined : json['deviceId'],
        'csr': !exists(json, 'csr') ? undefined : json['csr'],
    };
}

export function SignCertificateRequestToJSON(value?: SignCertificateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'gatewayId': value.gatewayId,
        'deviceId': value.deviceId,
        'csr': value.csr,
    };
}



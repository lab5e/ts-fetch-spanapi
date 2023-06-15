/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.6.0 truthful-holli
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Verify a certificate
 * @export
 * @interface VerifyCertificateRequest
 */
export interface VerifyCertificateRequest {
    /**
     * 
     * @type {string}
     * @memberof VerifyCertificateRequest
     */
    gatewayId?: string;
    /**
     * 
     * @type {string}
     * @memberof VerifyCertificateRequest
     */
    deviceId?: string;
    /**
     * 
     * @type {string}
     * @memberof VerifyCertificateRequest
     */
    certificate?: string;
}

/**
 * Check if a given object implements the VerifyCertificateRequest interface.
 */
export function instanceOfVerifyCertificateRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function VerifyCertificateRequestFromJSON(json: any): VerifyCertificateRequest {
    return VerifyCertificateRequestFromJSONTyped(json, false);
}

export function VerifyCertificateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): VerifyCertificateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'gatewayId': !exists(json, 'gatewayId') ? undefined : json['gatewayId'],
        'deviceId': !exists(json, 'deviceId') ? undefined : json['deviceId'],
        'certificate': !exists(json, 'certificate') ? undefined : json['certificate'],
    };
}

export function VerifyCertificateRequestToJSON(value?: VerifyCertificateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'gatewayId': value.gatewayId,
        'deviceId': value.deviceId,
        'certificate': value.certificate,
    };
}


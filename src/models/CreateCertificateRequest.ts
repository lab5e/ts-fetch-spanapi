/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.6.1 squirming-codi
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Request object to create a new certificate.
 * @export
 * @interface CreateCertificateRequest
 */
export interface CreateCertificateRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateCertificateRequest
     */
    gatewayId?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateCertificateRequest
     */
    deviceId?: string;
}

/**
 * Check if a given object implements the CreateCertificateRequest interface.
 */
export function instanceOfCreateCertificateRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreateCertificateRequestFromJSON(json: any): CreateCertificateRequest {
    return CreateCertificateRequestFromJSONTyped(json, false);
}

export function CreateCertificateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateCertificateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'gatewayId': !exists(json, 'gatewayId') ? undefined : json['gatewayId'],
        'deviceId': !exists(json, 'deviceId') ? undefined : json['deviceId'],
    };
}

export function CreateCertificateRequestToJSON(value?: CreateCertificateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'gatewayId': value.gatewayId,
        'deviceId': value.deviceId,
    };
}


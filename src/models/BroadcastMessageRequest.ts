/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.1.18 disgruntled-jerald
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface BroadcastMessageRequest
 */
export interface BroadcastMessageRequest {
    /**
     * 
     * @type {string}
     * @memberof BroadcastMessageRequest
     */
    collectionId?: string;
    /**
     * 
     * @type {number}
     * @memberof BroadcastMessageRequest
     */
    port?: number;
    /**
     * 
     * @type {string}
     * @memberof BroadcastMessageRequest
     */
    payload?: string;
    /**
     * Valid transports are "udp", "coap", "coap-pull", "udp-pull", "coap-push",
     * "udp-push".
     * "udp" is equivalent to "udp-push" and "coap" is equivalent to "coap-push".
     * Push messages are sent unsolicited to the device wheil pull messages are
     * sent whenever the device wither sends data upstream (for UDP) or does a
     * CoAP request to the CoAP service in span.
     * @type {string}
     * @memberof BroadcastMessageRequest
     */
    transport?: string;
    /**
     * 
     * @type {string}
     * @memberof BroadcastMessageRequest
     */
    coapPath?: string;
}

export function BroadcastMessageRequestFromJSON(json: any): BroadcastMessageRequest {
    return BroadcastMessageRequestFromJSONTyped(json, false);
}

export function BroadcastMessageRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BroadcastMessageRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'collectionId': !exists(json, 'collectionId') ? undefined : json['collectionId'],
        'port': !exists(json, 'port') ? undefined : json['port'],
        'payload': !exists(json, 'payload') ? undefined : json['payload'],
        'transport': !exists(json, 'transport') ? undefined : json['transport'],
        'coapPath': !exists(json, 'coapPath') ? undefined : json['coapPath'],
    };
}

export function BroadcastMessageRequestToJSON(value?: BroadcastMessageRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'collectionId': value.collectionId,
        'port': value.port,
        'payload': value.payload,
        'transport': value.transport,
        'coapPath': value.coapPath,
    };
}



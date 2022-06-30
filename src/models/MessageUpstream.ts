/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.2.4 curable-andres
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    MessageTransport,
    MessageTransportFromJSON,
    MessageTransportFromJSONTyped,
    MessageTransportToJSON,
} from './';

/**
 * This is the messages sent from the device to the backend service
 * @export
 * @interface MessageUpstream
 */
export interface MessageUpstream {
    /**
     * 
     * @type {string}
     * @memberof MessageUpstream
     */
    messageId?: string;
    /**
     * 
     * @type {string}
     * @memberof MessageUpstream
     */
    collectionId?: string;
    /**
     * 
     * @type {string}
     * @memberof MessageUpstream
     */
    deviceId?: string;
    /**
     * 
     * @type {string}
     * @memberof MessageUpstream
     */
    gatewayId?: string;
    /**
     * 
     * @type {MessageTransport}
     * @memberof MessageUpstream
     */
    transport?: MessageTransport;
    /**
     * 
     * @type {string}
     * @memberof MessageUpstream
     */
    received?: string;
    /**
     * 
     * @type {string}
     * @memberof MessageUpstream
     */
    payload?: string;
}

export function MessageUpstreamFromJSON(json: any): MessageUpstream {
    return MessageUpstreamFromJSONTyped(json, false);
}

export function MessageUpstreamFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageUpstream {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'messageId': !exists(json, 'messageId') ? undefined : json['messageId'],
        'collectionId': !exists(json, 'collectionId') ? undefined : json['collectionId'],
        'deviceId': !exists(json, 'deviceId') ? undefined : json['deviceId'],
        'gatewayId': !exists(json, 'gatewayId') ? undefined : json['gatewayId'],
        'transport': !exists(json, 'transport') ? undefined : MessageTransportFromJSON(json['transport']),
        'received': !exists(json, 'received') ? undefined : json['received'],
        'payload': !exists(json, 'payload') ? undefined : json['payload'],
    };
}

export function MessageUpstreamToJSON(value?: MessageUpstream | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'messageId': value.messageId,
        'collectionId': value.collectionId,
        'deviceId': value.deviceId,
        'gatewayId': value.gatewayId,
        'transport': MessageTransportToJSON(value.transport),
        'received': value.received,
        'payload': value.payload,
    };
}



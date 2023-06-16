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
import type { MessageState } from './MessageState';
import {
    MessageStateFromJSON,
    MessageStateFromJSONTyped,
    MessageStateToJSON,
} from './MessageState';
import type { MessageTransport } from './MessageTransport';
import {
    MessageTransportFromJSON,
    MessageTransportFromJSONTyped,
    MessageTransportToJSON,
} from './MessageTransport';

/**
 * Downstream messages are sent from the backend to the devices.
 * @export
 * @interface MessageDownstream
 */
export interface MessageDownstream {
    /**
     * 
     * @type {string}
     * @memberof MessageDownstream
     */
    messageId?: string;
    /**
     * 
     * @type {string}
     * @memberof MessageDownstream
     */
    collectionId?: string;
    /**
     * 
     * @type {string}
     * @memberof MessageDownstream
     */
    deviceId?: string;
    /**
     * 
     * @type {string}
     * @memberof MessageDownstream
     */
    gatewayId?: string;
    /**
     * 
     * @type {string}
     * @memberof MessageDownstream
     */
    createdTime?: string;
    /**
     * 
     * @type {string}
     * @memberof MessageDownstream
     */
    sentTime?: string;
    /**
     * 
     * @type {MessageTransport}
     * @memberof MessageDownstream
     */
    transport?: MessageTransport;
    /**
     * 
     * @type {MessageState}
     * @memberof MessageDownstream
     */
    state?: MessageState;
    /**
     * 
     * @type {string}
     * @memberof MessageDownstream
     */
    payload?: string;
}

/**
 * Check if a given object implements the MessageDownstream interface.
 */
export function instanceOfMessageDownstream(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MessageDownstreamFromJSON(json: any): MessageDownstream {
    return MessageDownstreamFromJSONTyped(json, false);
}

export function MessageDownstreamFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageDownstream {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'messageId': !exists(json, 'messageId') ? undefined : json['messageId'],
        'collectionId': !exists(json, 'collectionId') ? undefined : json['collectionId'],
        'deviceId': !exists(json, 'deviceId') ? undefined : json['deviceId'],
        'gatewayId': !exists(json, 'gatewayId') ? undefined : json['gatewayId'],
        'createdTime': !exists(json, 'createdTime') ? undefined : json['createdTime'],
        'sentTime': !exists(json, 'sentTime') ? undefined : json['sentTime'],
        'transport': !exists(json, 'transport') ? undefined : MessageTransportFromJSON(json['transport']),
        'state': !exists(json, 'state') ? undefined : MessageStateFromJSON(json['state']),
        'payload': !exists(json, 'payload') ? undefined : json['payload'],
    };
}

export function MessageDownstreamToJSON(value?: MessageDownstream | null): any {
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
        'createdTime': value.createdTime,
        'sentTime': value.sentTime,
        'transport': MessageTransportToJSON(value.transport),
        'state': MessageStateToJSON(value.state),
        'payload': value.payload,
    };
}


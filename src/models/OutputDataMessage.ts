/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.7.0 actionable-aryanna
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CoAPMetadata } from './CoAPMetadata';
import {
    CoAPMetadataFromJSON,
    CoAPMetadataFromJSONTyped,
    CoAPMetadataToJSON,
} from './CoAPMetadata';
import type { Device } from './Device';
import {
    DeviceFromJSON,
    DeviceFromJSONTyped,
    DeviceToJSON,
} from './Device';
import type { GatewayMetadata } from './GatewayMetadata';
import {
    GatewayMetadataFromJSON,
    GatewayMetadataFromJSONTyped,
    GatewayMetadataToJSON,
} from './GatewayMetadata';
import type { MQTTMetadata } from './MQTTMetadata';
import {
    MQTTMetadataFromJSON,
    MQTTMetadataFromJSONTyped,
    MQTTMetadataToJSON,
} from './MQTTMetadata';
import type { OutputMessageType } from './OutputMessageType';
import {
    OutputMessageTypeFromJSON,
    OutputMessageTypeFromJSONTyped,
    OutputMessageTypeToJSON,
} from './OutputMessageType';
import type { UDPMetadata } from './UDPMetadata';
import {
    UDPMetadataFromJSON,
    UDPMetadataFromJSONTyped,
    UDPMetadataToJSON,
} from './UDPMetadata';

/**
 * The output data message contains payload plus metadata for a payload received
 * from a device.
 * @export
 * @interface OutputDataMessage
 */
export interface OutputDataMessage {
    /**
     * 
     * @type {OutputMessageType}
     * @memberof OutputDataMessage
     */
    type?: OutputMessageType;
    /**
     * 
     * @type {Device}
     * @memberof OutputDataMessage
     */
    device?: Device;
    /**
     * 
     * @type {string}
     * @memberof OutputDataMessage
     */
    payload?: string;
    /**
     * Received time for message. Value is ms since epoch.
     * @type {string}
     * @memberof OutputDataMessage
     */
    received?: string;
    /**
     * 
     * @type {string}
     * @memberof OutputDataMessage
     */
    transport?: string;
    /**
     * 
     * @type {UDPMetadata}
     * @memberof OutputDataMessage
     */
    udpMetaData?: UDPMetadata;
    /**
     * 
     * @type {CoAPMetadata}
     * @memberof OutputDataMessage
     */
    coapMetaData?: CoAPMetadata;
    /**
     * 
     * @type {string}
     * @memberof OutputDataMessage
     */
    messageId?: string;
    /**
     * 
     * @type {MQTTMetadata}
     * @memberof OutputDataMessage
     */
    mqttMetaData?: MQTTMetadata;
    /**
     * 
     * @type {GatewayMetadata}
     * @memberof OutputDataMessage
     */
    gatewayMetaData?: GatewayMetadata;
    /**
     * 
     * @type {string}
     * @memberof OutputDataMessage
     */
    gatewayId?: string;
}

/**
 * Check if a given object implements the OutputDataMessage interface.
 */
export function instanceOfOutputDataMessage(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OutputDataMessageFromJSON(json: any): OutputDataMessage {
    return OutputDataMessageFromJSONTyped(json, false);
}

export function OutputDataMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): OutputDataMessage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': !exists(json, 'type') ? undefined : OutputMessageTypeFromJSON(json['type']),
        'device': !exists(json, 'device') ? undefined : DeviceFromJSON(json['device']),
        'payload': !exists(json, 'payload') ? undefined : json['payload'],
        'received': !exists(json, 'received') ? undefined : json['received'],
        'transport': !exists(json, 'transport') ? undefined : json['transport'],
        'udpMetaData': !exists(json, 'udpMetaData') ? undefined : UDPMetadataFromJSON(json['udpMetaData']),
        'coapMetaData': !exists(json, 'coapMetaData') ? undefined : CoAPMetadataFromJSON(json['coapMetaData']),
        'messageId': !exists(json, 'messageId') ? undefined : json['messageId'],
        'mqttMetaData': !exists(json, 'mqttMetaData') ? undefined : MQTTMetadataFromJSON(json['mqttMetaData']),
        'gatewayMetaData': !exists(json, 'gatewayMetaData') ? undefined : GatewayMetadataFromJSON(json['gatewayMetaData']),
        'gatewayId': !exists(json, 'gatewayId') ? undefined : json['gatewayId'],
    };
}

export function OutputDataMessageToJSON(value?: OutputDataMessage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': OutputMessageTypeToJSON(value.type),
        'device': DeviceToJSON(value.device),
        'payload': value.payload,
        'received': value.received,
        'transport': value.transport,
        'udpMetaData': UDPMetadataToJSON(value.udpMetaData),
        'coapMetaData': CoAPMetadataToJSON(value.coapMetaData),
        'messageId': value.messageId,
        'mqttMetaData': MQTTMetadataToJSON(value.mqttMetaData),
        'gatewayMetaData': GatewayMetadataToJSON(value.gatewayMetaData),
        'gatewayId': value.gatewayId,
    };
}


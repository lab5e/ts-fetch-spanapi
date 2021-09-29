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
import {
    CoAPMetadata,
    CoAPMetadataFromJSON,
    CoAPMetadataFromJSONTyped,
    CoAPMetadataToJSON,
    Device,
    DeviceFromJSON,
    DeviceFromJSONTyped,
    DeviceToJSON,
    OutputDataMessageOutputMessageType,
    OutputDataMessageOutputMessageTypeFromJSON,
    OutputDataMessageOutputMessageTypeFromJSONTyped,
    OutputDataMessageOutputMessageTypeToJSON,
    UDPMetadata,
    UDPMetadataFromJSON,
    UDPMetadataFromJSONTyped,
    UDPMetadataToJSON,
} from './';

/**
 * The output data message contains payload plus metadata for a payload received
 * from a device.
 * @export
 * @interface OutputDataMessage
 */
export interface OutputDataMessage {
    /**
     * 
     * @type {OutputDataMessageOutputMessageType}
     * @memberof OutputDataMessage
     */
    type?: OutputDataMessageOutputMessageType;
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
}

export function OutputDataMessageFromJSON(json: any): OutputDataMessage {
    return OutputDataMessageFromJSONTyped(json, false);
}

export function OutputDataMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): OutputDataMessage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': !exists(json, 'type') ? undefined : OutputDataMessageOutputMessageTypeFromJSON(json['type']),
        'device': !exists(json, 'device') ? undefined : DeviceFromJSON(json['device']),
        'payload': !exists(json, 'payload') ? undefined : json['payload'],
        'received': !exists(json, 'received') ? undefined : json['received'],
        'transport': !exists(json, 'transport') ? undefined : json['transport'],
        'udpMetaData': !exists(json, 'udpMetaData') ? undefined : UDPMetadataFromJSON(json['udpMetaData']),
        'coapMetaData': !exists(json, 'coapMetaData') ? undefined : CoAPMetadataFromJSON(json['coapMetaData']),
        'messageId': !exists(json, 'messageId') ? undefined : json['messageId'],
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
        
        'type': OutputDataMessageOutputMessageTypeToJSON(value.type),
        'device': DeviceToJSON(value.device),
        'payload': value.payload,
        'received': value.received,
        'transport': value.transport,
        'udpMetaData': UDPMetadataToJSON(value.udpMetaData),
        'coapMetaData': CoAPMetadataToJSON(value.coapMetaData),
        'messageId': value.messageId,
    };
}



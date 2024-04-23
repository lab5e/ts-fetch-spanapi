/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.9.5 spattered-kelvin
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { DeviceConfig } from './DeviceConfig';
import {
    DeviceConfigFromJSON,
    DeviceConfigFromJSONTyped,
    DeviceConfigToJSON,
} from './DeviceConfig';
import type { DeviceMetadata } from './DeviceMetadata';
import {
    DeviceMetadataFromJSON,
    DeviceMetadataFromJSONTyped,
    DeviceMetadataToJSON,
} from './DeviceMetadata';
import type { FirmwareMetadata } from './FirmwareMetadata';
import {
    FirmwareMetadataFromJSON,
    FirmwareMetadataFromJSONTyped,
    FirmwareMetadataToJSON,
} from './FirmwareMetadata';
import type { MessageTransport } from './MessageTransport';
import {
    MessageTransportFromJSON,
    MessageTransportFromJSONTyped,
    MessageTransportToJSON,
} from './MessageTransport';

/**
 * This a device
 * @export
 * @interface Device
 */
export interface Device {
    /**
     * The device ID is assigned by the backend.
     * @type {string}
     * @memberof Device
     */
    deviceId?: string;
    /**
     * 
     * @type {string}
     * @memberof Device
     */
    collectionId?: string;
    /**
     * Tags are metadata for the device that you can set. These are just
     * strings.
     * @type {{ [key: string]: string; }}
     * @memberof Device
     */
    tags?: { [key: string]: string; };
    /**
     * 
     * @type {FirmwareMetadata}
     * @memberof Device
     */
    firmware?: FirmwareMetadata;
    /**
     * 
     * @type {DeviceConfig}
     * @memberof Device
     */
    config?: DeviceConfig;
    /**
     * 
     * @type {DeviceMetadata}
     * @memberof Device
     */
    metadata?: DeviceMetadata;
    /**
     * 
     * @type {string}
     * @memberof Device
     */
    lastGatewayId?: string;
    /**
     * 
     * @type {MessageTransport}
     * @memberof Device
     */
    lastTransport?: MessageTransport;
    /**
     * 
     * @type {string}
     * @memberof Device
     */
    lastReceived?: string;
    /**
     * 
     * @type {string}
     * @memberof Device
     */
    lastPayload?: string;
}

/**
 * Check if a given object implements the Device interface.
 */
export function instanceOfDevice(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DeviceFromJSON(json: any): Device {
    return DeviceFromJSONTyped(json, false);
}

export function DeviceFromJSONTyped(json: any, ignoreDiscriminator: boolean): Device {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'deviceId': !exists(json, 'deviceId') ? undefined : json['deviceId'],
        'collectionId': !exists(json, 'collectionId') ? undefined : json['collectionId'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'firmware': !exists(json, 'firmware') ? undefined : FirmwareMetadataFromJSON(json['firmware']),
        'config': !exists(json, 'config') ? undefined : DeviceConfigFromJSON(json['config']),
        'metadata': !exists(json, 'metadata') ? undefined : DeviceMetadataFromJSON(json['metadata']),
        'lastGatewayId': !exists(json, 'lastGatewayId') ? undefined : json['lastGatewayId'],
        'lastTransport': !exists(json, 'lastTransport') ? undefined : MessageTransportFromJSON(json['lastTransport']),
        'lastReceived': !exists(json, 'lastReceived') ? undefined : json['lastReceived'],
        'lastPayload': !exists(json, 'lastPayload') ? undefined : json['lastPayload'],
    };
}

export function DeviceToJSON(value?: Device | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'deviceId': value.deviceId,
        'collectionId': value.collectionId,
        'tags': value.tags,
        'firmware': FirmwareMetadataToJSON(value.firmware),
        'config': DeviceConfigToJSON(value.config),
        'metadata': DeviceMetadataToJSON(value.metadata),
        'lastGatewayId': value.lastGatewayId,
        'lastTransport': MessageTransportToJSON(value.lastTransport),
        'lastReceived': value.lastReceived,
        'lastPayload': value.lastPayload,
    };
}


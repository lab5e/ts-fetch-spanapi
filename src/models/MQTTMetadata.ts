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
/**
 * MQTT metadata for messages received through one of the MQTT endpoints. This
 * is an EXPERIMENTAL feature.
 * @export
 * @interface MQTTMetadata
 */
export interface MQTTMetadata {
    /**
     * 
     * @type {string}
     * @memberof MQTTMetadata
     */
    topic?: string;
}

/**
 * Check if a given object implements the MQTTMetadata interface.
 */
export function instanceOfMQTTMetadata(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MQTTMetadataFromJSON(json: any): MQTTMetadata {
    return MQTTMetadataFromJSONTyped(json, false);
}

export function MQTTMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): MQTTMetadata {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'topic': !exists(json, 'topic') ? undefined : json['topic'],
    };
}

export function MQTTMetadataToJSON(value?: MQTTMetadata | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'topic': value.topic,
    };
}


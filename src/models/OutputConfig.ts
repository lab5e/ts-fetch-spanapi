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
/**
 * Configuration for outputs.
 * @export
 * @interface OutputConfig
 */
export interface OutputConfig {
    /**
     * URL for the webhook.
     * @type {string}
     * @memberof OutputConfig
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof OutputConfig
     */
    basicAuthUser?: string;
    /**
     * 
     * @type {string}
     * @memberof OutputConfig
     */
    basicAuthPass?: string;
    /**
     * 
     * @type {string}
     * @memberof OutputConfig
     */
    customHeaderName?: string;
    /**
     * 
     * @type {string}
     * @memberof OutputConfig
     */
    customHeaderValue?: string;
    /**
     * 
     * @type {string}
     * @memberof OutputConfig
     */
    host?: string;
    /**
     * 
     * @type {number}
     * @memberof OutputConfig
     */
    port?: number;
    /**
     * 
     * @type {string}
     * @memberof OutputConfig
     */
    key?: string;
    /**
     * 
     * @type {string}
     * @memberof OutputConfig
     */
    eventName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof OutputConfig
     */
    asIsPayload?: boolean;
    /**
     * 
     * @type {string}
     * @memberof OutputConfig
     */
    endpoint?: string;
    /**
     * MQTT configuration: Disable certificate checks. Default is off.
     * @type {boolean}
     * @memberof OutputConfig
     */
    disableCertCheck?: boolean;
    /**
     * 
     * @type {string}
     * @memberof OutputConfig
     */
    username?: string;
    /**
     * 
     * @type {string}
     * @memberof OutputConfig
     */
    password?: string;
    /**
     * 
     * @type {string}
     * @memberof OutputConfig
     */
    clientId?: string;
    /**
     * 
     * @type {string}
     * @memberof OutputConfig
     */
    topicName?: string;
    /**
     * 
     * @type {string}
     * @memberof OutputConfig
     */
    topicTemplate?: string;
    /**
     * 
     * @type {string}
     * @memberof OutputConfig
     */
    payloadFormat?: string;
    /**
     * 
     * @type {string}
     * @memberof OutputConfig
     */
    payloadTemplate?: string;
}

export function OutputConfigFromJSON(json: any): OutputConfig {
    return OutputConfigFromJSONTyped(json, false);
}

export function OutputConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): OutputConfig {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'url': !exists(json, 'url') ? undefined : json['url'],
        'basicAuthUser': !exists(json, 'basicAuthUser') ? undefined : json['basicAuthUser'],
        'basicAuthPass': !exists(json, 'basicAuthPass') ? undefined : json['basicAuthPass'],
        'customHeaderName': !exists(json, 'customHeaderName') ? undefined : json['customHeaderName'],
        'customHeaderValue': !exists(json, 'customHeaderValue') ? undefined : json['customHeaderValue'],
        'host': !exists(json, 'host') ? undefined : json['host'],
        'port': !exists(json, 'port') ? undefined : json['port'],
        'key': !exists(json, 'key') ? undefined : json['key'],
        'eventName': !exists(json, 'eventName') ? undefined : json['eventName'],
        'asIsPayload': !exists(json, 'asIsPayload') ? undefined : json['asIsPayload'],
        'endpoint': !exists(json, 'endpoint') ? undefined : json['endpoint'],
        'disableCertCheck': !exists(json, 'disableCertCheck') ? undefined : json['disableCertCheck'],
        'username': !exists(json, 'username') ? undefined : json['username'],
        'password': !exists(json, 'password') ? undefined : json['password'],
        'clientId': !exists(json, 'clientId') ? undefined : json['clientId'],
        'topicName': !exists(json, 'topicName') ? undefined : json['topicName'],
        'topicTemplate': !exists(json, 'topicTemplate') ? undefined : json['topicTemplate'],
        'payloadFormat': !exists(json, 'payloadFormat') ? undefined : json['payloadFormat'],
        'payloadTemplate': !exists(json, 'payloadTemplate') ? undefined : json['payloadTemplate'],
    };
}

export function OutputConfigToJSON(value?: OutputConfig | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'url': value.url,
        'basicAuthUser': value.basicAuthUser,
        'basicAuthPass': value.basicAuthPass,
        'customHeaderName': value.customHeaderName,
        'customHeaderValue': value.customHeaderValue,
        'host': value.host,
        'port': value.port,
        'key': value.key,
        'eventName': value.eventName,
        'asIsPayload': value.asIsPayload,
        'endpoint': value.endpoint,
        'disableCertCheck': value.disableCertCheck,
        'username': value.username,
        'password': value.password,
        'clientId': value.clientId,
        'topicName': value.topicName,
        'topicTemplate': value.topicTemplate,
        'payloadFormat': value.payloadFormat,
        'payloadTemplate': value.payloadTemplate,
    };
}



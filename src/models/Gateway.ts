/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.3.0 grouchy-aloysius
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * A gateway is a connection between devices and Span
 * @export
 * @interface Gateway
 */
export interface Gateway {
    /**
     * 
     * @type {string}
     * @memberof Gateway
     */
    gatewayId?: string;
    /**
     * 
     * @type {string}
     * @memberof Gateway
     */
    collectionId?: string;
    /**
     * 
     * @type {string}
     * @memberof Gateway
     */
    networkId?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof Gateway
     */
    tags?: { [key: string]: string; };
}

export function GatewayFromJSON(json: any): Gateway {
    return GatewayFromJSONTyped(json, false);
}

export function GatewayFromJSONTyped(json: any, ignoreDiscriminator: boolean): Gateway {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'gatewayId': !exists(json, 'gatewayId') ? undefined : json['gatewayId'],
        'collectionId': !exists(json, 'collectionId') ? undefined : json['collectionId'],
        'networkId': !exists(json, 'networkId') ? undefined : json['networkId'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
    };
}

export function GatewayToJSON(value?: Gateway | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'gatewayId': value.gatewayId,
        'collectionId': value.collectionId,
        'networkId': value.networkId,
        'tags': value.tags,
    };
}


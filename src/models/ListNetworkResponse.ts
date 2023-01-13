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
import {
    Network,
    NetworkFromJSON,
    NetworkFromJSONTyped,
    NetworkToJSON,
} from './';

/**
 * List networks.
 * @export
 * @interface ListNetworkResponse
 */
export interface ListNetworkResponse {
    /**
     * 
     * @type {Array<Network>}
     * @memberof ListNetworkResponse
     */
    networks?: Array<Network>;
}

export function ListNetworkResponseFromJSON(json: any): ListNetworkResponse {
    return ListNetworkResponseFromJSONTyped(json, false);
}

export function ListNetworkResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListNetworkResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'networks': !exists(json, 'networks') ? undefined : ((json['networks'] as Array<any>).map(NetworkFromJSON)),
    };
}

export function ListNetworkResponseToJSON(value?: ListNetworkResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'networks': value.networks === undefined ? undefined : ((value.networks as Array<any>).map(NetworkToJSON)),
    };
}



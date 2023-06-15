/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.6.0 truthful-holli
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Gateway } from './Gateway';
import {
    GatewayFromJSON,
    GatewayFromJSONTyped,
    GatewayToJSON,
} from './Gateway';

/**
 * Response when listing gateways
 * @export
 * @interface ListGatewayResponse
 */
export interface ListGatewayResponse {
    /**
     * 
     * @type {Array<Gateway>}
     * @memberof ListGatewayResponse
     */
    gateways?: Array<Gateway>;
}

/**
 * Check if a given object implements the ListGatewayResponse interface.
 */
export function instanceOfListGatewayResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ListGatewayResponseFromJSON(json: any): ListGatewayResponse {
    return ListGatewayResponseFromJSONTyped(json, false);
}

export function ListGatewayResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListGatewayResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'gateways': !exists(json, 'gateways') ? undefined : ((json['gateways'] as Array<any>).map(GatewayFromJSON)),
    };
}

export function ListGatewayResponseToJSON(value?: ListGatewayResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'gateways': value.gateways === undefined ? undefined : ((value.gateways as Array<any>).map(GatewayToJSON)),
    };
}


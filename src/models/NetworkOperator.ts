/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.4.1 busy-janay
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Operator holds information on the network operator. There might be several
 * operators involved; one operator is running the network your devices are
 * connected to and the SIM card in your device belongs to a different operator.
 * 
 * Deprecated: Replaced by CellularIoTMetadata
 * @export
 * @interface NetworkOperator
 */
export interface NetworkOperator {
    /**
     * The Mobile Country Code for the operator.
     * @type {number}
     * @memberof NetworkOperator
     */
    mcc?: number;
    /**
     * 
     * @type {number}
     * @memberof NetworkOperator
     */
    mnc?: number;
    /**
     * 
     * @type {string}
     * @memberof NetworkOperator
     */
    country?: string;
    /**
     * 
     * @type {string}
     * @memberof NetworkOperator
     */
    network?: string;
    /**
     * 
     * @type {string}
     * @memberof NetworkOperator
     */
    countryCode?: string;
}

export function NetworkOperatorFromJSON(json: any): NetworkOperator {
    return NetworkOperatorFromJSONTyped(json, false);
}

export function NetworkOperatorFromJSONTyped(json: any, ignoreDiscriminator: boolean): NetworkOperator {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mcc': !exists(json, 'mcc') ? undefined : json['mcc'],
        'mnc': !exists(json, 'mnc') ? undefined : json['mnc'],
        'country': !exists(json, 'country') ? undefined : json['country'],
        'network': !exists(json, 'network') ? undefined : json['network'],
        'countryCode': !exists(json, 'countryCode') ? undefined : json['countryCode'],
    };
}

export function NetworkOperatorToJSON(value?: NetworkOperator | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'mcc': value.mcc,
        'mnc': value.mnc,
        'country': value.country,
        'network': value.network,
        'countryCode': value.countryCode,
    };
}



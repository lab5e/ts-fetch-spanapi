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
 * Network is the network devices runs on. They communicate via gateway to Span.
 * @export
 * @interface Network
 */
export interface Network {
    /**
     * 
     * @type {string}
     * @memberof Network
     */
    networkId?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof Network
     */
    tags?: { [key: string]: string; };
}

export function NetworkFromJSON(json: any): Network {
    return NetworkFromJSONTyped(json, false);
}

export function NetworkFromJSONTyped(json: any, ignoreDiscriminator: boolean): Network {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'networkId': !exists(json, 'networkId') ? undefined : json['networkId'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
    };
}

export function NetworkToJSON(value?: Network | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'networkId': value.networkId,
        'tags': value.tags,
    };
}



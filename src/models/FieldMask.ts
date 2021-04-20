/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.1.8 adopted-kali
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface FieldMask
 */
export interface FieldMask {
    /**
     * 
     * @type {boolean}
     * @memberof FieldMask
     */
    imsi?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FieldMask
     */
    imei?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FieldMask
     */
    msisdn?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FieldMask
     */
    location?: boolean;
}

export function FieldMaskFromJSON(json: any): FieldMask {
    return FieldMaskFromJSONTyped(json, false);
}

export function FieldMaskFromJSONTyped(json: any, ignoreDiscriminator: boolean): FieldMask {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'imsi': !exists(json, 'imsi') ? undefined : json['imsi'],
        'imei': !exists(json, 'imei') ? undefined : json['imei'],
        'msisdn': !exists(json, 'msisdn') ? undefined : json['msisdn'],
        'location': !exists(json, 'location') ? undefined : json['location'],
    };
}

export function FieldMaskToJSON(value?: FieldMask | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'imsi': value.imsi,
        'imei': value.imei,
        'msisdn': value.msisdn,
        'location': value.location,
    };
}



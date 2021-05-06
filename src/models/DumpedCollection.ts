/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.1.14 oversensitive-deante
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    Collection,
    CollectionFromJSON,
    CollectionFromJSONTyped,
    CollectionToJSON,
    DumpedDevice,
    DumpedDeviceFromJSON,
    DumpedDeviceFromJSONTyped,
    DumpedDeviceToJSON,
    Output,
    OutputFromJSON,
    OutputFromJSONTyped,
    OutputToJSON,
} from './';

/**
 * 
 * @export
 * @interface DumpedCollection
 */
export interface DumpedCollection {
    /**
     * 
     * @type {Collection}
     * @memberof DumpedCollection
     */
    collection?: Collection;
    /**
     * 
     * @type {Array<DumpedDevice>}
     * @memberof DumpedCollection
     */
    devices?: Array<DumpedDevice>;
    /**
     * 
     * @type {Array<Output>}
     * @memberof DumpedCollection
     */
    outputs?: Array<Output>;
}

export function DumpedCollectionFromJSON(json: any): DumpedCollection {
    return DumpedCollectionFromJSONTyped(json, false);
}

export function DumpedCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): DumpedCollection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'collection': !exists(json, 'collection') ? undefined : CollectionFromJSON(json['collection']),
        'devices': !exists(json, 'devices') ? undefined : ((json['devices'] as Array<any>).map(DumpedDeviceFromJSON)),
        'outputs': !exists(json, 'outputs') ? undefined : ((json['outputs'] as Array<any>).map(OutputFromJSON)),
    };
}

export function DumpedCollectionToJSON(value?: DumpedCollection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'collection': CollectionToJSON(value.collection),
        'devices': value.devices === undefined ? undefined : ((value.devices as Array<any>).map(DumpedDeviceToJSON)),
        'outputs': value.outputs === undefined ? undefined : ((value.outputs as Array<any>).map(OutputToJSON)),
    };
}



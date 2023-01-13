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

/**
 * 
 * @export
 * @enum {string}
 */
export enum OutputMessageType {
    Unknown = 'unknown',
    Keepalive = 'keepalive',
    Data = 'data'
}

export function OutputMessageTypeFromJSON(json: any): OutputMessageType {
    return OutputMessageTypeFromJSONTyped(json, false);
}

export function OutputMessageTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): OutputMessageType {
    return json as OutputMessageType;
}

export function OutputMessageTypeToJSON(value?: OutputMessageType | null): any {
    return value as any;
}

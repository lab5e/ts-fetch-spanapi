/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.1.13 interdependent-karson
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
export enum OutputDataMessageOutputMessageType {
    Unknown = 'unknown',
    Keepalive = 'keepalive',
    Data = 'data'
}

export function OutputDataMessageOutputMessageTypeFromJSON(json: any): OutputDataMessageOutputMessageType {
    return OutputDataMessageOutputMessageTypeFromJSONTyped(json, false);
}

export function OutputDataMessageOutputMessageTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): OutputDataMessageOutputMessageType {
    return json as OutputDataMessageOutputMessageType;
}

export function OutputDataMessageOutputMessageTypeToJSON(value?: OutputDataMessageOutputMessageType | null): any {
    return value as any;
}


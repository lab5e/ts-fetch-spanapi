/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.1.11 evasive-governor
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
export enum OutputType {
    Undefined = 'undefined',
    Webhook = 'webhook',
    Udp = 'udp',
    Mqtt = 'mqtt',
    Ifttt = 'ifttt'
}

export function OutputTypeFromJSON(json: any): OutputType {
    return OutputTypeFromJSONTyped(json, false);
}

export function OutputTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): OutputType {
    return json as OutputType;
}

export function OutputTypeToJSON(value?: OutputType | null): any {
    return value as any;
}


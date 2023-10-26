/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.8.0 indecipherable-ferman
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * 
 * @export
 */
export const GatewayType = {
    Unknown: 'unknown',
    Ciot: 'ciot',
    Inet: 'inet',
    Lora: 'lora',
    Openthread: 'openthread',
    Zigbee: 'zigbee',
    Matter: 'matter',
    Custom: 'custom'
} as const;
export type GatewayType = typeof GatewayType[keyof typeof GatewayType];


export function GatewayTypeFromJSON(json: any): GatewayType {
    return GatewayTypeFromJSONTyped(json, false);
}

export function GatewayTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): GatewayType {
    return json as GatewayType;
}

export function GatewayTypeToJSON(value?: GatewayType | null): any {
    return value as any;
}


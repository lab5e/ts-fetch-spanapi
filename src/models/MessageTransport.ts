/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 5.0.5 contented-jamila
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * The message transport can be UDP or CoAP.
 * @export
 */
export const MessageTransport = {
    Unspecified: 'unspecified',
    Udp: 'udp',
    Coap: 'coap',
    Mqtt: 'mqtt',
    Gateway: 'gateway',
    Coaps: 'coaps',
    Dtls: 'dtls'
} as const;
export type MessageTransport = typeof MessageTransport[keyof typeof MessageTransport];


export function MessageTransportFromJSON(json: any): MessageTransport {
    return MessageTransportFromJSONTyped(json, false);
}

export function MessageTransportFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageTransport {
    return json as MessageTransport;
}

export function MessageTransportToJSON(value?: MessageTransport | null): any {
    return value as any;
}


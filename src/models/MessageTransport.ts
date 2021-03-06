/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.2.4 curable-andres
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * The message transport can be UDP or CoAP.
 * @export
 * @enum {string}
 */
export enum MessageTransport {
    Unspecified = 'unspecified',
    Udp = 'udp',
    Coap = 'coap'
}

export function MessageTransportFromJSON(json: any): MessageTransport {
    return MessageTransportFromJSONTyped(json, false);
}

export function MessageTransportFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageTransport {
    return json as MessageTransport;
}

export function MessageTransportToJSON(value?: MessageTransport | null): any {
    return value as any;
}


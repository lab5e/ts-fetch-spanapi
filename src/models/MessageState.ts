/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.6.0 truthful-holli
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
export const MessageState = {
    Unspecified: 'unspecified',
    Pending: 'pending',
    Sent: 'sent',
    Failed: 'failed'
} as const;
export type MessageState = typeof MessageState[keyof typeof MessageState];


export function MessageStateFromJSON(json: any): MessageState {
    return MessageStateFromJSONTyped(json, false);
}

export function MessageStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageState {
    return json as MessageState;
}

export function MessageStateToJSON(value?: MessageState | null): any {
    return value as any;
}


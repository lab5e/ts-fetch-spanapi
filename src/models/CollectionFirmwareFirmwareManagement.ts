/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.1.7 only-deshaun
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * The firmware management settings for a collection can either be "disabled",
 * ie there is no firmware management for this collection, "collection";
 * devices are managed through the settings on the collection or "device"
 * where each device is configured individual.
 * @export
 * @enum {string}
 */
export enum CollectionFirmwareFirmwareManagement {
    Unspecified = 'unspecified',
    Disabled = 'disabled',
    Collection = 'collection',
    Device = 'device'
}

export function CollectionFirmwareFirmwareManagementFromJSON(json: any): CollectionFirmwareFirmwareManagement {
    return CollectionFirmwareFirmwareManagementFromJSONTyped(json, false);
}

export function CollectionFirmwareFirmwareManagementFromJSONTyped(json: any, ignoreDiscriminator: boolean): CollectionFirmwareFirmwareManagement {
    return json as CollectionFirmwareFirmwareManagement;
}

export function CollectionFirmwareFirmwareManagementToJSON(value?: CollectionFirmwareFirmwareManagement | null): any {
    return value as any;
}


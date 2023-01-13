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
 * The firmware management settings for a collection can either be "disabled",
 * ie there is no firmware management for this collection, "collection";
 * devices are managed through the settings on the collection or "device"
 * where each device is configured individual.
 * @export
 * @enum {string}
 */
export enum FirmwareManagement {
    Unspecified = 'unspecified',
    Disabled = 'disabled',
    Collection = 'collection',
    Device = 'device'
}

export function FirmwareManagementFromJSON(json: any): FirmwareManagement {
    return FirmwareManagementFromJSONTyped(json, false);
}

export function FirmwareManagementFromJSONTyped(json: any, ignoreDiscriminator: boolean): FirmwareManagement {
    return json as FirmwareManagement;
}

export function FirmwareManagementToJSON(value?: FirmwareManagement | null): any {
    return value as any;
}

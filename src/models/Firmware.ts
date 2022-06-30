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

import { exists, mapValues } from '../runtime';
/**
 * Firmware images aren't served back out through the API, only the metadata.
 * @export
 * @interface Firmware
 */
export interface Firmware {
    /**
     * 
     * @type {string}
     * @memberof Firmware
     */
    imageId?: string;
    /**
     * Make sure that the firmware image reports this version. If the version
     * reported by this image is different the FOTA process won't be reported
     * as successful since the device will report a version different from this.
     * @type {string}
     * @memberof Firmware
     */
    version?: string;
    /**
     * This is just for internal house keeping, making it potentially easier to
     * identify the firmware image.
     * @type {string}
     * @memberof Firmware
     */
    filename?: string;
    /**
     * To ensure each image is unique the SHA-256 hash for all images in a
     * collection must be unqique
     * @type {string}
     * @memberof Firmware
     */
    sha256?: string;
    /**
     * 
     * @type {number}
     * @memberof Firmware
     */
    length?: number;
    /**
     * Collection ID for the collection owning the firmware image.
     * @type {string}
     * @memberof Firmware
     */
    collectionId?: string;
    /**
     * 
     * @type {string}
     * @memberof Firmware
     */
    created?: string;
    /**
     * Tags for firmware image.
     * @type {{ [key: string]: string; }}
     * @memberof Firmware
     */
    tags?: { [key: string]: string; };
}

export function FirmwareFromJSON(json: any): Firmware {
    return FirmwareFromJSONTyped(json, false);
}

export function FirmwareFromJSONTyped(json: any, ignoreDiscriminator: boolean): Firmware {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'imageId': !exists(json, 'imageId') ? undefined : json['imageId'],
        'version': !exists(json, 'version') ? undefined : json['version'],
        'filename': !exists(json, 'filename') ? undefined : json['filename'],
        'sha256': !exists(json, 'sha256') ? undefined : json['sha256'],
        'length': !exists(json, 'length') ? undefined : json['length'],
        'collectionId': !exists(json, 'collectionId') ? undefined : json['collectionId'],
        'created': !exists(json, 'created') ? undefined : json['created'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
    };
}

export function FirmwareToJSON(value?: Firmware | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'imageId': value.imageId,
        'version': value.version,
        'filename': value.filename,
        'sha256': value.sha256,
        'length': value.length,
        'collectionId': value.collectionId,
        'created': value.created,
        'tags': value.tags,
    };
}



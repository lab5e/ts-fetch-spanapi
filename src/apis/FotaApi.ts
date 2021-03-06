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


import * as runtime from '../runtime';
import {
    ClearFirmwareErrorResponse,
    ClearFirmwareErrorResponseFromJSON,
    ClearFirmwareErrorResponseToJSON,
    CreateFirmwareRequest,
    CreateFirmwareRequestFromJSON,
    CreateFirmwareRequestToJSON,
    Firmware,
    FirmwareFromJSON,
    FirmwareToJSON,
    FirmwareUsageResponse,
    FirmwareUsageResponseFromJSON,
    FirmwareUsageResponseToJSON,
    ListFirmwareResponse,
    ListFirmwareResponseFromJSON,
    ListFirmwareResponseToJSON,
    Status,
    StatusFromJSON,
    StatusToJSON,
    UpdateFirmwareRequest,
    UpdateFirmwareRequestFromJSON,
    UpdateFirmwareRequestToJSON,
} from '../models';

export interface ClearFirmwareErrorRequest {
    collectionId: string;
    deviceId: string;
}

export interface CreateFirmwareOperationRequest {
    collectionId: string;
    body: CreateFirmwareRequest;
}

export interface DeleteFirmwareRequest {
    collectionId: string;
    imageId: string;
}

export interface FirmwareUsageRequest {
    collectionId: string;
    imageId: string;
}

export interface ListFirmwareRequest {
    collectionId: string;
}

export interface RetrieveFirmwareRequest {
    collectionId: string;
    imageId: string;
}

export interface UpdateFirmwareOperationRequest {
    existingCollectionId: string;
    imageId: string;
    body: UpdateFirmwareRequest;
}

/**
 * 
 */
export class FotaApi extends runtime.BaseAPI {

    /**
     * Clear FOTA error
     */
    async clearFirmwareErrorRaw(requestParameters: ClearFirmwareErrorRequest): Promise<runtime.ApiResponse<ClearFirmwareErrorResponse>> {
        if (requestParameters.collectionId === null || requestParameters.collectionId === undefined) {
            throw new runtime.RequiredError('collectionId','Required parameter requestParameters.collectionId was null or undefined when calling clearFirmwareError.');
        }

        if (requestParameters.deviceId === null || requestParameters.deviceId === undefined) {
            throw new runtime.RequiredError('deviceId','Required parameter requestParameters.deviceId was null or undefined when calling clearFirmwareError.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Token"] = this.configuration.apiKey("X-API-Token"); // APIToken authentication
        }

        const response = await this.request({
            path: `/span/collections/{collectionId}/devices/{deviceId}/fwerror`.replace(`{${"collectionId"}}`, encodeURIComponent(String(requestParameters.collectionId))).replace(`{${"deviceId"}}`, encodeURIComponent(String(requestParameters.deviceId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ClearFirmwareErrorResponseFromJSON(jsonValue));
    }

    /**
     * Clear FOTA error
     */
    async clearFirmwareError(requestParameters: ClearFirmwareErrorRequest): Promise<ClearFirmwareErrorResponse> {
        const response = await this.clearFirmwareErrorRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create firmware
     */
    async createFirmwareRaw(requestParameters: CreateFirmwareOperationRequest): Promise<runtime.ApiResponse<Firmware>> {
        if (requestParameters.collectionId === null || requestParameters.collectionId === undefined) {
            throw new runtime.RequiredError('collectionId','Required parameter requestParameters.collectionId was null or undefined when calling createFirmware.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createFirmware.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Token"] = this.configuration.apiKey("X-API-Token"); // APIToken authentication
        }

        const response = await this.request({
            path: `/span/collections/{collectionId}/firmware`.replace(`{${"collectionId"}}`, encodeURIComponent(String(requestParameters.collectionId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateFirmwareRequestToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => FirmwareFromJSON(jsonValue));
    }

    /**
     * Create firmware
     */
    async createFirmware(requestParameters: CreateFirmwareOperationRequest): Promise<Firmware> {
        const response = await this.createFirmwareRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete firmware
     */
    async deleteFirmwareRaw(requestParameters: DeleteFirmwareRequest): Promise<runtime.ApiResponse<Firmware>> {
        if (requestParameters.collectionId === null || requestParameters.collectionId === undefined) {
            throw new runtime.RequiredError('collectionId','Required parameter requestParameters.collectionId was null or undefined when calling deleteFirmware.');
        }

        if (requestParameters.imageId === null || requestParameters.imageId === undefined) {
            throw new runtime.RequiredError('imageId','Required parameter requestParameters.imageId was null or undefined when calling deleteFirmware.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Token"] = this.configuration.apiKey("X-API-Token"); // APIToken authentication
        }

        const response = await this.request({
            path: `/span/collections/{collectionId}/firmware/{imageId}`.replace(`{${"collectionId"}}`, encodeURIComponent(String(requestParameters.collectionId))).replace(`{${"imageId"}}`, encodeURIComponent(String(requestParameters.imageId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => FirmwareFromJSON(jsonValue));
    }

    /**
     * Delete firmware
     */
    async deleteFirmware(requestParameters: DeleteFirmwareRequest): Promise<Firmware> {
        const response = await this.deleteFirmwareRaw(requestParameters);
        return await response.value();
    }

    /**
     * Firmware usage
     */
    async firmwareUsageRaw(requestParameters: FirmwareUsageRequest): Promise<runtime.ApiResponse<FirmwareUsageResponse>> {
        if (requestParameters.collectionId === null || requestParameters.collectionId === undefined) {
            throw new runtime.RequiredError('collectionId','Required parameter requestParameters.collectionId was null or undefined when calling firmwareUsage.');
        }

        if (requestParameters.imageId === null || requestParameters.imageId === undefined) {
            throw new runtime.RequiredError('imageId','Required parameter requestParameters.imageId was null or undefined when calling firmwareUsage.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Token"] = this.configuration.apiKey("X-API-Token"); // APIToken authentication
        }

        const response = await this.request({
            path: `/span/collections/{collectionId}/firmware/{imageId}/usage`.replace(`{${"collectionId"}}`, encodeURIComponent(String(requestParameters.collectionId))).replace(`{${"imageId"}}`, encodeURIComponent(String(requestParameters.imageId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => FirmwareUsageResponseFromJSON(jsonValue));
    }

    /**
     * Firmware usage
     */
    async firmwareUsage(requestParameters: FirmwareUsageRequest): Promise<FirmwareUsageResponse> {
        const response = await this.firmwareUsageRaw(requestParameters);
        return await response.value();
    }

    /**
     * List firmware
     */
    async listFirmwareRaw(requestParameters: ListFirmwareRequest): Promise<runtime.ApiResponse<ListFirmwareResponse>> {
        if (requestParameters.collectionId === null || requestParameters.collectionId === undefined) {
            throw new runtime.RequiredError('collectionId','Required parameter requestParameters.collectionId was null or undefined when calling listFirmware.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Token"] = this.configuration.apiKey("X-API-Token"); // APIToken authentication
        }

        const response = await this.request({
            path: `/span/collections/{collectionId}/firmware`.replace(`{${"collectionId"}}`, encodeURIComponent(String(requestParameters.collectionId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ListFirmwareResponseFromJSON(jsonValue));
    }

    /**
     * List firmware
     */
    async listFirmware(requestParameters: ListFirmwareRequest): Promise<ListFirmwareResponse> {
        const response = await this.listFirmwareRaw(requestParameters);
        return await response.value();
    }

    /**
     * Retrieve firmware
     */
    async retrieveFirmwareRaw(requestParameters: RetrieveFirmwareRequest): Promise<runtime.ApiResponse<Firmware>> {
        if (requestParameters.collectionId === null || requestParameters.collectionId === undefined) {
            throw new runtime.RequiredError('collectionId','Required parameter requestParameters.collectionId was null or undefined when calling retrieveFirmware.');
        }

        if (requestParameters.imageId === null || requestParameters.imageId === undefined) {
            throw new runtime.RequiredError('imageId','Required parameter requestParameters.imageId was null or undefined when calling retrieveFirmware.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Token"] = this.configuration.apiKey("X-API-Token"); // APIToken authentication
        }

        const response = await this.request({
            path: `/span/collections/{collectionId}/firmware/{imageId}`.replace(`{${"collectionId"}}`, encodeURIComponent(String(requestParameters.collectionId))).replace(`{${"imageId"}}`, encodeURIComponent(String(requestParameters.imageId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => FirmwareFromJSON(jsonValue));
    }

    /**
     * Retrieve firmware
     */
    async retrieveFirmware(requestParameters: RetrieveFirmwareRequest): Promise<Firmware> {
        const response = await this.retrieveFirmwareRaw(requestParameters);
        return await response.value();
    }

    /**
     * Only the version and tags fields can be updated. The other fields will be ignored.
     * Update firmware
     */
    async updateFirmwareRaw(requestParameters: UpdateFirmwareOperationRequest): Promise<runtime.ApiResponse<Firmware>> {
        if (requestParameters.existingCollectionId === null || requestParameters.existingCollectionId === undefined) {
            throw new runtime.RequiredError('existingCollectionId','Required parameter requestParameters.existingCollectionId was null or undefined when calling updateFirmware.');
        }

        if (requestParameters.imageId === null || requestParameters.imageId === undefined) {
            throw new runtime.RequiredError('imageId','Required parameter requestParameters.imageId was null or undefined when calling updateFirmware.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling updateFirmware.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Token"] = this.configuration.apiKey("X-API-Token"); // APIToken authentication
        }

        const response = await this.request({
            path: `/span/collections/{existingCollectionId}/firmware/{imageId}`.replace(`{${"existingCollectionId"}}`, encodeURIComponent(String(requestParameters.existingCollectionId))).replace(`{${"imageId"}}`, encodeURIComponent(String(requestParameters.imageId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateFirmwareRequestToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => FirmwareFromJSON(jsonValue));
    }

    /**
     * Only the version and tags fields can be updated. The other fields will be ignored.
     * Update firmware
     */
    async updateFirmware(requestParameters: UpdateFirmwareOperationRequest): Promise<Firmware> {
        const response = await this.updateFirmwareRaw(requestParameters);
        return await response.value();
    }

}

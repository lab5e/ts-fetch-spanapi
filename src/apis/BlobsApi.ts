/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.6.1 squirming-codi
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ListBlobResponse,
  Status,
} from '../models';
import {
    ListBlobResponseFromJSON,
    ListBlobResponseToJSON,
    StatusFromJSON,
    StatusToJSON,
} from '../models';

export interface DeleteBlobRequest {
    collectionId: string;
    blobId: string;
}

export interface ListBlobsRequest {
    collectionId: string;
    limit?: number;
}

/**
 * 
 */
export class BlobsApi extends runtime.BaseAPI {

    /**
     * Remove a blob stored on the collection.
     * Remove a blob stored on a collection
     */
    async deleteBlobRaw(requestParameters: DeleteBlobRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.collectionId === null || requestParameters.collectionId === undefined) {
            throw new runtime.RequiredError('collectionId','Required parameter requestParameters.collectionId was null or undefined when calling deleteBlob.');
        }

        if (requestParameters.blobId === null || requestParameters.blobId === undefined) {
            throw new runtime.RequiredError('blobId','Required parameter requestParameters.blobId was null or undefined when calling deleteBlob.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Token"] = this.configuration.apiKey("X-API-Token"); // APIToken authentication
        }

        const response = await this.request({
            path: `/span/collections/{collectionId}/blobs/{blobId}`.replace(`{${"collectionId"}}`, encodeURIComponent(String(requestParameters.collectionId))).replace(`{${"blobId"}}`, encodeURIComponent(String(requestParameters.blobId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Remove a blob stored on the collection.
     * Remove a blob stored on a collection
     */
    async deleteBlob(requestParameters: DeleteBlobRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.deleteBlobRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a list of all the blobs stored on this collection. Blobs are uploaded by the devices through one of the blob endpoints.
     * List the blobs for a collection
     */
    async listBlobsRaw(requestParameters: ListBlobsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListBlobResponse>> {
        if (requestParameters.collectionId === null || requestParameters.collectionId === undefined) {
            throw new runtime.RequiredError('collectionId','Required parameter requestParameters.collectionId was null or undefined when calling listBlobs.');
        }

        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Token"] = this.configuration.apiKey("X-API-Token"); // APIToken authentication
        }

        const response = await this.request({
            path: `/span/collections/{collectionId}/blobs`.replace(`{${"collectionId"}}`, encodeURIComponent(String(requestParameters.collectionId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ListBlobResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve a list of all the blobs stored on this collection. Blobs are uploaded by the devices through one of the blob endpoints.
     * List the blobs for a collection
     */
    async listBlobs(requestParameters: ListBlobsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListBlobResponse> {
        const response = await this.listBlobsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

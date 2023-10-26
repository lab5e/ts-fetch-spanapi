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


import * as runtime from '../runtime';
import type {
  Collection,
  CollectionStats,
  CreateCollectionRequest,
  ListCollectionResponse,
  ListDataResponse,
  Status,
  UpdateCollectionRequest,
} from '../models';
import {
    CollectionFromJSON,
    CollectionToJSON,
    CollectionStatsFromJSON,
    CollectionStatsToJSON,
    CreateCollectionRequestFromJSON,
    CreateCollectionRequestToJSON,
    ListCollectionResponseFromJSON,
    ListCollectionResponseToJSON,
    ListDataResponseFromJSON,
    ListDataResponseToJSON,
    StatusFromJSON,
    StatusToJSON,
    UpdateCollectionRequestFromJSON,
    UpdateCollectionRequestToJSON,
} from '../models';

export interface CreateCollectionOperationRequest {
    body: CreateCollectionRequest;
}

export interface DeleteCollectionRequest {
    collectionId: string;
}

export interface ListCollectionDataRequest {
    collectionId: string;
    limit?: number;
    start?: string;
    end?: string;
    offset?: string;
}

export interface RetrieveCollectionRequest {
    collectionId: string;
    upstream?: boolean;
    downstream?: boolean;
}

export interface RetrieveCollectionStatsRequest {
    collectionId: string;
}

export interface UpdateCollectionOperationRequest {
    collectionId: string;
    body: UpdateCollectionRequest;
}

/**
 * 
 */
export class CollectionsApi extends runtime.BaseAPI {

    /**
     * Create a new collection
     * Create collection
     */
    async createCollectionRaw(requestParameters: CreateCollectionOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Collection>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createCollection.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Token"] = this.configuration.apiKey("X-API-Token"); // APIToken authentication
        }

        const response = await this.request({
            path: `/span/collections`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateCollectionRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CollectionFromJSON(jsonValue));
    }

    /**
     * Create a new collection
     * Create collection
     */
    async createCollection(requestParameters: CreateCollectionOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Collection> {
        const response = await this.createCollectionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Remove the collection. Devices, firmware images, outputs and all other related resources must be removed from the collection before it can be deleted.
     * Delete collection
     */
    async deleteCollectionRaw(requestParameters: DeleteCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Collection>> {
        if (requestParameters.collectionId === null || requestParameters.collectionId === undefined) {
            throw new runtime.RequiredError('collectionId','Required parameter requestParameters.collectionId was null or undefined when calling deleteCollection.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Token"] = this.configuration.apiKey("X-API-Token"); // APIToken authentication
        }

        const response = await this.request({
            path: `/span/collections/{collectionId}`.replace(`{${"collectionId"}}`, encodeURIComponent(String(requestParameters.collectionId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CollectionFromJSON(jsonValue));
    }

    /**
     * Remove the collection. Devices, firmware images, outputs and all other related resources must be removed from the collection before it can be deleted.
     * Delete collection
     */
    async deleteCollection(requestParameters: DeleteCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Collection> {
        const response = await this.deleteCollectionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve data sent by the devices in the collection. The maximum number of data points is 100.
     * Retrieve data from devices
     */
    async listCollectionDataRaw(requestParameters: ListCollectionDataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListDataResponse>> {
        if (requestParameters.collectionId === null || requestParameters.collectionId === undefined) {
            throw new runtime.RequiredError('collectionId','Required parameter requestParameters.collectionId was null or undefined when calling listCollectionData.');
        }

        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.start !== undefined) {
            queryParameters['start'] = requestParameters.start;
        }

        if (requestParameters.end !== undefined) {
            queryParameters['end'] = requestParameters.end;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Token"] = this.configuration.apiKey("X-API-Token"); // APIToken authentication
        }

        const response = await this.request({
            path: `/span/collections/{collectionId}/data`.replace(`{${"collectionId"}}`, encodeURIComponent(String(requestParameters.collectionId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ListDataResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve data sent by the devices in the collection. The maximum number of data points is 100.
     * Retrieve data from devices
     */
    async listCollectionData(requestParameters: ListCollectionDataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListDataResponse> {
        const response = await this.listCollectionDataRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Lists all the collections that one of your teams owns. The collections returned includes only the data on the collection and not the summary information
     * List collections
     */
    async listCollectionsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListCollectionResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Token"] = this.configuration.apiKey("X-API-Token"); // APIToken authentication
        }

        const response = await this.request({
            path: `/span/collections`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ListCollectionResponseFromJSON(jsonValue));
    }

    /**
     * Lists all the collections that one of your teams owns. The collections returned includes only the data on the collection and not the summary information
     * List collections
     */
    async listCollections(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListCollectionResponse> {
        const response = await this.listCollectionsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Retrieve collection information. This includes a list of the most recent messages in the inbox. The upstream and downstream parameters are optional and if set to true will include the timestamps for up to 100 messages up- and downstream for the last hour.
     * Retrieve collection
     */
    async retrieveCollectionRaw(requestParameters: RetrieveCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Collection>> {
        if (requestParameters.collectionId === null || requestParameters.collectionId === undefined) {
            throw new runtime.RequiredError('collectionId','Required parameter requestParameters.collectionId was null or undefined when calling retrieveCollection.');
        }

        const queryParameters: any = {};

        if (requestParameters.upstream !== undefined) {
            queryParameters['upstream'] = requestParameters.upstream;
        }

        if (requestParameters.downstream !== undefined) {
            queryParameters['downstream'] = requestParameters.downstream;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Token"] = this.configuration.apiKey("X-API-Token"); // APIToken authentication
        }

        const response = await this.request({
            path: `/span/collections/{collectionId}`.replace(`{${"collectionId"}}`, encodeURIComponent(String(requestParameters.collectionId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CollectionFromJSON(jsonValue));
    }

    /**
     * Retrieve collection information. This includes a list of the most recent messages in the inbox. The upstream and downstream parameters are optional and if set to true will include the timestamps for up to 100 messages up- and downstream for the last hour.
     * Retrieve collection
     */
    async retrieveCollection(requestParameters: RetrieveCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Collection> {
        const response = await this.retrieveCollectionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve statistics for the collection. This is the aggregated metrics for devices, outputs, firmware images, blobs and gateways in the collection
     * Retrieve collection statistics
     */
    async retrieveCollectionStatsRaw(requestParameters: RetrieveCollectionStatsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CollectionStats>> {
        if (requestParameters.collectionId === null || requestParameters.collectionId === undefined) {
            throw new runtime.RequiredError('collectionId','Required parameter requestParameters.collectionId was null or undefined when calling retrieveCollectionStats.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Token"] = this.configuration.apiKey("X-API-Token"); // APIToken authentication
        }

        const response = await this.request({
            path: `/span/collections/{collectionId}/stats`.replace(`{${"collectionId"}}`, encodeURIComponent(String(requestParameters.collectionId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CollectionStatsFromJSON(jsonValue));
    }

    /**
     * Retrieve statistics for the collection. This is the aggregated metrics for devices, outputs, firmware images, blobs and gateways in the collection
     * Retrieve collection statistics
     */
    async retrieveCollectionStats(requestParameters: RetrieveCollectionStatsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CollectionStats> {
        const response = await this.retrieveCollectionStatsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a collection.
     * Update collection
     */
    async updateCollectionRaw(requestParameters: UpdateCollectionOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Collection>> {
        if (requestParameters.collectionId === null || requestParameters.collectionId === undefined) {
            throw new runtime.RequiredError('collectionId','Required parameter requestParameters.collectionId was null or undefined when calling updateCollection.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling updateCollection.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Token"] = this.configuration.apiKey("X-API-Token"); // APIToken authentication
        }

        const response = await this.request({
            path: `/span/collections/{collectionId}`.replace(`{${"collectionId"}}`, encodeURIComponent(String(requestParameters.collectionId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateCollectionRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CollectionFromJSON(jsonValue));
    }

    /**
     * Update a collection.
     * Update collection
     */
    async updateCollection(requestParameters: UpdateCollectionOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Collection> {
        const response = await this.updateCollectionRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

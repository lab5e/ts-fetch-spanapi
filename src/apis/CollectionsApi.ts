/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.1.14 oversensitive-deante
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    BroadcastMessageRequest,
    BroadcastMessageRequestFromJSON,
    BroadcastMessageRequestToJSON,
    Collection,
    CollectionFromJSON,
    CollectionToJSON,
    ListCollectionResponse,
    ListCollectionResponseFromJSON,
    ListCollectionResponseToJSON,
    ListDataResponse,
    ListDataResponseFromJSON,
    ListDataResponseToJSON,
    MultiSendMessageResponse,
    MultiSendMessageResponseFromJSON,
    MultiSendMessageResponseToJSON,
    RpcStatus,
    RpcStatusFromJSON,
    RpcStatusToJSON,
} from '../models';

export interface BroadcastMessageOperationRequest {
    collectionId: string;
    body: BroadcastMessageRequest;
}

export interface CreateCollectionRequest {
    body: Collection;
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
}

export interface UpdateCollectionRequest {
    collectionId: string;
    body: Collection;
}

/**
 * 
 */
export class CollectionsApi extends runtime.BaseAPI {

    /**
     * Broadcast a message to all devices in the collection. This request will always succeed if the collection exists, even if there are one or more send errors. Individual errors are returned as an array of error messages in the response. Use equivalent to resource for devices to send a message to single device.
     * Broadcast message
     */
    async broadcastMessageRaw(requestParameters: BroadcastMessageOperationRequest): Promise<runtime.ApiResponse<MultiSendMessageResponse>> {
        if (requestParameters.collectionId === null || requestParameters.collectionId === undefined) {
            throw new runtime.RequiredError('collectionId','Required parameter requestParameters.collectionId was null or undefined when calling broadcastMessage.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling broadcastMessage.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Token"] = this.configuration.apiKey("X-API-Token"); // APIToken authentication
        }

        const response = await this.request({
            path: `/collections/{collectionId}/to`.replace(`{${"collectionId"}}`, encodeURIComponent(String(requestParameters.collectionId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BroadcastMessageRequestToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MultiSendMessageResponseFromJSON(jsonValue));
    }

    /**
     * Broadcast a message to all devices in the collection. This request will always succeed if the collection exists, even if there are one or more send errors. Individual errors are returned as an array of error messages in the response. Use equivalent to resource for devices to send a message to single device.
     * Broadcast message
     */
    async broadcastMessage(requestParameters: BroadcastMessageOperationRequest): Promise<MultiSendMessageResponse> {
        const response = await this.broadcastMessageRaw(requestParameters);
        return await response.value();
    }

    /**
     * The returned collection is the collection stored in the backend. Defaults have been set. There are no required fields in a collection
     * Create collection
     */
    async createCollectionRaw(requestParameters: CreateCollectionRequest): Promise<runtime.ApiResponse<Collection>> {
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
            path: `/collections`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CollectionToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => CollectionFromJSON(jsonValue));
    }

    /**
     * The returned collection is the collection stored in the backend. Defaults have been set. There are no required fields in a collection
     * Create collection
     */
    async createCollection(requestParameters: CreateCollectionRequest): Promise<Collection> {
        const response = await this.createCollectionRaw(requestParameters);
        return await response.value();
    }

    /**
     * You must have write access to the collection
     * Delete collection
     */
    async deleteCollectionRaw(requestParameters: DeleteCollectionRequest): Promise<runtime.ApiResponse<Collection>> {
        if (requestParameters.collectionId === null || requestParameters.collectionId === undefined) {
            throw new runtime.RequiredError('collectionId','Required parameter requestParameters.collectionId was null or undefined when calling deleteCollection.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Token"] = this.configuration.apiKey("X-API-Token"); // APIToken authentication
        }

        const response = await this.request({
            path: `/collections/{collectionId}`.replace(`{${"collectionId"}}`, encodeURIComponent(String(requestParameters.collectionId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => CollectionFromJSON(jsonValue));
    }

    /**
     * You must have write access to the collection
     * Delete collection
     */
    async deleteCollection(requestParameters: DeleteCollectionRequest): Promise<Collection> {
        const response = await this.deleteCollectionRaw(requestParameters);
        return await response.value();
    }

    /**
     * List the data received from all the devices in the collection.
     * Get payloads
     */
    async listCollectionDataRaw(requestParameters: ListCollectionDataRequest): Promise<runtime.ApiResponse<ListDataResponse>> {
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
            path: `/collections/{collectionId}/data`.replace(`{${"collectionId"}}`, encodeURIComponent(String(requestParameters.collectionId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ListDataResponseFromJSON(jsonValue));
    }

    /**
     * List the data received from all the devices in the collection.
     * Get payloads
     */
    async listCollectionData(requestParameters: ListCollectionDataRequest): Promise<ListDataResponse> {
        const response = await this.listCollectionDataRaw(requestParameters);
        return await response.value();
    }

    /**
     * Lists all the collections that one of your teams owns.
     * List collections
     */
    async listCollectionsRaw(): Promise<runtime.ApiResponse<ListCollectionResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Token"] = this.configuration.apiKey("X-API-Token"); // APIToken authentication
        }

        const response = await this.request({
            path: `/collections`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ListCollectionResponseFromJSON(jsonValue));
    }

    /**
     * Lists all the collections that one of your teams owns.
     * List collections
     */
    async listCollections(): Promise<ListCollectionResponse> {
        const response = await this.listCollectionsRaw();
        return await response.value();
    }

    /**
     * Retrieve collection
     */
    async retrieveCollectionRaw(requestParameters: RetrieveCollectionRequest): Promise<runtime.ApiResponse<Collection>> {
        if (requestParameters.collectionId === null || requestParameters.collectionId === undefined) {
            throw new runtime.RequiredError('collectionId','Required parameter requestParameters.collectionId was null or undefined when calling retrieveCollection.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Token"] = this.configuration.apiKey("X-API-Token"); // APIToken authentication
        }

        const response = await this.request({
            path: `/collections/{collectionId}`.replace(`{${"collectionId"}}`, encodeURIComponent(String(requestParameters.collectionId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => CollectionFromJSON(jsonValue));
    }

    /**
     * Retrieve collection
     */
    async retrieveCollection(requestParameters: RetrieveCollectionRequest): Promise<Collection> {
        const response = await this.retrieveCollectionRaw(requestParameters);
        return await response.value();
    }

    /**
     * You must have write access to the collection, ie. you must administer it
     * Update collection
     */
    async updateCollectionRaw(requestParameters: UpdateCollectionRequest): Promise<runtime.ApiResponse<Collection>> {
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
            path: `/collections/{collectionId}`.replace(`{${"collectionId"}}`, encodeURIComponent(String(requestParameters.collectionId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: CollectionToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => CollectionFromJSON(jsonValue));
    }

    /**
     * You must have write access to the collection, ie. you must administer it
     * Update collection
     */
    async updateCollection(requestParameters: UpdateCollectionRequest): Promise<Collection> {
        const response = await this.updateCollectionRaw(requestParameters);
        return await response.value();
    }

}

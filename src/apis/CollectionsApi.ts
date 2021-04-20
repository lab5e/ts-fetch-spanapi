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

export interface SpanBroadcastMessageRequest {
    collectionId: string;
    body: BroadcastMessageRequest;
}

export interface SpanCreateCollectionRequest {
    body: Collection;
}

export interface SpanDeleteCollectionRequest {
    collectionId: string;
}

export interface SpanListCollectionDataRequest {
    collectionId: string;
    limit?: number;
    start?: string;
    end?: string;
    offset?: string;
}

export interface SpanRetrieveCollectionRequest {
    collectionId: string;
}

export interface SpanUpdateCollectionRequest {
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
    async spanBroadcastMessageRaw(requestParameters: SpanBroadcastMessageRequest): Promise<runtime.ApiResponse<MultiSendMessageResponse>> {
        if (requestParameters.collectionId === null || requestParameters.collectionId === undefined) {
            throw new runtime.RequiredError('collectionId','Required parameter requestParameters.collectionId was null or undefined when calling spanBroadcastMessage.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling spanBroadcastMessage.');
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
    async spanBroadcastMessage(requestParameters: SpanBroadcastMessageRequest): Promise<MultiSendMessageResponse> {
        const response = await this.spanBroadcastMessageRaw(requestParameters);
        return await response.value();
    }

    /**
     * The returned collection is the collection stored in the backend. Defaults have been set. There are no required fields in a collection
     * Create collection
     */
    async spanCreateCollectionRaw(requestParameters: SpanCreateCollectionRequest): Promise<runtime.ApiResponse<Collection>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling spanCreateCollection.');
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
    async spanCreateCollection(requestParameters: SpanCreateCollectionRequest): Promise<Collection> {
        const response = await this.spanCreateCollectionRaw(requestParameters);
        return await response.value();
    }

    /**
     * You must have write access to the collection
     * Delete collection
     */
    async spanDeleteCollectionRaw(requestParameters: SpanDeleteCollectionRequest): Promise<runtime.ApiResponse<Collection>> {
        if (requestParameters.collectionId === null || requestParameters.collectionId === undefined) {
            throw new runtime.RequiredError('collectionId','Required parameter requestParameters.collectionId was null or undefined when calling spanDeleteCollection.');
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
    async spanDeleteCollection(requestParameters: SpanDeleteCollectionRequest): Promise<Collection> {
        const response = await this.spanDeleteCollectionRaw(requestParameters);
        return await response.value();
    }

    /**
     * List the data received from all the devices in the collection.
     * Get payloads
     */
    async spanListCollectionDataRaw(requestParameters: SpanListCollectionDataRequest): Promise<runtime.ApiResponse<ListDataResponse>> {
        if (requestParameters.collectionId === null || requestParameters.collectionId === undefined) {
            throw new runtime.RequiredError('collectionId','Required parameter requestParameters.collectionId was null or undefined when calling spanListCollectionData.');
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
    async spanListCollectionData(requestParameters: SpanListCollectionDataRequest): Promise<ListDataResponse> {
        const response = await this.spanListCollectionDataRaw(requestParameters);
        return await response.value();
    }

    /**
     * Lists all the collections that one of your teams owns.
     * List collections
     */
    async spanListCollectionsRaw(): Promise<runtime.ApiResponse<ListCollectionResponse>> {
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
    async spanListCollections(): Promise<ListCollectionResponse> {
        const response = await this.spanListCollectionsRaw();
        return await response.value();
    }

    /**
     * Retrieve collection
     */
    async spanRetrieveCollectionRaw(requestParameters: SpanRetrieveCollectionRequest): Promise<runtime.ApiResponse<Collection>> {
        if (requestParameters.collectionId === null || requestParameters.collectionId === undefined) {
            throw new runtime.RequiredError('collectionId','Required parameter requestParameters.collectionId was null or undefined when calling spanRetrieveCollection.');
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
    async spanRetrieveCollection(requestParameters: SpanRetrieveCollectionRequest): Promise<Collection> {
        const response = await this.spanRetrieveCollectionRaw(requestParameters);
        return await response.value();
    }

    /**
     * You must have write access to the collection, ie. you must administer it
     * Update collection
     */
    async spanUpdateCollectionRaw(requestParameters: SpanUpdateCollectionRequest): Promise<runtime.ApiResponse<Collection>> {
        if (requestParameters.collectionId === null || requestParameters.collectionId === undefined) {
            throw new runtime.RequiredError('collectionId','Required parameter requestParameters.collectionId was null or undefined when calling spanUpdateCollection.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling spanUpdateCollection.');
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
    async spanUpdateCollection(requestParameters: SpanUpdateCollectionRequest): Promise<Collection> {
        const response = await this.spanUpdateCollectionRaw(requestParameters);
        return await response.value();
    }

}

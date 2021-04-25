/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.1.11 evasive-governor
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    ListOutputResponse,
    ListOutputResponseFromJSON,
    ListOutputResponseToJSON,
    Output,
    OutputFromJSON,
    OutputToJSON,
    OutputLogResponse,
    OutputLogResponseFromJSON,
    OutputLogResponseToJSON,
    OutputStatusResponse,
    OutputStatusResponseFromJSON,
    OutputStatusResponseToJSON,
    RpcStatus,
    RpcStatusFromJSON,
    RpcStatusToJSON,
} from '../models';

export interface CreateOutputRequest {
    collectionId: string;
    body: Output;
}

export interface DeleteOutputRequest {
    collectionId: string;
    outputId: string;
}

export interface ListOutputsRequest {
    collectionId: string;
}

export interface LogsRequest {
    collectionId: string;
    outputId: string;
}

export interface RetrieveOutputRequest {
    collectionId: string;
    outputId: string;
}

export interface StatusRequest {
    collectionId: string;
    outputId: string;
}

export interface UpdateOutputRequest {
    collectionId: string;
    outputId: string;
    body: Output;
}

/**
 * 
 */
export class OutputsApi extends runtime.BaseAPI {

    /**
     * Create output
     */
    async createOutputRaw(requestParameters: CreateOutputRequest): Promise<runtime.ApiResponse<Output>> {
        if (requestParameters.collectionId === null || requestParameters.collectionId === undefined) {
            throw new runtime.RequiredError('collectionId','Required parameter requestParameters.collectionId was null or undefined when calling createOutput.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createOutput.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Token"] = this.configuration.apiKey("X-API-Token"); // APIToken authentication
        }

        const response = await this.request({
            path: `/collections/{collectionId}/outputs`.replace(`{${"collectionId"}}`, encodeURIComponent(String(requestParameters.collectionId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: OutputToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => OutputFromJSON(jsonValue));
    }

    /**
     * Create output
     */
    async createOutput(requestParameters: CreateOutputRequest): Promise<Output> {
        const response = await this.createOutputRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete output
     */
    async deleteOutputRaw(requestParameters: DeleteOutputRequest): Promise<runtime.ApiResponse<Output>> {
        if (requestParameters.collectionId === null || requestParameters.collectionId === undefined) {
            throw new runtime.RequiredError('collectionId','Required parameter requestParameters.collectionId was null or undefined when calling deleteOutput.');
        }

        if (requestParameters.outputId === null || requestParameters.outputId === undefined) {
            throw new runtime.RequiredError('outputId','Required parameter requestParameters.outputId was null or undefined when calling deleteOutput.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Token"] = this.configuration.apiKey("X-API-Token"); // APIToken authentication
        }

        const response = await this.request({
            path: `/collections/{collectionId}/outputs/{outputId}`.replace(`{${"collectionId"}}`, encodeURIComponent(String(requestParameters.collectionId))).replace(`{${"outputId"}}`, encodeURIComponent(String(requestParameters.outputId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => OutputFromJSON(jsonValue));
    }

    /**
     * Delete output
     */
    async deleteOutput(requestParameters: DeleteOutputRequest): Promise<Output> {
        const response = await this.deleteOutputRaw(requestParameters);
        return await response.value();
    }

    /**
     * List outputs
     */
    async listOutputsRaw(requestParameters: ListOutputsRequest): Promise<runtime.ApiResponse<ListOutputResponse>> {
        if (requestParameters.collectionId === null || requestParameters.collectionId === undefined) {
            throw new runtime.RequiredError('collectionId','Required parameter requestParameters.collectionId was null or undefined when calling listOutputs.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Token"] = this.configuration.apiKey("X-API-Token"); // APIToken authentication
        }

        const response = await this.request({
            path: `/collections/{collectionId}/outputs`.replace(`{${"collectionId"}}`, encodeURIComponent(String(requestParameters.collectionId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ListOutputResponseFromJSON(jsonValue));
    }

    /**
     * List outputs
     */
    async listOutputs(requestParameters: ListOutputsRequest): Promise<ListOutputResponse> {
        const response = await this.listOutputsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Output logs
     */
    async logsRaw(requestParameters: LogsRequest): Promise<runtime.ApiResponse<OutputLogResponse>> {
        if (requestParameters.collectionId === null || requestParameters.collectionId === undefined) {
            throw new runtime.RequiredError('collectionId','Required parameter requestParameters.collectionId was null or undefined when calling logs.');
        }

        if (requestParameters.outputId === null || requestParameters.outputId === undefined) {
            throw new runtime.RequiredError('outputId','Required parameter requestParameters.outputId was null or undefined when calling logs.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Token"] = this.configuration.apiKey("X-API-Token"); // APIToken authentication
        }

        const response = await this.request({
            path: `/collections/{collectionId}/outputs/{outputId}/logs`.replace(`{${"collectionId"}}`, encodeURIComponent(String(requestParameters.collectionId))).replace(`{${"outputId"}}`, encodeURIComponent(String(requestParameters.outputId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => OutputLogResponseFromJSON(jsonValue));
    }

    /**
     * Output logs
     */
    async logs(requestParameters: LogsRequest): Promise<OutputLogResponse> {
        const response = await this.logsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Retrieve output
     */
    async retrieveOutputRaw(requestParameters: RetrieveOutputRequest): Promise<runtime.ApiResponse<Output>> {
        if (requestParameters.collectionId === null || requestParameters.collectionId === undefined) {
            throw new runtime.RequiredError('collectionId','Required parameter requestParameters.collectionId was null or undefined when calling retrieveOutput.');
        }

        if (requestParameters.outputId === null || requestParameters.outputId === undefined) {
            throw new runtime.RequiredError('outputId','Required parameter requestParameters.outputId was null or undefined when calling retrieveOutput.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Token"] = this.configuration.apiKey("X-API-Token"); // APIToken authentication
        }

        const response = await this.request({
            path: `/collections/{collectionId}/outputs/{outputId}`.replace(`{${"collectionId"}}`, encodeURIComponent(String(requestParameters.collectionId))).replace(`{${"outputId"}}`, encodeURIComponent(String(requestParameters.outputId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => OutputFromJSON(jsonValue));
    }

    /**
     * Retrieve output
     */
    async retrieveOutput(requestParameters: RetrieveOutputRequest): Promise<Output> {
        const response = await this.retrieveOutputRaw(requestParameters);
        return await response.value();
    }

    /**
     * Output status
     */
    async statusRaw(requestParameters: StatusRequest): Promise<runtime.ApiResponse<OutputStatusResponse>> {
        if (requestParameters.collectionId === null || requestParameters.collectionId === undefined) {
            throw new runtime.RequiredError('collectionId','Required parameter requestParameters.collectionId was null or undefined when calling status.');
        }

        if (requestParameters.outputId === null || requestParameters.outputId === undefined) {
            throw new runtime.RequiredError('outputId','Required parameter requestParameters.outputId was null or undefined when calling status.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Token"] = this.configuration.apiKey("X-API-Token"); // APIToken authentication
        }

        const response = await this.request({
            path: `/collections/{collectionId}/outputs/{outputId}/status`.replace(`{${"collectionId"}}`, encodeURIComponent(String(requestParameters.collectionId))).replace(`{${"outputId"}}`, encodeURIComponent(String(requestParameters.outputId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => OutputStatusResponseFromJSON(jsonValue));
    }

    /**
     * Output status
     */
    async status(requestParameters: StatusRequest): Promise<OutputStatusResponse> {
        const response = await this.statusRaw(requestParameters);
        return await response.value();
    }

    /**
     * Running outputs will be restarted if required. Note that the collection ID can\'t be changed on an existing output.
     * Update output
     */
    async updateOutputRaw(requestParameters: UpdateOutputRequest): Promise<runtime.ApiResponse<Output>> {
        if (requestParameters.collectionId === null || requestParameters.collectionId === undefined) {
            throw new runtime.RequiredError('collectionId','Required parameter requestParameters.collectionId was null or undefined when calling updateOutput.');
        }

        if (requestParameters.outputId === null || requestParameters.outputId === undefined) {
            throw new runtime.RequiredError('outputId','Required parameter requestParameters.outputId was null or undefined when calling updateOutput.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling updateOutput.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Token"] = this.configuration.apiKey("X-API-Token"); // APIToken authentication
        }

        const response = await this.request({
            path: `/collections/{collectionId}/outputs/{outputId}`.replace(`{${"collectionId"}}`, encodeURIComponent(String(requestParameters.collectionId))).replace(`{${"outputId"}}`, encodeURIComponent(String(requestParameters.outputId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: OutputToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => OutputFromJSON(jsonValue));
    }

    /**
     * Running outputs will be restarted if required. Note that the collection ID can\'t be changed on an existing output.
     * Update output
     */
    async updateOutput(requestParameters: UpdateOutputRequest): Promise<Output> {
        const response = await this.updateOutputRaw(requestParameters);
        return await response.value();
    }

}

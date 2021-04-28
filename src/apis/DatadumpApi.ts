/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.1.13 interdependent-karson
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    DataDumpRequest,
    DataDumpRequestFromJSON,
    DataDumpRequestToJSON,
    DataDumpResponse,
    DataDumpResponseFromJSON,
    DataDumpResponseToJSON,
    RpcStatus,
    RpcStatusFromJSON,
    RpcStatusToJSON,
} from '../models';

export interface DataDumpOperationRequest {
    body: DataDumpRequest;
}

/**
 * 
 */
export class DatadumpApi extends runtime.BaseAPI {

    /**
     * Do a complete data dump of your data, devices, outputs and collections.
     * Data dump
     */
    async dataDumpRaw(requestParameters: DataDumpOperationRequest): Promise<runtime.ApiResponse<DataDumpResponse>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling dataDump.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Token"] = this.configuration.apiKey("X-API-Token"); // APIToken authentication
        }

        const response = await this.request({
            path: `/datadump`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DataDumpRequestToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => DataDumpResponseFromJSON(jsonValue));
    }

    /**
     * Do a complete data dump of your data, devices, outputs and collections.
     * Data dump
     */
    async dataDump(requestParameters: DataDumpOperationRequest): Promise<DataDumpResponse> {
        const response = await this.dataDumpRaw(requestParameters);
        return await response.value();
    }

}

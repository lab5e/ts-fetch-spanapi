/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.4.2 nonviolent-adelbert
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    Status,
    StatusFromJSON,
    StatusToJSON,
    SystemInfoResponse,
    SystemInfoResponseFromJSON,
    SystemInfoResponseToJSON,
} from '../models';

/**
 * 
 */
export class SpanApi extends runtime.BaseAPI {

    /**
     * Get system information. This will show the current version of the API that you are using.
     * System information
     */
    async getSystemInfoRaw(): Promise<runtime.ApiResponse<SystemInfoResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Token"] = this.configuration.apiKey("X-API-Token"); // APIToken authentication
        }

        const response = await this.request({
            path: `/span/system`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SystemInfoResponseFromJSON(jsonValue));
    }

    /**
     * Get system information. This will show the current version of the API that you are using.
     * System information
     */
    async getSystemInfo(): Promise<SystemInfoResponse> {
        const response = await this.getSystemInfoRaw();
        return await response.value();
    }

}

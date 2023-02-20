/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.4.0 lean-joline
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    AddDownstreamMessageRequest,
    AddDownstreamMessageRequestFromJSON,
    AddDownstreamMessageRequestToJSON,
    CreateDeviceRequest,
    CreateDeviceRequestFromJSON,
    CreateDeviceRequestToJSON,
    DeleteDownstreamMessageResponse,
    DeleteDownstreamMessageResponseFromJSON,
    DeleteDownstreamMessageResponseToJSON,
    Device,
    DeviceFromJSON,
    DeviceToJSON,
    DeviceCertificateResponse,
    DeviceCertificateResponseFromJSON,
    DeviceCertificateResponseToJSON,
    ListDataResponse,
    ListDataResponseFromJSON,
    ListDataResponseToJSON,
    ListDevicesResponse,
    ListDevicesResponseFromJSON,
    ListDevicesResponseToJSON,
    ListDownstreamMessagesResponse,
    ListDownstreamMessagesResponseFromJSON,
    ListDownstreamMessagesResponseToJSON,
    ListUpstreamMessagesResponse,
    ListUpstreamMessagesResponseFromJSON,
    ListUpstreamMessagesResponseToJSON,
    MessageDownstream,
    MessageDownstreamFromJSON,
    MessageDownstreamToJSON,
    Status,
    StatusFromJSON,
    StatusToJSON,
    UpdateDeviceRequest,
    UpdateDeviceRequestFromJSON,
    UpdateDeviceRequestToJSON,
} from '../models';

export interface AddDownstreamMessageOperationRequest {
    collectionId: string;
    deviceId: string;
    body: AddDownstreamMessageRequest;
}

export interface CreateDeviceOperationRequest {
    collectionId: string;
    body: CreateDeviceRequest;
}

export interface DeleteDeviceRequest {
    collectionId: string;
    deviceId: string;
}

export interface DeleteDownstreamMessageRequest {
    collectionId: string;
    deviceId: string;
    messageId: string;
}

export interface DeviceCertificateRequest {
    collectionId: string;
    deviceId: string;
}

export interface ListDeviceDataRequest {
    collectionId: string;
    deviceId: string;
    limit?: number;
    start?: string;
    end?: string;
    offset?: string;
}

export interface ListDevicesRequest {
    collectionId: string;
}

export interface ListDownstreamMessagesRequest {
    collectionId: string;
    deviceId: string;
    limit?: number;
    start?: string;
    end?: string;
    offset?: string;
}

export interface ListUpstreamMessagesRequest {
    collectionId: string;
    deviceId: string;
    limit?: number;
    start?: string;
    end?: string;
    offset?: string;
}

export interface RetrieveDeviceRequest {
    collectionId: string;
    deviceId: string;
}

export interface UpdateDeviceOperationRequest {
    existingCollectionId: string;
    deviceId: string;
    body: UpdateDeviceRequest;
}

/**
 * 
 */
export class DevicesApi extends runtime.BaseAPI {

    /**
     * Add a new message in the outgoing queue to the device. If there is other messages in the outbox these messages will be sent first.
     * Add message to oubox
     */
    async addDownstreamMessageRaw(requestParameters: AddDownstreamMessageOperationRequest): Promise<runtime.ApiResponse<MessageDownstream>> {
        if (requestParameters.collectionId === null || requestParameters.collectionId === undefined) {
            throw new runtime.RequiredError('collectionId','Required parameter requestParameters.collectionId was null or undefined when calling addDownstreamMessage.');
        }

        if (requestParameters.deviceId === null || requestParameters.deviceId === undefined) {
            throw new runtime.RequiredError('deviceId','Required parameter requestParameters.deviceId was null or undefined when calling addDownstreamMessage.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling addDownstreamMessage.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Token"] = this.configuration.apiKey("X-API-Token"); // APIToken authentication
        }

        const response = await this.request({
            path: `/span/collections/{collectionId}/devices/{deviceId}/outbox`.replace(`{${"collectionId"}}`, encodeURIComponent(String(requestParameters.collectionId))).replace(`{${"deviceId"}}`, encodeURIComponent(String(requestParameters.deviceId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AddDownstreamMessageRequestToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MessageDownstreamFromJSON(jsonValue));
    }

    /**
     * Add a new message in the outgoing queue to the device. If there is other messages in the outbox these messages will be sent first.
     * Add message to oubox
     */
    async addDownstreamMessage(requestParameters: AddDownstreamMessageOperationRequest): Promise<MessageDownstream> {
        const response = await this.addDownstreamMessageRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create device
     */
    async createDeviceRaw(requestParameters: CreateDeviceOperationRequest): Promise<runtime.ApiResponse<Device>> {
        if (requestParameters.collectionId === null || requestParameters.collectionId === undefined) {
            throw new runtime.RequiredError('collectionId','Required parameter requestParameters.collectionId was null or undefined when calling createDevice.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createDevice.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Token"] = this.configuration.apiKey("X-API-Token"); // APIToken authentication
        }

        const response = await this.request({
            path: `/span/collections/{collectionId}/devices`.replace(`{${"collectionId"}}`, encodeURIComponent(String(requestParameters.collectionId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateDeviceRequestToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => DeviceFromJSON(jsonValue));
    }

    /**
     * Create device
     */
    async createDevice(requestParameters: CreateDeviceOperationRequest): Promise<Device> {
        const response = await this.createDeviceRaw(requestParameters);
        return await response.value();
    }

    /**
     * Remove device.
     */
    async deleteDeviceRaw(requestParameters: DeleteDeviceRequest): Promise<runtime.ApiResponse<Device>> {
        if (requestParameters.collectionId === null || requestParameters.collectionId === undefined) {
            throw new runtime.RequiredError('collectionId','Required parameter requestParameters.collectionId was null or undefined when calling deleteDevice.');
        }

        if (requestParameters.deviceId === null || requestParameters.deviceId === undefined) {
            throw new runtime.RequiredError('deviceId','Required parameter requestParameters.deviceId was null or undefined when calling deleteDevice.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Token"] = this.configuration.apiKey("X-API-Token"); // APIToken authentication
        }

        const response = await this.request({
            path: `/span/collections/{collectionId}/devices/{deviceId}`.replace(`{${"collectionId"}}`, encodeURIComponent(String(requestParameters.collectionId))).replace(`{${"deviceId"}}`, encodeURIComponent(String(requestParameters.deviceId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => DeviceFromJSON(jsonValue));
    }

    /**
     * Remove device.
     */
    async deleteDevice(requestParameters: DeleteDeviceRequest): Promise<Device> {
        const response = await this.deleteDeviceRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an outgoing (ie downstream) message from the outbox.
     * Delete outgoing message
     */
    async deleteDownstreamMessageRaw(requestParameters: DeleteDownstreamMessageRequest): Promise<runtime.ApiResponse<DeleteDownstreamMessageResponse>> {
        if (requestParameters.collectionId === null || requestParameters.collectionId === undefined) {
            throw new runtime.RequiredError('collectionId','Required parameter requestParameters.collectionId was null or undefined when calling deleteDownstreamMessage.');
        }

        if (requestParameters.deviceId === null || requestParameters.deviceId === undefined) {
            throw new runtime.RequiredError('deviceId','Required parameter requestParameters.deviceId was null or undefined when calling deleteDownstreamMessage.');
        }

        if (requestParameters.messageId === null || requestParameters.messageId === undefined) {
            throw new runtime.RequiredError('messageId','Required parameter requestParameters.messageId was null or undefined when calling deleteDownstreamMessage.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Token"] = this.configuration.apiKey("X-API-Token"); // APIToken authentication
        }

        const response = await this.request({
            path: `/span/collections/{collectionId}/devices/{deviceId}/outbox/{messageId}`.replace(`{${"collectionId"}}`, encodeURIComponent(String(requestParameters.collectionId))).replace(`{${"deviceId"}}`, encodeURIComponent(String(requestParameters.deviceId))).replace(`{${"messageId"}}`, encodeURIComponent(String(requestParameters.messageId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => DeleteDownstreamMessageResponseFromJSON(jsonValue));
    }

    /**
     * Delete an outgoing (ie downstream) message from the outbox.
     * Delete outgoing message
     */
    async deleteDownstreamMessage(requestParameters: DeleteDownstreamMessageRequest): Promise<DeleteDownstreamMessageResponse> {
        const response = await this.deleteDownstreamMessageRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get issued certificate(s) for device
     */
    async deviceCertificateRaw(requestParameters: DeviceCertificateRequest): Promise<runtime.ApiResponse<DeviceCertificateResponse>> {
        if (requestParameters.collectionId === null || requestParameters.collectionId === undefined) {
            throw new runtime.RequiredError('collectionId','Required parameter requestParameters.collectionId was null or undefined when calling deviceCertificate.');
        }

        if (requestParameters.deviceId === null || requestParameters.deviceId === undefined) {
            throw new runtime.RequiredError('deviceId','Required parameter requestParameters.deviceId was null or undefined when calling deviceCertificate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Token"] = this.configuration.apiKey("X-API-Token"); // APIToken authentication
        }

        const response = await this.request({
            path: `/span/collections/{collectionId}/devices/{deviceId}/certs`.replace(`{${"collectionId"}}`, encodeURIComponent(String(requestParameters.collectionId))).replace(`{${"deviceId"}}`, encodeURIComponent(String(requestParameters.deviceId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => DeviceCertificateResponseFromJSON(jsonValue));
    }

    /**
     * Get issued certificate(s) for device
     */
    async deviceCertificate(requestParameters: DeviceCertificateRequest): Promise<DeviceCertificateResponse> {
        const response = await this.deviceCertificateRaw(requestParameters);
        return await response.value();
    }

    /**
     * List the data received from the device. Use the query parameters to control what data you retrieve. The maximum number of data points is 100.
     * Retrieve data from device
     */
    async listDeviceDataRaw(requestParameters: ListDeviceDataRequest): Promise<runtime.ApiResponse<ListDataResponse>> {
        if (requestParameters.collectionId === null || requestParameters.collectionId === undefined) {
            throw new runtime.RequiredError('collectionId','Required parameter requestParameters.collectionId was null or undefined when calling listDeviceData.');
        }

        if (requestParameters.deviceId === null || requestParameters.deviceId === undefined) {
            throw new runtime.RequiredError('deviceId','Required parameter requestParameters.deviceId was null or undefined when calling listDeviceData.');
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
            path: `/span/collections/{collectionId}/devices/{deviceId}/data`.replace(`{${"collectionId"}}`, encodeURIComponent(String(requestParameters.collectionId))).replace(`{${"deviceId"}}`, encodeURIComponent(String(requestParameters.deviceId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ListDataResponseFromJSON(jsonValue));
    }

    /**
     * List the data received from the device. Use the query parameters to control what data you retrieve. The maximum number of data points is 100.
     * Retrieve data from device
     */
    async listDeviceData(requestParameters: ListDeviceDataRequest): Promise<ListDataResponse> {
        const response = await this.listDeviceDataRaw(requestParameters);
        return await response.value();
    }

    /**
     * List devices in collection.
     */
    async listDevicesRaw(requestParameters: ListDevicesRequest): Promise<runtime.ApiResponse<ListDevicesResponse>> {
        if (requestParameters.collectionId === null || requestParameters.collectionId === undefined) {
            throw new runtime.RequiredError('collectionId','Required parameter requestParameters.collectionId was null or undefined when calling listDevices.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Token"] = this.configuration.apiKey("X-API-Token"); // APIToken authentication
        }

        const response = await this.request({
            path: `/span/collections/{collectionId}/devices`.replace(`{${"collectionId"}}`, encodeURIComponent(String(requestParameters.collectionId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ListDevicesResponseFromJSON(jsonValue));
    }

    /**
     * List devices in collection.
     */
    async listDevices(requestParameters: ListDevicesRequest): Promise<ListDevicesResponse> {
        const response = await this.listDevicesRaw(requestParameters);
        return await response.value();
    }

    /**
     * List messages that should be sent to the device when it connects to the service. The messages are sent to the device when it connects to the service and either sends a message (via UDP or CoAP) or requests a message via CoAP GET request.option
     * List the messages in the outbox
     */
    async listDownstreamMessagesRaw(requestParameters: ListDownstreamMessagesRequest): Promise<runtime.ApiResponse<ListDownstreamMessagesResponse>> {
        if (requestParameters.collectionId === null || requestParameters.collectionId === undefined) {
            throw new runtime.RequiredError('collectionId','Required parameter requestParameters.collectionId was null or undefined when calling listDownstreamMessages.');
        }

        if (requestParameters.deviceId === null || requestParameters.deviceId === undefined) {
            throw new runtime.RequiredError('deviceId','Required parameter requestParameters.deviceId was null or undefined when calling listDownstreamMessages.');
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
            path: `/span/collections/{collectionId}/devices/{deviceId}/outbox`.replace(`{${"collectionId"}}`, encodeURIComponent(String(requestParameters.collectionId))).replace(`{${"deviceId"}}`, encodeURIComponent(String(requestParameters.deviceId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ListDownstreamMessagesResponseFromJSON(jsonValue));
    }

    /**
     * List messages that should be sent to the device when it connects to the service. The messages are sent to the device when it connects to the service and either sends a message (via UDP or CoAP) or requests a message via CoAP GET request.option
     * List the messages in the outbox
     */
    async listDownstreamMessages(requestParameters: ListDownstreamMessagesRequest): Promise<ListDownstreamMessagesResponse> {
        const response = await this.listDownstreamMessagesRaw(requestParameters);
        return await response.value();
    }

    /**
     * Retrieve a list of incoming (ie upstream) messages, ie messages sent from the device to the service. These messages are buffered in the service until they expire.  Use the query parameters to limit the number of messages to return. If no limit is specified the default limit of 250 is used.
     * List incoming messages
     */
    async listUpstreamMessagesRaw(requestParameters: ListUpstreamMessagesRequest): Promise<runtime.ApiResponse<ListUpstreamMessagesResponse>> {
        if (requestParameters.collectionId === null || requestParameters.collectionId === undefined) {
            throw new runtime.RequiredError('collectionId','Required parameter requestParameters.collectionId was null or undefined when calling listUpstreamMessages.');
        }

        if (requestParameters.deviceId === null || requestParameters.deviceId === undefined) {
            throw new runtime.RequiredError('deviceId','Required parameter requestParameters.deviceId was null or undefined when calling listUpstreamMessages.');
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
            path: `/span/collections/{collectionId}/devices/{deviceId}/inbox`.replace(`{${"collectionId"}}`, encodeURIComponent(String(requestParameters.collectionId))).replace(`{${"deviceId"}}`, encodeURIComponent(String(requestParameters.deviceId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ListUpstreamMessagesResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve a list of incoming (ie upstream) messages, ie messages sent from the device to the service. These messages are buffered in the service until they expire.  Use the query parameters to limit the number of messages to return. If no limit is specified the default limit of 250 is used.
     * List incoming messages
     */
    async listUpstreamMessages(requestParameters: ListUpstreamMessagesRequest): Promise<ListUpstreamMessagesResponse> {
        const response = await this.listUpstreamMessagesRaw(requestParameters);
        return await response.value();
    }

    /**
     * Retrieve device
     */
    async retrieveDeviceRaw(requestParameters: RetrieveDeviceRequest): Promise<runtime.ApiResponse<Device>> {
        if (requestParameters.collectionId === null || requestParameters.collectionId === undefined) {
            throw new runtime.RequiredError('collectionId','Required parameter requestParameters.collectionId was null or undefined when calling retrieveDevice.');
        }

        if (requestParameters.deviceId === null || requestParameters.deviceId === undefined) {
            throw new runtime.RequiredError('deviceId','Required parameter requestParameters.deviceId was null or undefined when calling retrieveDevice.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Token"] = this.configuration.apiKey("X-API-Token"); // APIToken authentication
        }

        const response = await this.request({
            path: `/span/collections/{collectionId}/devices/{deviceId}`.replace(`{${"collectionId"}}`, encodeURIComponent(String(requestParameters.collectionId))).replace(`{${"deviceId"}}`, encodeURIComponent(String(requestParameters.deviceId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => DeviceFromJSON(jsonValue));
    }

    /**
     * Retrieve device
     */
    async retrieveDevice(requestParameters: RetrieveDeviceRequest): Promise<Device> {
        const response = await this.retrieveDeviceRaw(requestParameters);
        return await response.value();
    }

    /**
     * The device can be moved from one collection to another by setting the collection ID field to the new collection. You must have administrative access to both collections. A note on gateway configurations: Empty gateway configuration blocks are deleted. If the configuration block contains a gateway ID it will be updated  with the new values. All values must be submitted in the request.
     * Update device
     */
    async updateDeviceRaw(requestParameters: UpdateDeviceOperationRequest): Promise<runtime.ApiResponse<Device>> {
        if (requestParameters.existingCollectionId === null || requestParameters.existingCollectionId === undefined) {
            throw new runtime.RequiredError('existingCollectionId','Required parameter requestParameters.existingCollectionId was null or undefined when calling updateDevice.');
        }

        if (requestParameters.deviceId === null || requestParameters.deviceId === undefined) {
            throw new runtime.RequiredError('deviceId','Required parameter requestParameters.deviceId was null or undefined when calling updateDevice.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling updateDevice.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Token"] = this.configuration.apiKey("X-API-Token"); // APIToken authentication
        }

        const response = await this.request({
            path: `/span/collections/{existingCollectionId}/devices/{deviceId}`.replace(`{${"existingCollectionId"}}`, encodeURIComponent(String(requestParameters.existingCollectionId))).replace(`{${"deviceId"}}`, encodeURIComponent(String(requestParameters.deviceId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateDeviceRequestToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => DeviceFromJSON(jsonValue));
    }

    /**
     * The device can be moved from one collection to another by setting the collection ID field to the new collection. You must have administrative access to both collections. A note on gateway configurations: Empty gateway configuration blocks are deleted. If the configuration block contains a gateway ID it will be updated  with the new values. All values must be submitted in the request.
     * Update device
     */
    async updateDevice(requestParameters: UpdateDeviceOperationRequest): Promise<Device> {
        const response = await this.updateDeviceRaw(requestParameters);
        return await response.value();
    }

}

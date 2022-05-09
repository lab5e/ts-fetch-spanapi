/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.2.3 lower-elian
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    CertificateChainResponse,
    CertificateChainResponseFromJSON,
    CertificateChainResponseToJSON,
    CreateCertificateRequest,
    CreateCertificateRequestFromJSON,
    CreateCertificateRequestToJSON,
    CreateCertificateResponse,
    CreateCertificateResponseFromJSON,
    CreateCertificateResponseToJSON,
    SignCertificateRequest,
    SignCertificateRequestFromJSON,
    SignCertificateRequestToJSON,
    SignCertificateResponse,
    SignCertificateResponseFromJSON,
    SignCertificateResponseToJSON,
    Status,
    StatusFromJSON,
    StatusToJSON,
    VerifyCertificateRequest,
    VerifyCertificateRequestFromJSON,
    VerifyCertificateRequestToJSON,
    VerifyCertificateResponse,
    VerifyCertificateResponseFromJSON,
    VerifyCertificateResponseToJSON,
} from '../models';

export interface CreateCertificateOperationRequest {
    collectionId: string;
    body: CreateCertificateRequest;
}

export interface RetrieveCertificateChainRequest {
    collectionId: string;
    gatewayId?: string;
    deviceId?: string;
}

export interface SignCertificateOperationRequest {
    collectionId: string;
    body: SignCertificateRequest;
}

export interface VerifyCertificateOperationRequest {
    collectionId: string;
    body: VerifyCertificateRequest;
}

/**
 * 
 */
export class CertificatesApi extends runtime.BaseAPI {

    /**
     * Create a new device or gateway (client) certificate for an internet-connected device. The devices will use this client certificate to authenticate when sending data via the Internet endpoint. This will create a X509 client certificate with an ECC public key. The key is not stored by the service so keep it in a secure place once it is downloaded. The returned certificate will be valid for 14 days. The key for the certificate is your own responsibility. The client certificate is used in both the TLS, DTLS and gRPC service endpoints.
     * Create certificate
     */
    async createCertificateRaw(requestParameters: CreateCertificateOperationRequest): Promise<runtime.ApiResponse<CreateCertificateResponse>> {
        if (requestParameters.collectionId === null || requestParameters.collectionId === undefined) {
            throw new runtime.RequiredError('collectionId','Required parameter requestParameters.collectionId was null or undefined when calling createCertificate.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createCertificate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Token"] = this.configuration.apiKey("X-API-Token"); // APIToken authentication
        }

        const response = await this.request({
            path: `/span/collections/{collectionId}/certificates/create`.replace(`{${"collectionId"}}`, encodeURIComponent(String(requestParameters.collectionId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateCertificateRequestToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateCertificateResponseFromJSON(jsonValue));
    }

    /**
     * Create a new device or gateway (client) certificate for an internet-connected device. The devices will use this client certificate to authenticate when sending data via the Internet endpoint. This will create a X509 client certificate with an ECC public key. The key is not stored by the service so keep it in a secure place once it is downloaded. The returned certificate will be valid for 14 days. The key for the certificate is your own responsibility. The client certificate is used in both the TLS, DTLS and gRPC service endpoints.
     * Create certificate
     */
    async createCertificate(requestParameters: CreateCertificateOperationRequest): Promise<CreateCertificateResponse> {
        const response = await this.createCertificateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get the certificate chain for the root CA and intermediate certificates used by the device, gateway and server certificates. It is highly recommended to verify the server certificate when sending data to avoid any man-in-the-middle attacks. This chain will contain all required certificates needed to verify the client certificate.
     * Get certificate chain
     */
    async retrieveCertificateChainRaw(requestParameters: RetrieveCertificateChainRequest): Promise<runtime.ApiResponse<CertificateChainResponse>> {
        if (requestParameters.collectionId === null || requestParameters.collectionId === undefined) {
            throw new runtime.RequiredError('collectionId','Required parameter requestParameters.collectionId was null or undefined when calling retrieveCertificateChain.');
        }

        const queryParameters: any = {};

        if (requestParameters.gatewayId !== undefined) {
            queryParameters['gatewayId'] = requestParameters.gatewayId;
        }

        if (requestParameters.deviceId !== undefined) {
            queryParameters['deviceId'] = requestParameters.deviceId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Token"] = this.configuration.apiKey("X-API-Token"); // APIToken authentication
        }

        const response = await this.request({
            path: `/span/collections/{collectionId}/certificates`.replace(`{${"collectionId"}}`, encodeURIComponent(String(requestParameters.collectionId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => CertificateChainResponseFromJSON(jsonValue));
    }

    /**
     * Get the certificate chain for the root CA and intermediate certificates used by the device, gateway and server certificates. It is highly recommended to verify the server certificate when sending data to avoid any man-in-the-middle attacks. This chain will contain all required certificates needed to verify the client certificate.
     * Get certificate chain
     */
    async retrieveCertificateChain(requestParameters: RetrieveCertificateChainRequest): Promise<CertificateChainResponse> {
        const response = await this.retrieveCertificateChainRaw(requestParameters);
        return await response.value();
    }

    /**
     * Sign a device or gateway (aka client) certificate. The certificate is a X509 Certificate signing request PEM encoded. The certificate will be valid for 14 days and must be renewed.
     * Sign certificate
     */
    async signCertificateRaw(requestParameters: SignCertificateOperationRequest): Promise<runtime.ApiResponse<SignCertificateResponse>> {
        if (requestParameters.collectionId === null || requestParameters.collectionId === undefined) {
            throw new runtime.RequiredError('collectionId','Required parameter requestParameters.collectionId was null or undefined when calling signCertificate.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling signCertificate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Token"] = this.configuration.apiKey("X-API-Token"); // APIToken authentication
        }

        const response = await this.request({
            path: `/span/collections/{collectionId}/certificates/sign`.replace(`{${"collectionId"}}`, encodeURIComponent(String(requestParameters.collectionId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SignCertificateRequestToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SignCertificateResponseFromJSON(jsonValue));
    }

    /**
     * Sign a device or gateway (aka client) certificate. The certificate is a X509 Certificate signing request PEM encoded. The certificate will be valid for 14 days and must be renewed.
     * Sign certificate
     */
    async signCertificate(requestParameters: SignCertificateOperationRequest): Promise<SignCertificateResponse> {
        const response = await this.signCertificateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Verify client certificate. If a client certificate fails it can be tricky to pinpoint exactly *why* the certificate isn\'t accepted. This resource validates the client certificate and returns the error in plain text.
     * Verify certificate
     */
    async verifyCertificateRaw(requestParameters: VerifyCertificateOperationRequest): Promise<runtime.ApiResponse<VerifyCertificateResponse>> {
        if (requestParameters.collectionId === null || requestParameters.collectionId === undefined) {
            throw new runtime.RequiredError('collectionId','Required parameter requestParameters.collectionId was null or undefined when calling verifyCertificate.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling verifyCertificate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Token"] = this.configuration.apiKey("X-API-Token"); // APIToken authentication
        }

        const response = await this.request({
            path: `/span/collections/{collectionId}/certificates/verify`.replace(`{${"collectionId"}}`, encodeURIComponent(String(requestParameters.collectionId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: VerifyCertificateRequestToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => VerifyCertificateResponseFromJSON(jsonValue));
    }

    /**
     * Verify client certificate. If a client certificate fails it can be tricky to pinpoint exactly *why* the certificate isn\'t accepted. This resource validates the client certificate and returns the error in plain text.
     * Verify certificate
     */
    async verifyCertificate(requestParameters: VerifyCertificateOperationRequest): Promise<VerifyCertificateResponse> {
        const response = await this.verifyCertificateRaw(requestParameters);
        return await response.value();
    }

}

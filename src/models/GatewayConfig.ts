/* tslint:disable */
/* eslint-disable */
/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.7.0 actionable-aryanna
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { GatewayCIoTConfig } from './GatewayCIoTConfig';
import {
    GatewayCIoTConfigFromJSON,
    GatewayCIoTConfigFromJSONTyped,
    GatewayCIoTConfigToJSON,
} from './GatewayCIoTConfig';
import type { GatewayCustomConfig } from './GatewayCustomConfig';
import {
    GatewayCustomConfigFromJSON,
    GatewayCustomConfigFromJSONTyped,
    GatewayCustomConfigToJSON,
} from './GatewayCustomConfig';
import type { GatewayInetConfig } from './GatewayInetConfig';
import {
    GatewayInetConfigFromJSON,
    GatewayInetConfigFromJSONTyped,
    GatewayInetConfigToJSON,
} from './GatewayInetConfig';

/**
 * 
 * @export
 * @interface GatewayConfig
 */
export interface GatewayConfig {
    /**
     * 
     * @type {GatewayCIoTConfig}
     * @memberof GatewayConfig
     */
    ciot?: GatewayCIoTConfig;
    /**
     * 
     * @type {GatewayInetConfig}
     * @memberof GatewayConfig
     */
    inet?: GatewayInetConfig;
    /**
     * 
     * @type {GatewayCustomConfig}
     * @memberof GatewayConfig
     */
    user?: GatewayCustomConfig;
}

/**
 * Check if a given object implements the GatewayConfig interface.
 */
export function instanceOfGatewayConfig(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GatewayConfigFromJSON(json: any): GatewayConfig {
    return GatewayConfigFromJSONTyped(json, false);
}

export function GatewayConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): GatewayConfig {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ciot': !exists(json, 'ciot') ? undefined : GatewayCIoTConfigFromJSON(json['ciot']),
        'inet': !exists(json, 'inet') ? undefined : GatewayInetConfigFromJSON(json['inet']),
        'user': !exists(json, 'user') ? undefined : GatewayCustomConfigFromJSON(json['user']),
    };
}

export function GatewayConfigToJSON(value?: GatewayConfig | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ciot': GatewayCIoTConfigToJSON(value.ciot),
        'inet': GatewayInetConfigToJSON(value.inet),
        'user': GatewayCustomConfigToJSON(value.user),
    };
}


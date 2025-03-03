/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Todo
 */
export interface Todo {
    /**
     * 
     * @type {number}
     * @memberof Todo
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Todo
     */
    title: string;
    /**
     * 
     * @type {Date}
     * @memberof Todo
     */
    createdAt?: Date;
}

/**
 * Check if a given object implements the Todo interface.
 */
export function instanceOfTodo(value: object): value is Todo {
    if (!('title' in value) || value['title'] === undefined) return false;
    return true;
}

export function TodoFromJSON(json: any): Todo {
    return TodoFromJSONTyped(json, false);
}

export function TodoFromJSONTyped(json: any, ignoreDiscriminator: boolean): Todo {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'title': json['title'],
        'createdAt': json['createdAt'] == null ? undefined : (new Date(json['createdAt'])),
    };
}

export function TodoToJSON(json: any): Todo {
    return TodoToJSONTyped(json, false);
}

export function TodoToJSONTyped(value?: Todo | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'title': value['title'],
        'createdAt': value['createdAt'] == null ? undefined : ((value['createdAt']).toISOString()),
    };
}


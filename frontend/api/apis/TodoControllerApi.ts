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


import * as runtime from '../runtime';
import type {
  Todo,
} from '../models/index';
import {
    TodoFromJSON,
    TodoToJSON,
} from '../models/index';

export interface CreateTodoRequest {
    todo: Todo;
}

export interface DeleteTodoRequest {
    id: number;
}

export interface GetTodoByIdRequest {
    id: number;
}

export interface UpdateTodoRequest {
    id: number;
    todo: Todo;
}

/**
 * 
 */
export class TodoControllerApi extends runtime.BaseAPI {

    /**
     */
    async createTodoRaw(requestParameters: CreateTodoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Todo>> {
        if (requestParameters['todo'] == null) {
            throw new runtime.RequiredError(
                'todo',
                'Required parameter "todo" was null or undefined when calling createTodo().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/todos`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TodoToJSON(requestParameters['todo']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TodoFromJSON(jsonValue));
    }

    /**
     */
    async createTodo(requestParameters: CreateTodoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Todo> {
        const response = await this.createTodoRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async deleteTodoRaw(requestParameters: DeleteTodoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling deleteTodo().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/todos/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async deleteTodo(requestParameters: DeleteTodoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteTodoRaw(requestParameters, initOverrides);
    }

    /**
     */
    async getAllTodosRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Todo>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/todos`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TodoFromJSON));
    }

    /**
     */
    async getAllTodos(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Todo>> {
        const response = await this.getAllTodosRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async getTodoByIdRaw(requestParameters: GetTodoByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Todo>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getTodoById().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/todos/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TodoFromJSON(jsonValue));
    }

    /**
     */
    async getTodoById(requestParameters: GetTodoByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Todo> {
        const response = await this.getTodoByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async updateTodoRaw(requestParameters: UpdateTodoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Todo>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling updateTodo().'
            );
        }

        if (requestParameters['todo'] == null) {
            throw new runtime.RequiredError(
                'todo',
                'Required parameter "todo" was null or undefined when calling updateTodo().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/todos/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: TodoToJSON(requestParameters['todo']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TodoFromJSON(jsonValue));
    }

    /**
     */
    async updateTodo(requestParameters: UpdateTodoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Todo> {
        const response = await this.updateTodoRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

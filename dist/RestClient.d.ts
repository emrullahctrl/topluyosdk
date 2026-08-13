import { ApiResponse } from "./types";
export declare class TopluyoApiError extends Error {
    status: number;
    data: unknown;
    constructor(status: number, data: unknown);
}
export declare class RestClient {
    private baseUrl;
    private token;
    constructor(token: string);
    private buildUrl;
    post<T>(endpoint: string, body: object): Promise<ApiResponse<T>>;
}

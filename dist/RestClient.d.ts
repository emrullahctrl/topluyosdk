import { ApiResponse } from "./types";
export declare class RestClient {
    private baseUrl;
    private token;
    constructor(token: string);
    private buildUrl;
    post<T>(endpoint: string, body: object): Promise<ApiResponse<T>>;
}

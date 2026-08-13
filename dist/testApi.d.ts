import { RestClient } from "./RestClient";
export declare class TestApi {
    private rest;
    constructor(rest: RestClient);
    ip(): Promise<import("./types").ApiResponse<{
        ip: string;
    }>>;
    time(): Promise<import("./types").ApiResponse<{
        time: number;
    }>>;
}

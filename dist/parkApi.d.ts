import { RestClient } from "./RestClient";
import { ParkData } from "./types";
export declare class ParkApi {
    private rest;
    constructor(rest: RestClient);
    set(channelId: number, key: string, val: string): Promise<import("./types").ApiResponse<unknown>>;
    list(channelId: number, key?: string): Promise<import("./types").ApiResponse<ParkData[]>>;
    delete(channelId: number, key?: string): Promise<import("./types").ApiResponse<unknown>>;
}

import { RestClient } from "./RestClient";
export declare class PermissionApi {
    private rest;
    constructor(rest: RestClient);
    channel(channelId: number, userId: number): Promise<import("./types").ApiResponse<number>>;
    power(groupId: number, userId: number): Promise<import("./types").ApiResponse<number>>;
}

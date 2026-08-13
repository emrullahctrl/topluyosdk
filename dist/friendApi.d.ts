import { RestClient } from "./RestClient";
export declare class FriendApi {
    private rest;
    constructor(rest: RestClient);
    add(userId: number): Promise<import("./types").ApiResponse<unknown>>;
    delete(userId: number): Promise<import("./types").ApiResponse<unknown>>;
    status(userId: number): Promise<import("./types").ApiResponse<string>>;
}

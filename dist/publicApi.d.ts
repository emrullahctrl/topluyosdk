import { RestClient } from "./RestClient";
export declare class PublicApi {
    private rest;
    constructor(rest: RestClient);
    search(text: string): Promise<import("./types").ApiResponse<any>>;
    isNickAvailable(nick: string): Promise<import("./types").ApiResponse<number>>;
}

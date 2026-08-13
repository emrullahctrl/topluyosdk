import { RestClient } from "./RestClient";
import { ChannelData } from "./channelApi";
export declare class FavoriteApi {
    private rest;
    constructor(rest: RestClient);
    list(): Promise<import("./types").ApiResponse<ChannelData[]>>;
    toggle(channelId: number): Promise<import("./types").ApiResponse<unknown>>;
}

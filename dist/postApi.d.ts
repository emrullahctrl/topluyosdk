import { RestClient } from "./RestClient";
import { PostData, AddPostOptions, ListPostOptions } from "./types";
export declare class PostApi {
    private rest;
    constructor(rest: RestClient);
    addByChannelId(channelId: number, options: AddPostOptions): Promise<import("./types").ApiResponse<number>>;
    addByNick(groupNick: string, channelNick: string, options: AddPostOptions): Promise<import("./types").ApiResponse<number>>;
    bumote(postId: number, code?: string): Promise<import("./types").ApiResponse<unknown>>;
    delete(postId: number): Promise<import("./types").ApiResponse<unknown>>;
    get(postId: number): Promise<import("./types").ApiResponse<PostData>>;
    listByChannelId(channelId: number, options?: ListPostOptions): Promise<import("./types").ApiResponse<PostData[]>>;
    listByNick(groupNick: string, channelNick: string, options?: ListPostOptions): Promise<import("./types").ApiResponse<PostData[]>>;
    editById(postId: number, text: string): Promise<import("./types").ApiResponse<unknown>>;
    editByCode(channelId: number, code: string, text: string): Promise<import("./types").ApiResponse<unknown>>;
}

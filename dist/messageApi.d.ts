import { RestClient } from "./RestClient";
import { MessageData, ChatListItem } from "./types";
export declare class MessageApi {
    private rest;
    constructor(rest: RestClient);
    get(userId: number): Promise<import("./types").ApiResponse<MessageData[]>>;
    getFromUser(userId: number): Promise<import("./types").ApiResponse<MessageData[]>>;
    listUserMessages(): Promise<import("./types").ApiResponse<ChatListItem[]>>;
    read(userId: number): Promise<import("./types").ApiResponse<unknown>>;
    send(userId: number, message: string): Promise<import("./types").ApiResponse<unknown>>;
}

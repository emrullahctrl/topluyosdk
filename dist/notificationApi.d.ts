import { RestClient } from "./RestClient";
import { NotificationData } from "./types";
export declare class NotificationApi {
    private rest;
    constructor(rest: RestClient);
    getPushKey(): Promise<import("./types").ApiResponse<string>>;
    list(): Promise<import("./types").ApiResponse<NotificationData[]>>;
    read(notificationId: number): Promise<import("./types").ApiResponse<unknown>>;
    readAll(type?: number): Promise<import("./types").ApiResponse<unknown>>;
    setPushEndpoint(endpointString: string): Promise<import("./types").ApiResponse<unknown>>;
}

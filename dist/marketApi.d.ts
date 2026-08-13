import { RestClient } from "./RestClient";
import { AppMarketData, MarketCommentData, AddCommentOptions, CreateAppOptions, ListMarketOptions, PublisherData, AppRevisionData, SetRevisionDetailOptions, SetRevisionContentOptions } from "./types";
export declare class MarketApi {
    private rest;
    constructor(rest: RestClient);
    getApiKey(appId: number): Promise<import("./types").ApiResponse<unknown>>;
    resetApiKey(): Promise<import("./types").ApiResponse<unknown>>;
    addApp(options: CreateAppOptions): Promise<import("./types").ApiResponse<number>>;
    installApp(appId: number, groupId: number): Promise<import("./types").ApiResponse<unknown>>;
    getApp(appId: number): Promise<import("./types").ApiResponse<AppMarketData>>;
    hideApp(appId: number): Promise<import("./types").ApiResponse<unknown>>;
    myApps(): Promise<import("./types").ApiResponse<AppMarketData[]>>;
    list(options?: ListMarketOptions): Promise<import("./types").ApiResponse<AppMarketData[]>>;
    addComment(appId: number, options: AddCommentOptions): Promise<import("./types").ApiResponse<unknown>>;
    listComments(appId: number): Promise<import("./types").ApiResponse<MarketCommentData[]>>;
    addToLibrary(appId: number): Promise<import("./types").ApiResponse<unknown>>;
    removeFromLibrary(appId: number): Promise<import("./types").ApiResponse<unknown>>;
    listLibrary(): Promise<import("./types").ApiResponse<AppMarketData[]>>;
    getPublisher(publisherId: number): Promise<import("./types").ApiResponse<PublisherData>>;
    getRevision(appId: number): Promise<import("./types").ApiResponse<AppRevisionData>>;
    publishRevision(appId: number): Promise<import("./types").ApiResponse<unknown>>;
    setRevisionContent(appId: number, options: SetRevisionContentOptions): Promise<import("./types").ApiResponse<unknown>>;
    setRevisionDetail(appId: number, options: SetRevisionDetailOptions): Promise<import("./types").ApiResponse<unknown>>;
}

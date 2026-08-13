import { RestClient } from "./RestClient";
import { TurboHistoryItem, TurboTransferOptions, TurboHistoryOptions } from "./types";
export declare class TurboApi {
    private rest;
    constructor(rest: RestClient);
    historyList(options?: TurboHistoryOptions): Promise<import("./types").ApiResponse<TurboHistoryItem[]>>;
    transfer(options: TurboTransferOptions): Promise<import("./types").ApiResponse<unknown>>;
}

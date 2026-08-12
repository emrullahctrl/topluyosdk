import { RestClient } from "./RestClient";
import { TurboHistoryItem, TurboTransferOptions, TurboHistoryOptions } from "./types";

export class TurboApi {
    constructor(private rest: RestClient) {}

    async historyList(options: TurboHistoryOptions = {}) {
        return this.rest.post<TurboHistoryItem[]>("/!api/turbo/history/list", options);
    }

    async transfer(options: TurboTransferOptions) {
        return this.rest.post("/!api/turbo/transfer", options);
    }
}
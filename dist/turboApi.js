"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TurboApi = void 0;
class TurboApi {
    rest;
    constructor(rest) {
        this.rest = rest;
    }
    async historyList(options = {}) {
        return this.rest.post("/!api/turbo/history/list", options);
    }
    async transfer(options) {
        return this.rest.post("/!api/turbo/transfer", options);
    }
}
exports.TurboApi = TurboApi;

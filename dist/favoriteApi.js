"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteApi = void 0;
class FavoriteApi {
    rest;
    constructor(rest) {
        this.rest = rest;
    }
    async list() {
        return this.rest.post("/!api/favorite/list", {});
    }
    async toggle(channelId) {
        return this.rest.post("/!api/favorite/toggle", {
            channel_id: channelId
        });
    }
}
exports.FavoriteApi = FavoriteApi;

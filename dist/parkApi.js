"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParkApi = void 0;
class ParkApi {
    rest;
    constructor(rest) {
        this.rest = rest;
    }
    async set(channelId, key, val) {
        return this.rest.post("/!api/park/set", {
            channel_id: channelId,
            key: key,
            val: val
        });
    }
    async list(channelId, key = "*") {
        return this.rest.post("/!api/park/list", {
            channel_id: channelId,
            key: key
        });
    }
    async delete(channelId, key = "*") {
        return this.rest.post("/!api/park/del", {
            channel_id: channelId,
            key: key
        });
    }
}
exports.ParkApi = ParkApi;

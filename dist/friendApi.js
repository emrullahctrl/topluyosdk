"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FriendApi = void 0;
class FriendApi {
    rest;
    constructor(rest) {
        this.rest = rest;
    }
    async add(userId) {
        return this.rest.post("/!api/friend/add", {
            user_id: userId
        });
    }
    async delete(userId) {
        return this.rest.post("/!api/friend/del", {
            user_id: userId
        });
    }
    async status(userId) {
        return this.rest.post("/!api/friend/status", {
            user_id: userId
        });
    }
}
exports.FriendApi = FriendApi;

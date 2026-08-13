"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionApi = void 0;
class PermissionApi {
    rest;
    constructor(rest) {
        this.rest = rest;
    }
    async channel(channelId, userId) {
        return this.rest.post("/!api/permission/channel", {
            channel_id: channelId,
            user_id: userId
        });
    }
    async power(groupId, userId) {
        return this.rest.post("/!api/permission/power", {
            group_id: groupId,
            user_id: userId
        });
    }
}
exports.PermissionApi = PermissionApi;

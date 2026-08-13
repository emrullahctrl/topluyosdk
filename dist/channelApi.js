"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelApi = void 0;
class ChannelApi {
    rest;
    constructor(rest) {
        this.rest = rest;
    }
    ;
    async get(channelId) {
        return this.rest.post("!api/channel/get", { channel_id: channelId });
    }
    async create(data) {
        return this.rest.post("!api/channel/add", data);
    }
    async delete(channel_id) {
        return this.rest.post("/!api/channel/del", { channel_id: channel_id });
    }
    async detail(channel_id) {
        return this.rest.post("/!api/channel/detail", { channel_id: channel_id });
    }
    async list(group_id) {
        return this.rest.post("/!api/channel/list", { group_id: group_id });
    }
    async setOptions(channelId, options) {
        return this.rest.post("/!api/channel/options/set", {
            channel_id: channelId,
            ...options
        });
    }
    async edit(channelId, options) {
        return this.rest.post("/!api/channel/set", {
            channel_id: channelId,
            ...options
        });
    }
    async show(groupNick, channelNick) {
        return this.rest.post("/!api/channel/show", {
            group_nick: groupNick,
            channel_nick: channelNick
        });
    }
    async showInfoById(channelId) {
        return this.rest.post("/!api/channel/show/info", {
            channel_id: channelId
        });
    }
    async showInfoByNick(groupNick, channelNick) {
        return this.rest.post("/!api/channel/show/info", {
            group_nick: groupNick,
            channel_nick: channelNick
        });
    }
    async sort(groupId, crewIds) {
        const formattedIds = Array.isArray(crewIds) ? crewIds.join(",") : crewIds;
        return this.rest.post("/!api/crew/sort", {
            group_id: groupId,
            crew_ids: formattedIds
        });
    }
}
exports.ChannelApi = ChannelApi;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostApi = void 0;
class PostApi {
    rest;
    constructor(rest) {
        this.rest = rest;
    }
    async addByChannelId(channelId, options) {
        return this.rest.post("/!api/post/add", {
            channel_id: channelId,
            ...options
        });
    }
    async addByNick(groupNick, channelNick, options) {
        return this.rest.post("/!api/post/add", {
            group_nick: groupNick,
            channel_nick: channelNick,
            ...options
        });
    }
    async bumote(postId, code = "") {
        return this.rest.post("/!api/post/bumote", {
            post_id: postId,
            code: code
        });
    }
    async delete(postId) {
        return this.rest.post("/!api/post/del", {
            post_id: postId
        });
    }
    async get(postId) {
        return this.rest.post("/!api/post/get", {
            post_id: postId
        });
    }
    async listByChannelId(channelId, options = {}) {
        return this.rest.post("/!api/post/list", {
            channel_id: channelId,
            ...options
        });
    }
    async listByNick(groupNick, channelNick, options = {}) {
        return this.rest.post("/!api/post/list", {
            group_nick: groupNick,
            channel_nick: channelNick,
            ...options
        });
    }
    async editById(postId, text) {
        return this.rest.post("/!api/post/set", {
            post_id: postId,
            text: text
        });
    }
    async editByCode(channelId, code, text) {
        return this.rest.post("/!api/post/set", {
            channel_id: channelId,
            code: code,
            text: text
        });
    }
}
exports.PostApi = PostApi;

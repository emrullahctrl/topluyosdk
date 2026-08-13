"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupApi = void 0;
class GroupApi {
    rest;
    constructor(rest) {
        this.rest = rest;
    }
    async add(options) {
        return this.rest.post("/!api/group/add", options);
    }
    async delete(groupId) {
        return this.rest.post("/!api/group/del", {
            group_id: groupId
        });
    }
    async founder(groupId) {
        return this.rest.post("/!api/group/founder", {
            group_id: groupId
        });
    }
    async getById(id) {
        return this.rest.post("/!api/group/get", { id: id });
    }
    async getByNick(nick) {
        return this.rest.post("/!api/group/get", { nick: nick });
    }
    async join(groupId) {
        return this.rest.post("/!api/group/join", { group_id: groupId });
    }
    async joinList(groupId) {
        return this.rest.post("/!api/group/joinlist", { group_id: groupId });
    }
    async leave(groupId) {
        return this.rest.post("/!api/group/leave", { group_id: groupId });
    }
    async list() {
        return this.rest.post("/!api/group/list", {});
    }
    async online(groupId) {
        return this.rest.post("/!api/group/online", { group_id: groupId });
    }
    async popular() {
        return this.rest.post("/!api/group/popular", {});
    }
    async set(groupId, options) {
        return this.rest.post("/!api/group/set", {
            group_id: groupId,
            ...options
        });
    }
    async setHome(groupId, homeContent) {
        return this.rest.post("/!api/group/set/home", {
            group_id: groupId,
            home: homeContent
        });
    }
    async setPermissions(groupId, options) {
        return this.rest.post("/!api/group/set/permissions", {
            group_id: groupId,
            ...options
        });
    }
    async setProfile(groupId, options) {
        return this.rest.post("/!api/group/set/profile", {
            group_id: groupId,
            ...options
        });
    }
    async setSocials(groupId, options) {
        return this.rest.post("/!api/group/set/socials", {
            group_id: groupId, // API payload'unda yazmasa bile backend muhtemelen bunu bekleyecektir
            ...options
        });
    }
    async sort(groupIds) {
        return this.rest.post("/!api/group/sort", {
            group_ids: groupIds.join(",")
        });
    }
}
exports.GroupApi = GroupApi;

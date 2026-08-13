"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberApi = void 0;
class MemberApi {
    rest;
    constructor(rest) {
        this.rest = rest;
    }
    async getById(groupId, userId) {
        return this.rest.post("/!api/member/get", {
            group_id: groupId,
            user_id: userId
        });
    }
    async getByNick(groupId, userNick) {
        return this.rest.post("/!api/member/get", {
            group_id: groupId,
            user_nick: userNick
        });
    }
    async info(groupId) {
        return this.rest.post("/!api/member/info", {
            group_id: groupId
        });
    }
    async list(groupId) {
        return this.rest.post("/!api/member/list", {
            group_id: groupId
        });
    }
    async kick(groupId, userId) {
        return this.rest.post("/!api/member/kick", {
            group_id: groupId,
            user_id: userId
        });
    }
    async setRoles(groupId, userId, roleIds) {
        const formattedRoleIds = Array.isArray(roleIds) ? roleIds.join(",") : roleIds;
        return this.rest.post("/!api/member/role/set", {
            group_id: groupId,
            user_id: userId,
            role_ids: formattedRoleIds
        });
    }
    async acceptWaiter(groupId, userId) {
        return this.rest.post("/!api/member/waiter/accept", {
            group_id: groupId,
            user_id: userId
        });
    }
    async rejectWaiter(groupId, userId) {
        return this.rest.post("/!api/member/waiter/reject", {
            group_id: groupId,
            user_id: userId
        });
    }
}
exports.MemberApi = MemberApi;

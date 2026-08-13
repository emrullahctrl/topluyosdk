"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleApi = void 0;
class RoleApi {
    rest;
    constructor(rest) {
        this.rest = rest;
    }
    async add(options) {
        return this.rest.post("/!api/role/add", options);
    }
    async delete(roleId) {
        return this.rest.post("/!api/role/del", {
            role_id: roleId
        });
    }
    async get(roleId) {
        return this.rest.post("/!api/role/get", {
            role_id: roleId
        });
    }
    async list(groupId) {
        return this.rest.post("/!api/role/list", {
            group_id: groupId
        });
    }
    async set(roleId, options) {
        return this.rest.post("/!api/role/set", {
            role_id: roleId,
            ...options
        });
    }
    async sort(groupId, roleIds) {
        const formattedRoleIds = Array.isArray(roleIds) ? roleIds.join(",") : roleIds;
        return this.rest.post("/!api/role/sort", {
            group_id: groupId,
            role_ids: formattedRoleIds
        });
    }
}
exports.RoleApi = RoleApi;

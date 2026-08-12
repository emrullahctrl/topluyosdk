import { RestClient } from "./RestClient";
import { RoleData, CreateRoleOptions, SetRoleOptions } from "./types";

export class RoleApi {
    constructor(private rest: RestClient) {}

    async add(options: CreateRoleOptions) {
        return this.rest.post<number>("/!api/role/add", options);
    }

    async delete(roleId: number) {
        return this.rest.post("/!api/role/del", { 
            role_id: roleId 
        });
    }

    async get(roleId: number) {
        return this.rest.post<RoleData>("/!api/role/get", { 
            role_id: roleId 
        });
    }

    async list(groupId: number) {
        return this.rest.post<RoleData[]>("/!api/role/list", { 
            group_id: groupId 
        });
    }

    async set(roleId: number, options: SetRoleOptions) {
        return this.rest.post("/!api/role/set", {
            role_id: roleId,
            ...options
        });
    }

    async sort(groupId: number, roleIds: number[] | string) {
        const formattedRoleIds = Array.isArray(roleIds) ? roleIds.join(",") : roleIds;
        return this.rest.post("/!api/role/sort", {
            group_id: groupId,
            role_ids: formattedRoleIds
        });
    }
}
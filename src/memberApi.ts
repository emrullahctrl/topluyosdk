import { RestClient } from "./RestClient";
import { MemberData, MemberInfoData } from "./types";

export class MemberApi {
    constructor(private rest: RestClient) {}

    async getById(groupId: number, userId: number) {
        return this.rest.post<MemberData>("/!api/member/get", { 
            group_id: groupId, 
            user_id: userId 
        });
    }

    async getByNick(groupId: number, userNick: string) {
        return this.rest.post<MemberData>("/!api/member/get", { 
            group_id: groupId, 
            user_nick: userNick 
        });
    }

    async info(groupId: number) {
        return this.rest.post<MemberInfoData>("/!api/member/info", { 
            group_id: groupId 
        });
    }

    async list(groupId: number) {
        return this.rest.post<MemberData[]>("/!api/member/list", { 
            group_id: groupId 
        });
    }

    async kick(groupId: number, userId: number) {
        return this.rest.post("/!api/member/kick", { 
            group_id: groupId, 
            user_id: userId 
        });
    }

    async setRoles(groupId: number, userId: number, roleIds: number[] | string) {
        const formattedRoleIds = Array.isArray(roleIds) ? roleIds.join(",") : roleIds;
        
        return this.rest.post("/!api/member/role/set", {
            group_id: groupId,
            user_id: userId,
            role_ids: formattedRoleIds
        });
    }

    async acceptWaiter(groupId: number, userId: number) {
        return this.rest.post("/!api/member/waiter/accept", { 
            group_id: groupId, 
            user_id: userId 
        });
    }

    async rejectWaiter(groupId: number, userId: number) {
        return this.rest.post("/!api/member/waiter/reject", { 
            group_id: groupId, 
            user_id: userId 
        });
    }
}
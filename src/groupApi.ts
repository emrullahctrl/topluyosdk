import { RestClient } from "./RestClient";
import { UserData, GroupData } from "./types";

export interface CreateGroupOptions {
    name: string;
    description?: string;
}

export interface GroupPermissionsOptions {
    discover_me?: number;
    everyone_member?: number;
    abuse_filter?: number;
    enable_ads?: number;
}

export interface GroupProfileOptions {
    name?: string;
    image?: string;
    description?: string;
}

export interface GroupSocialsOptions {
    social_instagram?: string;
    social_x?: string;
    social_youtube?: string;
    social_tiktok?: string;
    social_kick?: string;
    social_twitch?: string;
    social_github?: string;
    social_steam?: string;
    social_linkedin?: string;
    social_website?: string;
}

export class GroupApi {
    constructor(private rest: RestClient) { }

    async add(options: CreateGroupOptions) {
        return this.rest.post<number>("/!api/group/add", options);
    }

    async delete(groupId: number) {
        return this.rest.post("/!api/group/del", {
            group_id: groupId
        });
    }

    async founder(groupId: number) {
        return this.rest.post<UserData>("/!api/group/founder", {
            group_id: groupId
        });
    }

    async getById(id: number) {
        return this.rest.post<GroupData>("/!api/group/get", { id: id });
    }

    async getByNick(nick: string) {
        return this.rest.post<GroupData>("/!api/group/get", { nick: nick });
    }

    async join(groupId: number) {
        return this.rest.post("/!api/group/join", { group_id: groupId });
    }

    async joinList(groupId: number) {
        return this.rest.post<UserData[]>("/!api/group/joinlist", { group_id: groupId });
    }

    async leave(groupId: number) {
        return this.rest.post("/!api/group/leave", { group_id: groupId });
    }

    async list() {
        return this.rest.post<GroupData[]>("/!api/group/list", {});
    }

    async online(groupId: number) {
        return this.rest.post<number[]>("/!api/group/online", { group_id: groupId });
    }

    async popular() {
        return this.rest.post<GroupData[]>("/!api/group/popular", {});
    }

    async set(groupId: number, options: Record<string, unknown>) {
        return this.rest.post("/!api/group/set", {
            group_id: groupId,
            ...options
        });
    }

    async setHome(groupId: number, homeContent: string) {
        return this.rest.post("/!api/group/set/home", {
            group_id: groupId,
            home: homeContent
        });
    }

    async setPermissions(groupId: number, options: GroupPermissionsOptions) {
        return this.rest.post("/!api/group/set/permissions", {
            group_id: groupId,
            ...options
        });
    }

    async setProfile(groupId: number, options: GroupProfileOptions) {
        return this.rest.post("/!api/group/set/profile", {
            group_id: groupId,
            ...options
        });
    }

    async setSocials(groupId: number, options: GroupSocialsOptions) {
        return this.rest.post("/!api/group/set/socials", {
            group_id: groupId, // API payload'unda yazmasa bile backend muhtemelen bunu bekleyecektir
            ...options
        });
    }

    async sort(groupIds: number[]) {
        return this.rest.post("/!api/group/sort", {
            group_ids: groupIds.join(",")
        });
    }
}
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
export declare class GroupApi {
    private rest;
    constructor(rest: RestClient);
    add(options: CreateGroupOptions): Promise<import("./types").ApiResponse<number>>;
    delete(groupId: number): Promise<import("./types").ApiResponse<unknown>>;
    founder(groupId: number): Promise<import("./types").ApiResponse<UserData>>;
    getById(id: number): Promise<import("./types").ApiResponse<GroupData>>;
    getByNick(nick: string): Promise<import("./types").ApiResponse<GroupData>>;
    join(groupId: number): Promise<import("./types").ApiResponse<unknown>>;
    joinList(groupId: number): Promise<import("./types").ApiResponse<UserData[]>>;
    leave(groupId: number): Promise<import("./types").ApiResponse<unknown>>;
    list(): Promise<import("./types").ApiResponse<GroupData[]>>;
    online(groupId: number): Promise<import("./types").ApiResponse<number[]>>;
    popular(): Promise<import("./types").ApiResponse<GroupData[]>>;
    set(groupId: number, options: Record<string, unknown>): Promise<import("./types").ApiResponse<unknown>>;
    setHome(groupId: number, homeContent: string): Promise<import("./types").ApiResponse<unknown>>;
    setPermissions(groupId: number, options: GroupPermissionsOptions): Promise<import("./types").ApiResponse<unknown>>;
    setProfile(groupId: number, options: GroupProfileOptions): Promise<import("./types").ApiResponse<unknown>>;
    setSocials(groupId: number, options: GroupSocialsOptions): Promise<import("./types").ApiResponse<unknown>>;
    sort(groupIds: number[]): Promise<import("./types").ApiResponse<unknown>>;
}

import { RestClient } from "./RestClient";
import { MemberData, MemberInfoData } from "./types";
export declare class MemberApi {
    private rest;
    constructor(rest: RestClient);
    getById(groupId: number, userId: number): Promise<import("./types").ApiResponse<MemberData>>;
    getByNick(groupId: number, userNick: string): Promise<import("./types").ApiResponse<MemberData>>;
    info(groupId: number): Promise<import("./types").ApiResponse<MemberInfoData>>;
    list(groupId: number): Promise<import("./types").ApiResponse<MemberData[]>>;
    kick(groupId: number, userId: number): Promise<import("./types").ApiResponse<unknown>>;
    setRoles(groupId: number, userId: number, roleIds: number[] | string): Promise<import("./types").ApiResponse<unknown>>;
    acceptWaiter(groupId: number, userId: number): Promise<import("./types").ApiResponse<unknown>>;
    rejectWaiter(groupId: number, userId: number): Promise<import("./types").ApiResponse<unknown>>;
}

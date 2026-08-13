import { RestClient } from "./RestClient";
import { RoleData, CreateRoleOptions, SetRoleOptions } from "./types";
export declare class RoleApi {
    private rest;
    constructor(rest: RestClient);
    add(options: CreateRoleOptions): Promise<import("./types").ApiResponse<number>>;
    delete(roleId: number): Promise<import("./types").ApiResponse<unknown>>;
    get(roleId: number): Promise<import("./types").ApiResponse<RoleData>>;
    list(groupId: number): Promise<import("./types").ApiResponse<RoleData[]>>;
    set(roleId: number, options: SetRoleOptions): Promise<import("./types").ApiResponse<unknown>>;
    sort(groupId: number, roleIds: number[] | string): Promise<import("./types").ApiResponse<unknown>>;
}

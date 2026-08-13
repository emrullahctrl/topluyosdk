import { RestClient } from "./RestClient";
import { TeamData } from "./types";
export declare class TeamApi {
    private rest;
    constructor(rest: RestClient);
    list(groupId: number): Promise<import("./types").ApiResponse<TeamData[]>>;
}

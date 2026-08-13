import { RestClient } from "./RestClient";
export interface CrewData {
    id: number;
    group_id: number;
    name: string;
    color: string;
    image: string;
    order?: number;
}
export interface CreateCrewOptions {
    group_id: number;
    name: string;
    color?: string;
    image?: string;
}
export interface SetCrewOptions {
    name?: string;
    color?: string;
    image?: string;
}
export declare class CrewApi {
    private rest;
    constructor(rest: RestClient);
    add(options: CreateCrewOptions): Promise<import("./types").ApiResponse<number>>;
    delete(crewId: number): Promise<import("./types").ApiResponse<unknown>>;
    get(crewId: number): Promise<import("./types").ApiResponse<CrewData>>;
    join(crewId: number): Promise<import("./types").ApiResponse<unknown>>;
    leave(crewId: number): Promise<import("./types").ApiResponse<unknown>>;
    list(groupId: number): Promise<import("./types").ApiResponse<CrewData[]>>;
    set(crewId: number, options: SetCrewOptions): Promise<import("./types").ApiResponse<unknown>>;
    sort(groupId: number, crewIds: number[]): Promise<import("./types").ApiResponse<unknown>>;
}

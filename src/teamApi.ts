import { RestClient } from "./RestClient";
import { TeamData } from "./types";

export class TeamApi {
    constructor(private rest: RestClient) {}

    async list(groupId: number) {
        return this.rest.post<TeamData[]>("/!api/team/list", { 
            group_id: groupId 
        });
    }
}
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

export class CrewApi {
    constructor(private rest: RestClient) { }

    async add(options: CreateCrewOptions) {
        return this.rest.post<number>("/!api/crew/add", options);
    }

    async delete(crewId: number) {
        return this.rest.post("/!api/crew/del", {
            crew_id: crewId
        });
    }

    async get(crewId: number) {
        return this.rest.post<CrewData>("/!api/crew/get", {
            crew_id: crewId
        });
    }

    async join(crewId: number) {
        return this.rest.post("/!api/crew/join", {
            crew_id: crewId
        });
    }

    async leave(crewId: number) {
        return this.rest.post("/!api/crew/leave", {
            crew_id: crewId
        });
    }

    async list(groupId: number) {
        return this.rest.post<CrewData[]>("/!api/crew/list", {
            group_id: groupId
        });
    }

    async set(crewId: number, options: SetCrewOptions) {
        return this.rest.post("/!api/crew/set", {
            crew_id: crewId,
            ...options
        });
    }

    async sort(groupId: number, crewIds: number[]) {
        return this.rest.post("/!api/crew/sort", {
            group_id: groupId,
            crew_ids: crewIds.join(",")
        });
    }
}
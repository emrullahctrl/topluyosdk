"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrewApi = void 0;
class CrewApi {
    rest;
    constructor(rest) {
        this.rest = rest;
    }
    async add(options) {
        return this.rest.post("/!api/crew/add", options);
    }
    async delete(crewId) {
        return this.rest.post("/!api/crew/del", {
            crew_id: crewId
        });
    }
    async get(crewId) {
        return this.rest.post("/!api/crew/get", {
            crew_id: crewId
        });
    }
    async join(crewId) {
        return this.rest.post("/!api/crew/join", {
            crew_id: crewId
        });
    }
    async leave(crewId) {
        return this.rest.post("/!api/crew/leave", {
            crew_id: crewId
        });
    }
    async list(groupId) {
        return this.rest.post("/!api/crew/list", {
            group_id: groupId
        });
    }
    async set(crewId, options) {
        return this.rest.post("/!api/crew/set", {
            crew_id: crewId,
            ...options
        });
    }
    async sort(groupId, crewIds) {
        return this.rest.post("/!api/crew/sort", {
            group_id: groupId,
            crew_ids: crewIds
        });
    }
}
exports.CrewApi = CrewApi;

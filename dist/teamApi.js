"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamApi = void 0;
class TeamApi {
    rest;
    constructor(rest) {
        this.rest = rest;
    }
    async list(groupId) {
        return this.rest.post("/!api/team/list", {
            group_id: groupId
        });
    }
}
exports.TeamApi = TeamApi;

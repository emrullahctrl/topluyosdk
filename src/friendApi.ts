import { RestClient } from "./RestClient";

export class FriendApi {
    constructor(private rest: RestClient) {}

    async add(userId: number) {
        return this.rest.post("/!api/friend/add", { 
            user_id: userId 
        });
    }

    async delete(userId: number) {
        return this.rest.post("/!api/friend/del", { 
            user_id: userId 
        });
    }

    async status(userId: number) {
        return this.rest.post<string>("/!api/friend/status", { 
            user_id: userId 
        });
    }
}
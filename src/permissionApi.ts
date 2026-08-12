import { RestClient } from "./RestClient";

export class PermissionApi {
    constructor(private rest: RestClient) {}

    async channel(channelId: number, userId: number) {
        return this.rest.post<number>("/!api/permission/channel", { 
            channel_id: channelId, 
            user_id: userId 
        });
    }

    async power(groupId: number, userId: number) {
        return this.rest.post<number>("/!api/permission/power", { 
            group_id: groupId, 
            user_id: userId 
        });
    }
}
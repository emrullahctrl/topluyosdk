import { RestClient } from "./RestClient";
import { ChannelData } from "./channelApi";

export class FavoriteApi {
    constructor(private rest: RestClient) {}

    async list() {
        return this.rest.post<ChannelData[]>("/!api/favorite/list", {});
    }

    async toggle(channelId: number) {
        return this.rest.post("/!api/favorite/toggle", { 
            channel_id: channelId 
        });
    }
}
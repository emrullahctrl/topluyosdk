import { RestClient } from "./RestClient";
import { ParkData } from "./types";

export class ParkApi {
    constructor(private rest: RestClient) {}

    async set(channelId: number, key: string, val: string) {
        return this.rest.post("/!api/park/set", {
            channel_id: channelId,
            key: key,
            val: val
        });
    }

    async list(channelId: number, key: string = "*") {
        return this.rest.post<ParkData[]>("/!api/park/list", {
            channel_id: channelId,
            key: key
        });
    }

    async delete(channelId: number, key: string = "*") {
        return this.rest.post("/!api/park/del", {
            channel_id: channelId,
            key: key
        });
    }
}
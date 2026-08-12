import { RestClient } from "./RestClient";
import { PostData, AddPostOptions, ListPostOptions } from "./types";

export class PostApi {
    constructor(private rest: RestClient) {}

    async addByChannelId(channelId: number, options: AddPostOptions) {
        return this.rest.post<number>("/!api/post/add", { 
            channel_id: channelId, 
            ...options 
        });
    }

    async addByNick(groupNick: string, channelNick: string, options: AddPostOptions) {
        return this.rest.post<number>("/!api/post/add", { 
            group_nick: groupNick, 
            channel_nick: channelNick, 
            ...options 
        });
    }

    async bumote(postId: number, code: string = "") {
        return this.rest.post("/!api/post/bumote", { 
            post_id: postId, 
            code: code 
        });
    }

    async delete(postId: number) {
        return this.rest.post("/!api/post/del", { 
            post_id: postId 
        });
    }

    async get(postId: number) {
        return this.rest.post<PostData>("/!api/post/get", { 
            post_id: postId 
        });
    }

    async listByChannelId(channelId: number, options: ListPostOptions = {}) {
        return this.rest.post<PostData[]>("/!api/post/list", { 
            channel_id: channelId, 
            ...options 
        });
    }

    async listByNick(groupNick: string, channelNick: string, options: ListPostOptions = {}) {
        return this.rest.post<PostData[]>("/!api/post/list", { 
            group_nick: groupNick, 
            channel_nick: channelNick, 
            ...options 
        });
    }

    async editById(postId: number, text: string) {
        return this.rest.post("/!api/post/set", { 
            post_id: postId, 
            text: text 
        });
    }

    async editByCode(channelId: number, code: string, text: string) {
        return this.rest.post("/!api/post/set", { 
            channel_id: channelId, 
            code: code, 
            text: text 
        });
    }
}
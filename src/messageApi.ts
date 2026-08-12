import { RestClient } from "./RestClient";
import { MessageData, ChatListItem } from "./types";

export class MessageApi {
    constructor(private rest: RestClient) {}

    async get(userId: number) {
        return this.rest.post<MessageData[]>("/!api/message/get", { 
            user_id: userId 
        });
    }

    async getFromUser(userId: number) {
        return this.rest.post<MessageData[]>("/!api/message/get/user", { 
            user_id: userId 
        });
    }

    async listUserMessages() {
        return this.rest.post<ChatListItem[]>("/!api/message/list/user", {});
    }

    async read(userId: number) {
        return this.rest.post("/!api/message/read", { 
            user_id: userId 
        });
    }

    async send(userId: number, message: string) {
        return this.rest.post("/!api/message/send", { 
            user_id: userId,
            message: message 
        });
    }
}
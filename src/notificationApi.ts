import { RestClient } from "./RestClient";
import { NotificationData } from "./types";

export class NotificationApi {
    constructor(private rest: RestClient) {}

    async getPushKey() {
        return this.rest.post<string>("/!api/notification/get/push/key", {});
    }

    async list() {
        return this.rest.post<NotificationData[]>("/!api/notification/list", {});
    }

    async read(notificationId: number) {
        return this.rest.post("/!api/notification/read", { 
            id: notificationId 
        });
    }

    async readAll(type: number = 0) {
        return this.rest.post("/!api/notification/read/all", { 
            type: type 
        });
    }

    async setPushEndpoint(endpointString: string) {
        return this.rest.post("/!api/notification/set/push/endpoint", { 
            endpoint: endpointString 
        });
    }
}
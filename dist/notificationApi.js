"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationApi = void 0;
class NotificationApi {
    rest;
    constructor(rest) {
        this.rest = rest;
    }
    async getPushKey() {
        return this.rest.post("/!api/notification/get/push/key", {});
    }
    async list() {
        return this.rest.post("/!api/notification/list", {});
    }
    async read(notificationId) {
        return this.rest.post("/!api/notification/read", {
            id: notificationId
        });
    }
    async readAll(type = 0) {
        return this.rest.post("/!api/notification/read/all", {
            type: type
        });
    }
    async setPushEndpoint(endpointString) {
        return this.rest.post("/!api/notification/set/push/endpoint", {
            endpoint: endpointString
        });
    }
}
exports.NotificationApi = NotificationApi;

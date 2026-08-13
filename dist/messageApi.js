"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageApi = void 0;
class MessageApi {
    rest;
    constructor(rest) {
        this.rest = rest;
    }
    async get(userId) {
        return this.rest.post("/!api/message/get", {
            user_id: userId
        });
    }
    async getFromUser(userId) {
        return this.rest.post("/!api/message/get/user", {
            user_id: userId
        });
    }
    async listUserMessages() {
        return this.rest.post("/!api/message/list/user", {});
    }
    async read(userId) {
        return this.rest.post("/!api/message/read", {
            user_id: userId
        });
    }
    async send(userId, message) {
        return this.rest.post("/!api/message/send", {
            user_id: userId,
            message: message
        });
    }
}
exports.MessageApi = MessageApi;

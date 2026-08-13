"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicApi = void 0;
class PublicApi {
    rest;
    constructor(rest) {
        this.rest = rest;
    }
    async search(text) {
        return this.rest.post("/!api/public/search", {
            text: text
        });
    }
    async isNickAvailable(nick) {
        return this.rest.post("/!api/public/usernickavailable", {
            nick: nick
        });
    }
}
exports.PublicApi = PublicApi;

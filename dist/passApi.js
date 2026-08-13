"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassApi = void 0;
class PassApi {
    rest;
    constructor(rest) {
        this.rest = rest;
    }
    async get() {
        return this.rest.post("/!api/pass/get", {});
    }
    async use(passCode) {
        return this.rest.post("/!api/pass/use", {
            pass_code: passCode
        });
    }
}
exports.PassApi = PassApi;

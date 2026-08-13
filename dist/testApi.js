"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestApi = void 0;
class TestApi {
    rest;
    constructor(rest) {
        this.rest = rest;
    }
    async ip() {
        return this.rest.post("/!api/test/ip", {});
    }
    async time() {
        return this.rest.post("/!api/test/time", {});
    }
}
exports.TestApi = TestApi;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestClient = void 0;
class RestClient {
    baseUrl = "https://topluyo.com";
    token;
    constructor(token) {
        this.token = token;
    }
    buildUrl(endpoint) {
        return `${this.baseUrl}/${endpoint.replace(/^\/+/, "")}`;
    }
    async post(endpoint, body) {
        const url = this.buildUrl(endpoint);
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.token}`
            },
            body: JSON.stringify(body)
        });
        if (!response.ok) {
            throw new Error(`İstek başarısız. ${response.status}`);
        }
        return response.json();
    }
}
exports.RestClient = RestClient;

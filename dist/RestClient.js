"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestClient = exports.TopluyoApiError = void 0;
class TopluyoApiError extends Error {
    status;
    data;
    constructor(status, data) {
        const message = typeof data === "object" &&
            data !== null &&
            "message" in data &&
            typeof data.message === "string"
            ? data.message
            : `Topluyo API request failed with status ${status}`;
        super(message);
        this.status = status;
        this.data = data;
        this.name = "TopluyoApiError";
    }
}
exports.TopluyoApiError = TopluyoApiError;
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
        const text = await response.text();
        let data = null;
        if (text) {
            try {
                data = JSON.parse(text);
            }
            catch {
                data = text;
            }
        }
        if (!response.ok) {
            let data;
            try {
                data = await response.json();
            }
            catch {
                data = null;
            }
            throw new TopluyoApiError(response.status, data);
        }
        return data;
    }
}
exports.RestClient = RestClient;

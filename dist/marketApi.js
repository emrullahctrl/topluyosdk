"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketApi = void 0;
class MarketApi {
    rest;
    constructor(rest) {
        this.rest = rest;
    }
    async getApiKey(appId) {
        return this.rest.post("/!api/market/api/get", { app_id: appId });
    }
    async resetApiKey() {
        return this.rest.post("/!api/market/api/reset", {});
    }
    async addApp(options) {
        return this.rest.post("/!api/market/add", options);
    }
    async installApp(appId, groupId) {
        return this.rest.post("/!api/market/app/install", {
            app_id: appId,
            group_id: groupId
        });
    }
    async getApp(appId) {
        return this.rest.post("/!api/market/get", {
            app_id: appId
        });
    }
    async hideApp(appId) {
        return this.rest.post("/!api/market/hide", {
            app_id: appId
        });
    }
    async myApps() {
        return this.rest.post("/!api/market/myapps", {});
    }
    async list(options = {}) {
        let formattedAppTypeIds = options.app_type_ids;
        if (Array.isArray(options.app_type_ids)) {
            formattedAppTypeIds = options.app_type_ids.join(",");
        }
        return this.rest.post("/!api/market/list", {
            ...options,
            app_type_ids: formattedAppTypeIds
        });
    }
    async addComment(appId, options) {
        return this.rest.post("/!api/market/comment/add", {
            app_id: appId,
            ...options
        });
    }
    async listComments(appId) {
        return this.rest.post("/!api/market/comment/list", {
            app_id: appId
        });
    }
    async addToLibrary(appId) {
        return this.rest.post("/!api/market/library/add", { app_id: appId });
    }
    async removeFromLibrary(appId) {
        return this.rest.post("/!api/market/library/del", { app_id: appId });
    }
    async listLibrary() {
        return this.rest.post("/!api/market/library/list", {});
    }
    async getPublisher(publisherId) {
        return this.rest.post("/!api/market/publisher/get", {
            publisher_id: publisherId
        });
    }
    async getRevision(appId) {
        return this.rest.post("/!api/market/revision/get", {
            app_id: appId
        });
    }
    async publishRevision(appId) {
        return this.rest.post("/!api/market/revision/publish", {
            app_id: appId
        });
    }
    async setRevisionContent(appId, options) {
        return this.rest.post("/!api/market/revision/set/content", {
            app_id: appId,
            ...options
        });
    }
    async setRevisionDetail(appId, options) {
        return this.rest.post("/!api/market/revision/set/detail", {
            app_id: appId,
            ...options
        });
    }
}
exports.MarketApi = MarketApi;

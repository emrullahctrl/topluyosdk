import { RestClient } from "./RestClient";
import { AppMarketData, MarketCommentData, AddCommentOptions, CreateAppOptions, ListMarketOptions, PublisherData, AppRevisionData, SetRevisionDetailOptions, SetRevisionContentOptions} from "./types";

export class MarketApi {
    constructor(private rest: RestClient) {}

    async getApiKey(appId: number) {
        return this.rest.post("/!api/market/api/get", { app_id: appId });
    }

    async resetApiKey() {
        return this.rest.post("/!api/market/api/reset", {});
    }

    async addApp(options: CreateAppOptions) {
        return this.rest.post<number>("/!api/market/add", options);
    }

    async installApp(appId: number, groupId: number) {
        return this.rest.post("/!api/market/app/install", { 
            app_id: appId, 
            group_id: groupId 
        });
    }

    async getApp(appId: number) {
        return this.rest.post<AppMarketData>("/!api/market/get", { 
            app_id: appId 
        });
    }

    async hideApp(appId: number) {
        return this.rest.post("/!api/market/hide", { 
            app_id: appId 
        });
    }

    async myApps() {
        return this.rest.post<AppMarketData[]>("/!api/market/myapps", {});
    }

    async list(options: ListMarketOptions = {}) {
        let formattedAppTypeIds = options.app_type_ids;
        if (Array.isArray(options.app_type_ids)) {
            formattedAppTypeIds = options.app_type_ids.join(",");
        }

        return this.rest.post<AppMarketData[]>("/!api/market/list", {
            ...options,
            app_type_ids: formattedAppTypeIds
        });
    }

    async addComment(appId: number, options: AddCommentOptions) {
        return this.rest.post("/!api/market/comment/add", { 
            app_id: appId, 
            ...options 
        });
    }

    async listComments(appId: number) {
        return this.rest.post<MarketCommentData[]>("/!api/market/comment/list", { 
            app_id: appId 
        });
    }

    async addToLibrary(appId: number) {
        return this.rest.post("/!api/market/library/add", { app_id: appId });
    }

    async removeFromLibrary(appId: number) {
        return this.rest.post("/!api/market/library/del", { app_id: appId });
    }

    async listLibrary() {
        return this.rest.post<AppMarketData[]>("/!api/market/library/list", {});
    }

    async getPublisher(publisherId: number) {
        return this.rest.post<PublisherData>("/!api/market/publisher/get", { 
            publisher_id: publisherId 
        });
    }

    async getRevision(appId: number) {
        return this.rest.post<AppRevisionData>("/!api/market/revision/get", { 
            app_id: appId 
        });
    }

    async publishRevision(appId: number) {
        return this.rest.post("/!api/market/revision/publish", { 
            app_id: appId 
        });
    }

    async setRevisionContent(appId: number, options: SetRevisionContentOptions) {
        return this.rest.post("/!api/market/revision/set/content", { 
            app_id: appId, 
            ...options 
        });
    }

    async setRevisionDetail(appId: number, options: SetRevisionDetailOptions) {
        return this.rest.post("/!api/market/revision/set/detail", { 
            app_id: appId, 
            ...options 
        });
    }
}
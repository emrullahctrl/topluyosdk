"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserApi = void 0;
class UserApi {
    rest;
    constructor(rest) {
        this.rest = rest;
    }
    async get2FaCode() {
        return this.rest.post("/!api/user/2fa/get", {});
    }
    async verify2Fa(code) {
        return this.rest.post("/!api/user/2fa/verify", { code });
    }
    async auth(options) {
        return this.rest.post("/!api/user/auth", options);
    }
    async login(options) {
        return this.rest.post("/!api/user/login", options);
    }
    async register(options) {
        return this.rest.post("/!api/user/register", options);
    }
    async verifyRegister(code) {
        return this.rest.post("/!api/user/register/verify", { code });
    }
    async logout() {
        return this.rest.post("/!api/user/logout", {});
    }
    async logoutByToken(token) {
        return this.rest.post("/!api/user/logout", { token });
    }
    async logoutOtherDevices(otherToken) {
        return this.rest.post("/!api/user/logout", { other: otherToken });
    }
    async getCurrentId() {
        return this.rest.post("/!api/user/id", {});
    }
    async getMyInfo() {
        return this.rest.post("/!api/user/info", {});
    }
    async getInfoById(id) {
        return this.rest.post("/!api/user/info", { id });
    }
    async getInfoByNick(nick) {
        return this.rest.post("/!api/user/info", { nick });
    }
    async getOwnedGroups() {
        return this.rest.post("/!api/user/groups", {});
    }
    async getGroupsByOwner(ownerId) {
        return this.rest.post("/!api/user/groups", { owner_id: ownerId });
    }
    async getDevices() {
        return this.rest.post("/!api/user/devices", {});
    }
    async getFriends() {
        return this.rest.post("/!api/user/friends", {});
    }
    async list(userIds) {
        const formattedIds = Array.isArray(userIds) ? userIds.join(",") : userIds;
        return this.rest.post("/!api/user/list", { user_ids: formattedIds });
    }
    async block(userId) {
        return this.rest.post("/!api/user/block", { user_id: userId });
    }
    async unblock(userId) {
        return this.rest.post("/!api/user/unblock", { user_id: userId });
    }
    async getBlockedUsers() {
        return this.rest.post("/!api/user/blocked/users", {});
    }
    async getWaitingList() {
        return this.rest.post("/!api/user/waiting/list", {});
    }
    async getNotificationInfo() {
        return this.rest.post("/!api/user/notification/info", {});
    }
    async setNotification(options) {
        return this.rest.post("/!api/user/notification/set", options);
    }
    async setLang(lang) {
        return this.rest.post("/!api/user/lang/set", { lang });
    }
    async setPrivacy(options) {
        return this.rest.post("/!api/user/set/privacy", options);
    }
    async setProfile(options) {
        return this.rest.post("/!api/user/set/profile", options);
    }
    async setSlide(appId) {
        return this.rest.post("/!api/user/set/slide", { app_id: appId });
    }
    async setSocials(options) {
        return this.rest.post("/!api/user/set/socials", options);
    }
    async passWithCode(code) {
        return this.rest.post("/!api/user/pass", { code });
    }
    async getQr(privateKey) {
        return this.rest.post("/!api/user/qr/get", { private_key: privateKey });
    }
    async setQr(publicKey) {
        return this.rest.post("/!api/user/qr/set", { public_key: publicKey });
    }
}
exports.UserApi = UserApi;

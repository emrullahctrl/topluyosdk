import { RestClient } from "./RestClient";
import { GroupData, AuthOptions, UserData, NotificationSettingsOptions, PrivacyOptions, ProfileOptions, UserSocialsOptions } from "./types";

export class UserApi {
    constructor(private rest: RestClient) {}

    async get2FaCode() {
        return this.rest.post("/!api/user/2fa/get", {});
    }

    async verify2Fa(code: string) {
        return this.rest.post("/!api/user/2fa/verify", { code });
    }

    async auth(options: AuthOptions) {
        return this.rest.post("/!api/user/auth", options);
    }

    async login(options: AuthOptions) {
        return this.rest.post("/!api/user/login", options);
    }

    async register(options: AuthOptions) {
        return this.rest.post("/!api/user/register", options);
    }

    async verifyRegister(code: string) {
        return this.rest.post("/!api/user/register/verify", { code });
    }

    async logout() {
        return this.rest.post("/!api/user/logout", {});
    }

    async logoutByToken(token: string) {
        return this.rest.post("/!api/user/logout", { token });
    }

    async logoutOtherDevices(otherToken: string) {
        return this.rest.post("/!api/user/logout", { other: otherToken });
    }

    async getCurrentId() {
        return this.rest.post<number>("/!api/user/id", {});
    }

    async getMyInfo() {
        return this.rest.post<UserData>("/!api/user/info", {});
    }

    async getInfoById(id: number) {
        return this.rest.post<UserData>("/!api/user/info", { id });
    }

    async getInfoByNick(nick: string) {
        return this.rest.post<UserData>("/!api/user/info", { nick });
    }

    async getOwnedGroups() {
        return this.rest.post<GroupData[]>("/!api/user/groups", {});
    }

    async getGroupsByOwner(ownerId: number) {
        return this.rest.post<GroupData[]>("/!api/user/groups", { owner_id: ownerId });
    }

    async getDevices() {
        return this.rest.post("/!api/user/devices", {});
    }

    async getFriends() {
        return this.rest.post<UserData[]>("/!api/user/friends", {});
    }

    async list(userIds: number[] | string) {
        const formattedIds = Array.isArray(userIds) ? userIds.join(",") : userIds;
        return this.rest.post<UserData[]>("/!api/user/list", { user_ids: formattedIds });
    }

    async block(userId: number) {
        return this.rest.post("/!api/user/block", { user_id: userId });
    }

    async unblock(userId: number) {
        return this.rest.post("/!api/user/unblock", { user_id: userId });
    }

    async getBlockedUsers() {
        return this.rest.post<UserData[]>("/!api/user/blocked/users", {});
    }

    async getWaitingList() {
        return this.rest.post("/!api/user/waiting/list", {});
    }

    async getNotificationInfo() {
        return this.rest.post("/!api/user/notification/info", {});
    }

    async setNotification(options: NotificationSettingsOptions) {
        return this.rest.post("/!api/user/notification/set", options);
    }

    async setLang(lang: string) {
        return this.rest.post("/!api/user/lang/set", { lang });
    }

    async setPrivacy(options: PrivacyOptions) {
        return this.rest.post("/!api/user/set/privacy", options);
    }

    async setProfile(options: ProfileOptions) {
        return this.rest.post("/!api/user/set/profile", options);
    }

    async setSlide(appId: number) {
        return this.rest.post("/!api/user/set/slide", { app_id: appId });
    }

    async setSocials(options: UserSocialsOptions) {
        return this.rest.post("/!api/user/set/socials", options);
    }

    async passWithCode(code: string) {
        return this.rest.post("/!api/user/pass", { code });
    }

    async getQr(privateKey: string) {
        return this.rest.post("/!api/user/qr/get", { private_key: privateKey });
    }

    async setQr(publicKey: string) {
        return this.rest.post("/!api/user/qr/set", { public_key: publicKey });
    }
}
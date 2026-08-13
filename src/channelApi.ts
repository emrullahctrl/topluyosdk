import { RestClient } from "./RestClient";

export interface ChannelData {
    id: number;
    nick: string;
    title: string;
    description: string;
    color: string;
    image: string;
    type: number;
    group_id: number;
    data: string;
    read_role_ids: string;
    write_role_ids: string;
    control_role_ids: string;
    read_plus_user_ids: string;
    read_minus_user_ids: string;
    write_plus_user_ids: string;
    write_minus_user_ids: string;
    control_plus_user_ids: string;
    control_minus_user_ids: string;

    order?: number;
    created_at?: string;
    updated_at?: string;
    group_nick?: string;
}
export interface ChannelDetailUser {
    id: number;
    name: string;
    nick: string;
    image: string;
}

export interface ChannelDetailData {
    control_minus_users: ChannelDetailUser[];
    control_plus_users: ChannelDetailUser[];
    read_minus_users: ChannelDetailUser[];
    read_plus_users: ChannelDetailUser[];
    write_minus_users: ChannelDetailUser[];
    write_plus_users: ChannelDetailUser[];
}

export interface CreateChannelOptions {
    group_id: number;
    nick: string;
    title?: string;
    description?: string;
    type?: number;
    data?: string;
    read_role_ids?: string;
    write_role_ids?: string;
    control_role_ids?: string;
    read_plus_user_ids?: string;
    read_minus_user_ids?: string;
    write_plus_user_ids?: string;
    write_minus_user_ids?: string;
    control_plus_user_ids?: string;
    control_minus_user_ids?: string;
}

export interface ChannelOptions {
    add_read_plus_user_id?: number;
    del_read_plus_user_id?: number;
    add_read_minus_user_id?: number;
    del_read_minus_user_id?: number;
    add_write_plus_user_id?: number;
    del_write_plus_user_id?: number;
    add_write_minus_user_id?: number;
    del_write_minus_user_id?: number;
    add_control_plus_user_id?: number;
    del_control_plus_user_id?: number;
    add_control_minus_user_id?: number;
    del_control_minus_user_id?: number;
}

export interface SetChannelOptions {
    nick: string;
    title?: string;
    description?: string;
    type?: number;
    data?: string;
    read_role_ids?: string;
    write_role_ids?: string;
    control_role_ids?: string;
    read_plus_user_ids?: string;
    read_minus_user_ids?: string;
    write_plus_user_ids?: string;
    write_minus_user_ids?: string;
    control_plus_user_ids?: string;
    control_minus_user_ids?: string;
}

export interface ChannelPost {
    id: number;
    code: string;
    text: string;
    editor_user_id: number;
    user_id: number;
    nick: string;
    image: string;
    badges: string;
    created_at: number;
}

export interface ChannelShowData {
    channel: ChannelData;
    posts: ChannelPost[];
    power: number;
}

export class ChannelApi {
    constructor(private rest: RestClient) { };

    async get(channelId: number) {
        return this.rest.post<ChannelData>("!api/channel/get", { channel_id: channelId });
    }

    async create(data: CreateChannelOptions) {
        return this.rest.post<number>("!api/channel/add", data);
    }
    async delete(channel_id: number) {
        return this.rest.post("/!api/channel/del", { channel_id: channel_id });
    }

    async detail(channel_id: number) {
        return this.rest.post<ChannelDetailData>("/!api/channel/detail", { channel_id: channel_id });
    }

    async list(group_id: number) {
        return this.rest.post("/!api/channel/list", { group_id: group_id })
    }

    async setOptions(channelId: number, options: ChannelOptions) {
        return this.rest.post("/!api/channel/options/set", {
            channel_id: channelId,
            ...options
        })
    }

    async edit(channelId: number, options: SetChannelOptions) {
        return this.rest.post("/!api/channel/set", {
            channel_id: channelId,
            ...options
        })
    }

    async show(groupNick: string, channelNick: string) {
        return this.rest.post<ChannelShowData>("/!api/channel/show", {
            group_nick: groupNick,
            channel_nick: channelNick
        });
    }

    async showInfoById(channelId: number) {
        return this.rest.post<ChannelShowData>("/!api/channel/show/info", {
            channel_id: channelId
        });
    }

    async showInfoByNick(groupNick: string, channelNick: string) {
        return this.rest.post<ChannelShowData>("/!api/channel/show/info", {
            group_nick: groupNick,
            channel_nick: channelNick
        });
    }

    async sort(groupId: number, channelIds: number[]) {
        return this.rest.post("/!api/channel/sort", {
            group_id: groupId,
            channel_ids: channelIds.join(",")
        });
    }
}
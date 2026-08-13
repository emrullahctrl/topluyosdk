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
export declare class ChannelApi {
    private rest;
    constructor(rest: RestClient);
    get(channelId: number): Promise<import("./types").ApiResponse<ChannelData>>;
    create(data: CreateChannelOptions): Promise<import("./types").ApiResponse<number>>;
    delete(channel_id: number): Promise<import("./types").ApiResponse<unknown>>;
    detail(channel_id: number): Promise<import("./types").ApiResponse<ChannelDetailData>>;
    list(group_id: number): Promise<import("./types").ApiResponse<unknown>>;
    setOptions(channelId: number, options: ChannelOptions): Promise<import("./types").ApiResponse<unknown>>;
    edit(channelId: number, options: SetChannelOptions): Promise<import("./types").ApiResponse<unknown>>;
    show(groupNick: string, channelNick: string): Promise<import("./types").ApiResponse<ChannelShowData>>;
    showInfoById(channelId: number): Promise<import("./types").ApiResponse<ChannelShowData>>;
    showInfoByNick(groupNick: string, channelNick: string): Promise<import("./types").ApiResponse<ChannelShowData>>;
    sort(groupId: number, crewIds: number[] | string): Promise<import("./types").ApiResponse<unknown>>;
}

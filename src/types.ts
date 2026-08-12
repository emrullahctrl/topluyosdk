// shared
export interface ApiResponse<T> {
    status: string;
    data: T;
    message: string;
}

// user
export interface UserData {
    id: number;
    email?: string;
    nick: string;
    name: string;
    image: string;
    about_me?: string;
}

export interface AuthOptions {
    email: string;
    pass: string;
}

export interface ProfileOptions {
    image?: string;
    name?: string;
    nick?: string;
    about_me?: string;
}

export interface PrivacyOptions {
    everyone_call?: number;
    everyone_message?: number;
}

export interface UserSocialsOptions {
    social_instagram?: string;
    social_x?: string;
    social_youtube?: string;
    social_tiktok?: string;
    social_kick?: string;
    social_twitch?: string;
    social_github?: string;
    social_steam?: string;
    social_linkedin?: string;
    social_website?: string;
}

export interface PassUseData {
    id: number;
    nick: string;
    name: string;
    image: string;
}

// group
export interface GroupData {
    id: number;
    nick: string;
    name: string;
    description: string;
    image: string;
}

export interface MemberData {
    user_id: number;
    group_id: number;
    nick: string;
}

export interface MemberInfoData {}

// market
export interface AppMarketData {
    id: number;
    name: string;
    description: string;
    image: string;
    icon: string;
    app_type_id: number;
}

export interface MarketCommentData {
    id: number;
    app_id: number;
    rate: number;
    text: string;
}

export interface PublisherData {
    id: number;
    name: string;
}

export interface AppRevisionData {}

export interface CreateAppOptions {
    name: string;
    app_type_id: string | number;
    description: string;
}

export interface AddCommentOptions {
    rate: number;
    text: string;
}

export interface ListMarketOptions {
    app_type_ids?: string | number[];
    publisher_id?: number;
    search?: string;
    verified?: number;
    limit?: number;
}

export interface SetRevisionContentOptions {
    name?: string;
    description?: string;
    image?: string;
    icon?: string;
}

export interface SetRevisionDetailOptions {
    link?: string;
    css?: string;
    webhook?: string;
    app_type_id?: number | string;
}

// message
export interface MessageData {
    id: number;
    user_id: number;
    message: string;
    created_at: string;
}

export interface ChatListItem {
    user_id: number;
    last_message: string;
    unread_count: number;
}

// notification
export interface NotificationData {
    id: number;
    type: number;
    title: string;
    content: string;
    is_read: boolean;
    created_at: string;
}

export interface NotificationSettingsOptions {
    mention?: number;
    friendship?: number;
    news?: number;
    turbo?: number;
    message?: number;
}

// post
export interface PostData {
    id: number;
    channel_id: number;
    code: string;
    text: string;
    user_id: number;
    nick: string;
    image: string;
    badges: string;
    created_at: number;
}

export interface AddPostOptions {
    code?: string;
    text: string;
}

export interface ListPostOptions {
    after?: number;
    before?: number;
}

// role
export interface RoleData {
    id: number;
    group_id: number;
    name: string;
    color: string;
    power_group: number;
    power_role: number;
    power_channel: number;
    power_post: number;
    power_member: number;
    power_room: number;
    power_team: number;
    power_mention: number;
    order?: number;
}

export interface CreateRoleOptions {
    group_id: number;
    name: string;
    color?: string;
    power_group?: number;
    power_role?: number;
    power_channel?: number;
    power_post?: number;
    power_member?: number;
    power_room?: number;
    power_team?: number;
    power_mention?: number;
}

export interface SetRoleOptions {
    name?: string;
    color?: string;
    power_group?: number;
    power_role?: number;
    power_channel?: number;
    power_post?: number;
    power_member?: number;
    power_room?: number;
    power_team?: number;
    power_mention?: number;
}

// team
export interface TeamData {
    id: number;
    group_id: number;
    name: string;
}

// turbo
export interface TurboHistoryItem {
    id: number;
    user_id: number;
    quantity: number;
    message: string;
    created_at: string;
}

export interface TurboTransferOptions {
    user_id: number;
    quantity: number;
    message?: string;
}

export interface TurboHistoryOptions {
    limit?: number;
    offset?: number;
}

// park
export interface ParkData {
    channel_id: number;
    key: string;
    val: string;
}
import { RestClient } from "./RestClient";
import { ChannelApi } from "./channelApi";
import { GroupApi } from "./groupApi";
import { MarketApi } from "./marketApi";
import { MemberApi } from "./memberApi";
import { MessageApi } from "./messageApi";
import { NotificationApi } from "./notificationApi";
import { ParkApi } from "./parkApi";
import { PassApi } from "./passApi";
import { PermissionApi } from "./permissionApi";
import { PostApi } from "./postApi";
import { PublicApi } from "./publicApi";
import { RoleApi } from "./roleApi";
import { TeamApi } from "./teamApi";
import { TestApi } from "./testApi";
import { TurboApi } from "./turboApi";
import { UserApi } from "./userApi";

export class TopluyoSDK {
    public channel: ChannelApi;
    public group: GroupApi;
    public market: MarketApi;
    public member: MemberApi;
    public message: MessageApi;
    public notification: NotificationApi;
    public park: ParkApi;
    public pass: PassApi;
    public permission: PermissionApi;
    public post: PostApi;
    public public: PublicApi;
    public role: RoleApi;
    public team: TeamApi;
    public test: TestApi;
    public turbo: TurboApi;
    public user: UserApi;

    constructor(token: string) {
        const rest = new RestClient(token);

        this.channel = new ChannelApi(rest);
        this.group = new GroupApi(rest);
        this.market = new MarketApi(rest);
        this.member = new MemberApi(rest);
        this.message = new MessageApi(rest);
        this.notification = new NotificationApi(rest);
        this.park = new ParkApi(rest);
        this.pass = new PassApi(rest);
        this.permission = new PermissionApi(rest);
        this.post = new PostApi(rest);
        this.public = new PublicApi(rest);
        this.role = new RoleApi(rest);
        this.team = new TeamApi(rest);
        this.test = new TestApi(rest);
        this.turbo = new TurboApi(rest);
        this.user = new UserApi(rest);
    }
}
import { RestClient } from "./RestClient";
import { PassUseData } from "./types";
export declare class PassApi {
    private rest;
    constructor(rest: RestClient);
    get(): Promise<import("./types").ApiResponse<{
        pass_code: string;
    }>>;
    use(passCode: string): Promise<import("./types").ApiResponse<PassUseData>>;
}

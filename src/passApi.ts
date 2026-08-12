import { RestClient } from "./RestClient";
import { PassUseData } from "./types";

export class PassApi {
    constructor(private rest: RestClient) {}

    async get() {
        return this.rest.post<{ pass_code: string }>("/!api/pass/get", {});
    }

    async use(passCode: string) {
        return this.rest.post<PassUseData>("/!api/pass/use", { 
            pass_code: passCode 
        });
    }
}
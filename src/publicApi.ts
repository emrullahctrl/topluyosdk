import { RestClient } from "./RestClient";

export class PublicApi {
    constructor(private rest: RestClient) {}

    async search(text: string) {
        return this.rest.post<any>("/!api/public/search", { 
            text: text 
        });
    }

    async isNickAvailable(nick: string) {
        return this.rest.post<number>("/!api/public/usernickavailable", { 
            nick: nick 
        });
    }
}
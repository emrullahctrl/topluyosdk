import { RestClient } from "./RestClient";

export class TestApi {
    constructor(private rest: RestClient) {}

    async ip() {
        return this.rest.post<{ ip: string }>("/!api/test/ip", {});
    }

    async time() {
        return this.rest.post<{ time: number }>("/!api/test/time", {});
    }
}
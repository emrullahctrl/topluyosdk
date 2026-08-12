import { ApiResponse } from "./types";

export class RestClient {

    private baseUrl = "https://topluyo.com";
    private token: string;

    constructor(token: string) {
        this.token = token;
    }

    private buildUrl(endpoint: string) {
        return `${this.baseUrl}/${endpoint.replace(/^\/+/, "")}`;
    }

    async post<T>(endpoint: string, body: object): Promise<ApiResponse<T>> {
        const url = this.buildUrl(endpoint);

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.token}`
            },
            body: JSON.stringify(body)
        });
        if (!response.ok) {
            throw new Error(`İstek başarısız. ${response.status}`);
        }

        return response.json();

    }
}

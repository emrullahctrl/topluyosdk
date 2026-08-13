import { ApiResponse } from "./types";


export class TopluyoApiError extends Error {
    constructor(
        public status: number,
        public data: unknown
    ) {
        const message =
            typeof data === "object" &&
                data !== null &&
                "message" in data &&
                typeof data.message === "string"
                ? data.message
                : `Topluyo API request failed with status ${status}`;

        super(message);
        this.name = "TopluyoApiError";
    }
}

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
        const text = await response.text();

        let data: unknown = null;

        if (text) {
            try {
                data = JSON.parse(text);
            } catch {
                data = text;
            }
        }

        if (!response.ok) {
            let data: unknown;

            try {
                data = await response.json();
            } catch {
                data = null;
            }

            throw new TopluyoApiError(response.status, data);
        }

        return data as ApiResponse<T>;

    }
}

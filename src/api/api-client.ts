import createClient, { Client } from "openapi-fetch";
import type { paths } from "./schema.ts"; // generated by openapi-typescript

let _client: Client<paths, `${string}/${string}`> | undefined;
export const apiClient = () => {
	if (_client) {
		return _client;
	}

	_client = createClient<paths>({
		baseUrl: "https://finals-portal-hono.vercel.app/",
		//credentials: "include"
	});

	return _client;
};
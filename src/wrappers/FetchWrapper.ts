import { Constants } from "../constants/Constants";

export class FetchWrapper {
    static async Get<T>(endpoint: string, params : {key: string, value: string}[]): Promise<T> {
        const queryParams = new URLSearchParams();

        queryParams.append("token", Constants.Api.Meteo.Token);
        
        params.forEach(el => {
            queryParams.append(el.key, el.value);
        });

        const result = await fetch(
            endpoint + '?' + queryParams.toString()
        );

        return result.json() as T;
    }
}
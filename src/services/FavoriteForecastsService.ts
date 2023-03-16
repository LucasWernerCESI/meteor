import { isPlatform } from "@ionic/react";
import { Constants } from "../constants/Constants";
import { IStorageHelper } from "../helpers/IStorageHelper";
import { LocalStorageHelper } from "../helpers/LocalStorageHelper";
import { NativeStorageHelper } from "../helpers/NativeStorageHelper";

export class FavoriteForecastsService {
    private _helper: IStorageHelper<WeatherForeacast[]>;

    constructor() {        
        if (isPlatform("desktop") || isPlatform("mobileweb") || isPlatform("electron") || isPlatform("pwa"))  {
            this._helper = new LocalStorageHelper();
        }
        else {
            this._helper = new NativeStorageHelper();
        }
    }

    async addFavoriteForecast(forecast: WeatherForeacast): Promise<void> {

        const favorites = await this.getFavoriteForecasts();
        
        this._helper.set(
            Constants.Storage.Keys.FavoriteLocations,
            favorites 
                ? [
                    ...favorites.filter(el => el.city !== forecast.city),
                    forecast
                ] : [forecast]
        )
    }

    async removeFavoriteForecast(location: string): Promise<void> {
        const favorites = await this.getFavoriteForecasts();

        if (favorites) {
            this._helper.set(
                Constants.Storage.Keys.FavoriteLocations,
                favorites.filter(el => el.city !== location)
            )
        }

    }

    async getFavoriteForecasts(): Promise<WeatherForeacast[] | null> {
        return await this._helper.get(Constants.Storage.Keys.FavoriteLocations) as WeatherForeacast[];
    }
}
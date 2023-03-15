import { isPlatform } from "@ionic/react";
import { Constants } from "../constants/Constants";
import { IStorageHelper } from "../helpers/IStorageHelper";
import { LocalStorageHelper } from "../helpers/LocalStorageHelper";
import { NativeStorageHelper } from "../helpers/NativeStorageHelper";

export class FavoriteLocationsService {
    private _helper: IStorageHelper<WeatherForeacast[]>;

    constructor() {
        if (isPlatform("desktop") || isPlatform("mobileweb") || isPlatform("electron" || isPlatform("pwa")))  {
            this._helper = new LocalStorageHelper();
        }
        else {
            this._helper = new NativeStorageHelper();
        }
        // throw new Error("Method not implemented.");
    }

    async addFavoriteLocation(forecast: WeatherForeacast): Promise<void> {

        const favorites = await this.getFavoriteLocations();
        
        this._helper.set(
            Constants.Storage.Keys.FavoriteLocations,
            favorites 
                ? [
                    ...favorites,
                    forecast
                ] : [forecast]
        )
    }

    async removeFavoriteLocation(location: string): Promise<void> {
        const favorites = await this.getFavoriteLocations();

        if (favorites) {
            this._helper.set(
                Constants.Storage.Keys.FavoriteLocations,
                favorites.filter(el => el.city !== location)
            )
        }

    }

    async getFavoriteLocations(): Promise<WeatherForeacast[] | null> {
        return await this._helper.get(Constants.Storage.Keys.FavoriteLocations) as WeatherForeacast[];
    }
}
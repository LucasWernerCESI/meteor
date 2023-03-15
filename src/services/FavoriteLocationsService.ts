import { Constants } from "../constants/Constants";
import { IStorageHelper } from "../helpers/IStorageHelper";
import { LocalStorageHelper } from "../helpers/LocalStorageHelper";

export class FavoriteLocationsService {
    private _helper: IStorageHelper<string>;

    constructor() {
        this._helper = new LocalStorageHelper();
        // throw new Error("Method not implemented.");
    }

    async addFavoriteLocation(location: string): Promise<void> {

        const favorites = await this.getFavoriteLocations();
        
        this._helper.set(
            Constants.Storage.Keys.FavoriteLocations,
            JSON.stringify(favorites 
                ? [
                    ...favorites,
                    location
                ] : [location]
            )
        )
    }

    async removeFavoriteLocation(location: string): Promise<void> {
        const favorites = await this.getFavoriteLocations();

        if (favorites) {
            this._helper.set(
                Constants.Storage.Keys.FavoriteLocations,
                JSON.stringify(favorites.filter(el => el !== location))
            )
        }

    }

    async getFavoriteLocations(): Promise<string[] | null> {
        const storedFavorites = await this._helper.get(Constants.Storage.Keys.FavoriteLocations);

        if (!storedFavorites) return null;

        return await JSON.parse(storedFavorites) as string[];
    }
}
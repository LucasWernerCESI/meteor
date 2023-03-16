export class Constants {
    static Storage = class {
        static Keys = class {
            static FavoriteLocations: string = "FavoriteLocations";
        }
    }

    static Api = class {
        static Meteo = class {
            static Token: string = "45eb54d1f30b67a31d6aa41ab941d3e9d917b7f0f98e23bb125c9073deb69774";
            static Cities = class {
                static Endpoint: string = "https://api.meteo-concept.com/api/location/cities";
            }
            static NextHours = class {
                static Endpoint: string = "https://api.meteo-concept.com/api/forecast/nextHours";
            }
        }
    }
}
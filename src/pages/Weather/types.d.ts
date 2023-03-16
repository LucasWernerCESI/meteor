declare type GeolocationData = {
    city: {
        name: string
    },
    forecast: [{
        datetime: string,
        tsoil2: number
    }]
}

declare type CityData = {
    name: string,
    latitude: number,
    longitude: number,
    altitude: number,
    cp: number,
    insee: string,
}

declare type CitiesData = {
    cities: CityData[],
}

declare type Coords = {
    lat: number,
    long: number
}
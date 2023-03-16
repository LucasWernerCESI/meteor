declare type GeolocationData = {
    city: {
        name: string
    },
    forecast: [{
        datetime: string,
        tsoil2: number
    }]
}
declare type CitiesData = {
    cities: [
        {
            name: string,
            latitude: number,
            longitude: number,
            altitude: number,
            cp: number,
            insee: string,
        }
    ],
}
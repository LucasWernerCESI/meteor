import { useEffect, useState } from "react";
import { FavoriteForecastsService } from "../../services/FavoriteForecastsService"

export const GroupePfou = () => {

    const service = new FavoriteForecastsService();

    const [forecast, setForecast] = useState<WeatherForeacast[] | null>(null);

    const getForecasts = async (): Promise<void> => {
        service.addFavoriteForecast({
            city: "Paris",
            temp: 25,
            createdAt: new Date()
        }).then(async () => {
            setForecast(await service.getFavoriteForecasts());
        });
    }

    useEffect(() => {
        void getForecasts();
    }, [])

    useEffect(() => {
        console.log(forecast);
    }, [forecast])

    return (
        <>
        <h1>Groupe Pfou</h1>
        {forecast?.map(el => el.city + ' ; ')}
        </>
    )
}
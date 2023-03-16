import { IonButton, IonSearchbar, IonText, IonToolbar } from "@ionic/react";
import { MeteoDisplay } from "../Groupe-APE/MeteoDisplay";
import { CitiesSearchListDisplay } from "../Groupe-APE/CitiesSearchListDisplay";
import { Position } from '@capacitor/geolocation';
import { useEffect, useState } from 'react';
import { askCoord } from '../Groupe-FEUR/permition';
import { Constants } from "../../constants/Constants";
import { FetchWrapper } from "../../wrappers/FetchWrapper";
import { FavoriteForecastsService } from '../../services/FavoriteForecastsService';

export const WeatherPage = () => {

  const favoritesService = new FavoriteForecastsService();

  const [valueCity, setValueCity] = useState<string | null>();
  const [forecast, setForecast] = useState<GeolocationData | null>(null);
  const [cities, setCities] = useState<CitiesData | null>(null);
  const [selectedCity, setSelectedCity] = useState<CityData | null>(null)
  const [coord, setCoord] = useState<Partial<Position> | null>(null);

  const callForCities = async (): Promise<void> => {
    if (!valueCity) return;

    const result = await FetchWrapper.Get<CitiesData>(
      Constants.Api.Meteo.Cities.Endpoint,
      [{
        key: "search",
        value: valueCity
      }]
    )

    setCities(result)
  }

  const callForForecasts = async (): Promise<void> => {
    if (!coord) return;

    const forecasts = await FetchWrapper.Get<GeolocationData>(
      Constants.Api.Meteo.NextHours.Endpoint,
      [{
        key: "latlng",
        value: coord?.coords?.latitude + ',' + coord?.coords?.longitude
      }]
    );

    setValueCity(forecasts.city.name);

    setForecast(forecasts)
  }

  const handleLocationButton = async () => {
    const coords = await askCoord();

    if (coords) {
      setSelectedCity({
        name: valueCity ?? "",
        latitude: coords.coords.latitude,
        longitude: coords.coords.longitude,
        altitude: -1,
        cp: -1,
        insee: ""
      })
    }
  }

  const handleChangeValueCity = (event: Event) => {
    const target = event.target as HTMLIonSearchbarElement;
    setValueCity(target.value);
  }

  const handleCitySubmit = () => {
    void callForCities();
  }

  const handleFavoriteAdd = async () => {
    favoritesService.addFavoriteForecast({
      createdAt: new Date(),
      city: valueCity ?? selectedCity?.name,
      temp: forecast?.forecast[0].tsoil2
    })

    console.log(await favoritesService.getFavoriteForecasts());
  }

  useEffect(() => {
    if (selectedCity) {
      console.log(selectedCity)
      setCoord({
        coords: {
          latitude: selectedCity?.latitude,
          longitude: selectedCity?.longitude,
          accuracy: -1,
          altitude: null,
          speed: null,
          heading: null,
          altitudeAccuracy: undefined
        }
      })
    }
  }, [selectedCity])

  useEffect(() => {
    console.log(coord);
    void callForForecasts();
  }, [coord])

  useEffect(() => {
    console.log(cities)
  }, [cities])

  return (
    <>
      <IonText>Page Météo</IonText>
      <IonToolbar>
        <IonSearchbar onIonChange={(ev) => handleChangeValueCity(ev)} value={valueCity} color='dark' placeholder="Latitude,Longitude"></IonSearchbar>
      </IonToolbar>
      <IonButton onClick={handleLocationButton}>Me localiser</IonButton>
      <MeteoDisplay forecast={forecast} />
      <CitiesSearchListDisplay cities={cities} stateSetter={setSelectedCity} />
      <IonButton onClick={handleCitySubmit} color='primary'>Rechercher la météo</IonButton>
      <IonButton onClick={() => {handleFavoriteAdd()}} color='secondary'>Ajouter aux favoris</IonButton>
    </>
  );
};

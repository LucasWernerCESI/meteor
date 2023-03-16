import { IonButton, IonSearchbar, IonText, IonToolbar} from "@ionic/react";
import { MeteoDisplay } from "../Groupe-APE/MeteoDisplay";
import { CitiesSearchListDisplay } from "../Groupe-APE/CitiesSearchListDisplay";
import { Position } from '@capacitor/geolocation';
import { useEffect, useState } from 'react';
import {askCoord} from '../Groupe-FEUR/permition';

export const WeatherPage = () => {

  const [valueCity, setValueCity] = useState<string | null >();
  const [forecast, setGeoloc] = useState<GeolocationData | null >(null);
  const [cities, setCities] = useState<CitiesData | null >(null);
  // const coord = await askCoord();
  
  const callApi = (type: string = 'cities', coord: string|null = null) => {
    let apilink = 'https://api.meteo-concept.com/api/location/cities?token=45eb54d1f30b67a31d6aa41ab941d3e9d917b7f0f98e23bb125c9073deb69774&search=';
    let payload = valueCity

    if(type === 'geolocation'){
      apilink = 'https://api.meteo-concept.com/api/forecast/nextHours?token=45eb54d1f30b67a31d6aa41ab941d3e9d917b7f0f98e23bb125c9073deb69774&latlng=';
      payload = coord
    }

    async function fetchData() {
      const response = await fetch(
        apilink + payload, {
          method: 'GET',
        });
        
        console.log('response', response)
        const data = await response.json();
        
        console.log('data', data)
        console.log(apilink + payload)
        if(type === 'geolocation'){
          setGeoloc(data as GeolocationData);
        } else {
          setCities(data as CitiesData);
        }
    }
    fetchData();
  }

  const [clickButton, setClickButton] = useState(true)
  const [coord, setCoord] = useState<Position>()

  const handleLocationButton = async () => {
    setClickButton(true)
    if(coord){
      const coordTrait = coord.coords.latitude+","+coord.coords.longitude;
      callApi('geolocation', coordTrait);
    }
  }

  const changeCoords = async (): Promise<void> => {
    setCoord(await askCoord());
  }

  useEffect(() => {
    if (clickButton) {
        void changeCoords();
      }
  }, [clickButton])
  
  const handleChangeValueCity = (event: Event) => {
    
    const target = event.target as HTMLIonSearchbarElement;
    setValueCity(target.value);
    console.log(target.value)
  }

  const handleSubmitForm = () => {
    callApi('cities');
  }
  const setTemp = () => {
    callApi('geolocation');
  }

  return (
    <>
      <IonText>Page Météo</IonText>
      <IonToolbar>
        <IonSearchbar onIonChange={(ev) => handleChangeValueCity(ev)} value={valueCity} color='dark' placeholder="Latitude,Longitude"></IonSearchbar>
      </IonToolbar>
      <IonButton onClick={handleLocationButton}>Me localiser</IonButton>
      <MeteoDisplay forecast={forecast}/>
      <CitiesSearchListDisplay cities={cities}/>
      <IonButton onClick={handleSubmitForm} color='primary'>Rechercher la météo</IonButton>
    </>
  );
};

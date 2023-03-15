import { IonButton, IonSearchbar, IonText, IonToolbar} from "@ionic/react";
import { useState } from "react";
import { GroupeApe } from "../Groupe-APE/Exemple";
interface ConversionData {
  forecast : [{
      datetime : string,
      tsoil2: number
  }]
}
export const WeatherPage = () => {
  const [valueCity, setValueCity] = useState<string | null >();
  const [forecast, setForecast] = useState<ConversionData | null >(null);

  const handleChangeValueCity = (event: Event) => {

    const target = event.target as HTMLIonSearchbarElement;
    setValueCity(target.value);
  }

  const handleSubmitForm = () => {
    async function fetchData() {
      const response = await fetch(
          'https://api.meteo-concept.com/api/forecast/nextHours?token=45eb54d1f30b67a31d6aa41ab941d3e9d917b7f0f98e23bb125c9073deb69774&latlng='+valueCity, {
          method: 'GET',
      });
      const data = await response.json();
      setForecast(data as ConversionData);
  }

  fetchData();
  }

  return (
    <>
      <IonText>Page Météo</IonText>
      <IonToolbar>
        <IonSearchbar onIonChange={(ev) => handleChangeValueCity(ev)} value={valueCity} color='dark' placeholder="Ville"></IonSearchbar>
      </IonToolbar>
      <GroupeApe forecast={forecast}/>
      <IonButton onClick={handleSubmitForm} color='primary'>Rechercher la météo</IonButton>
    </>
  );
};

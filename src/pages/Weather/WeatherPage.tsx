import { IonButton, IonSearchbar, IonText, IonToolbar} from "@ionic/react";
import { useState } from "react";

export const WeatherPage = () => {
  const [valueCity, setValueCity] = useState<string | undefined | null >();

  const handleChangeValueCity = (event: Event) => {

    const target = event.target as HTMLIonSearchbarElement;
    setValueCity(target.value);
    console.log(valueCity)
  }

  const handleSubmitForm = () => {
    // Requete vers l'API avec la valueCity en arg
    console.log('Envoyer');
  }

  return (
    <>
      <IonText>Page Météo</IonText>
      <IonToolbar>
        <IonSearchbar onIonChange={(ev) => handleChangeValueCity(ev)} value={valueCity} color='dark' placeholder="Ville"></IonSearchbar>
      </IonToolbar>
      <IonButton onClick={handleSubmitForm} color='primary'>Rechercher la météo</IonButton>
    </>
  );
};

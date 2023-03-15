import React from 'react';
import { IonButton, useIonAlert } from '@ionic/react';

export function Alert() {
  const [presentAlert] = useIonAlert();

  return (
    <IonButton
      onClick={() =>
        presentAlert({
          header: 'Attention',
          message: "C'est l'heure de boire une bière !",
          buttons: ['OK'],
        })
      }
    >
      Alert
    </IonButton>
  );
}
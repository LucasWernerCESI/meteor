import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { beer, partlySunny} from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { MeteoDisplay } from "./pages/Groupe-APE/MeteoDisplay";
import { GroupeEuh } from "./pages/Groupe-EUH/Exemple";
import { GroupeFeur } from "./pages/Groupe-FEUR/Exemple";
import { GroupePfou } from "./pages/Groupe-PFOU/Exemple";
import { WelcomePage } from "./pages/WelcomePage";
import { ProfilPage } from "./pages/Profil/ProfilPage";
import { WeatherPage } from "./pages/Weather/WeatherPage";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Redirect exact path="/" to="/home" />
          <Route path="/home" render={() => <WelcomePage />} exact={true} />
          <Route path="/ape" render={() => <WeatherPage />} exact={true} />
          <Route path="/euh" render={() => <GroupeEuh />} exact={true} />
          <Route path="/feur" render={() => <GroupeFeur />} exact={true} />
          <Route path="/pfou" render={() => <GroupePfou />} exact={true} />
          <Route path="/profil" render={() => <ProfilPage />} exact={true} />
          <Route path='/weather'render={() => <WeatherPage />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="Weather" href="/weather">
            <IonIcon aria-hidden="true" icon={partlySunny} />
            <IonLabel>Weather</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Profil" href="/profil">
            <IonIcon aria-hidden="true" icon={beer} />
            <IonLabel>Profil</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;

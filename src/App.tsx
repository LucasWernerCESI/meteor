import { Route } from "react-router-dom";
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
import { egg, flower, sparkles, woman } from "ionicons/icons";

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
import { GroupeApe } from "./pages/Groupe-APE/Exemple";
import { GroupeEuh } from "./pages/Groupe-EUH/Exemple";
import { GroupeFeur } from "./pages/Groupe-FEUR/Exemple";
import { GroupePfou } from "./pages/Groupe-PFOU/Exemple";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/ape">
            <GroupeApe />
          </Route>
          <Route exact path="/euh">
            <GroupeEuh />
          </Route>
          <Route path="/feur">
            <GroupeFeur />
          </Route>
          <Route path="/pfou">
            <GroupePfou />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="EUH" href="/euh">
            <IonIcon aria-hidden="true" icon={woman} />
            <IonLabel>EUH</IonLabel>
          </IonTabButton>
          <IonTabButton tab="APE" href="/ape">
            <IonIcon aria-hidden="true" icon={egg} />
            <IonLabel>APE</IonLabel>
          </IonTabButton>
          <IonTabButton tab="FEUR" href="/feur">
            <IonIcon aria-hidden="true" icon={flower} />
            <IonLabel>FEUR</IonLabel>
          </IonTabButton>
          <IonTabButton tab="PFOU" href="/pfou">
            <IonIcon aria-hidden="true" icon={sparkles} />
            <IonLabel>PFOU</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;

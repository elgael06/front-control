import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu/Menu';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
/* paginas */
import Home from './pages/home/Home';
import Actividades from './pages/Actividades/Actividades';
import Destinos from './pages/Destinos/Destinos';
import Gastos from './pages/Gastos/Gastos';
import Platillos from './pages/Platillos/Platillos';
import Usuarios from './pages/Usuarios/Usuarios';

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/page/Inicio" />
            </Route>
            <Route path="/page" exact={true}>
              <Redirect to="/page/Inicio" />
            </Route>

            <Route path="/page/Inicio" exact={true} component={Home} />
            <Route path="/page/Actividades" exact={true} component={Actividades} />
            <Route path="/page/Destinos" exact={true} component={Destinos} />
            <Route path="/page/Gastos" exact={true} component={Gastos} />
            <Route path="/page/Platillos" exact={true} component={Platillos} />
            <Route path="/page/Usuarios" exact={true} component={Usuarios} />
            
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;

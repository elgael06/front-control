import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route, Switch } from 'react-router';
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
import RoutesGastos from './pages/Gastos/routes';
import RoutesUsuarios from './pages/Usuarios/routes';
import RoutesDestinos from './pages/Destinos/routes';
import RoutesActividades from './pages/Actividades/routes';
import RoutesPlatillos from './pages/Platillos/routes';
import { useSelector } from 'react-redux';
import Login from './pages/Login/Login';

const App: React.FC = () => {

  const { status=false } = useSelector((state: any) => state.sesion);
  return status ? (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Switch >

              <Route path="/" exact={true}>
                <Redirect to="/page/Inicio" />
              </Route>
              <Route path="/page/login" exact={true}>
                <Redirect to="/page/Inicio" />
              </Route>
              <Route path="/page" exact={true}>
                <Redirect to="/page/Inicio" />
              </Route>
              <Route path="/page/Inicio" exact={true} component={Home} />
              <Route path="/page/Platillos" component={RoutesPlatillos} />     
              
              <Route path="/page/Actividades" component={RoutesActividades} />
              <Route path="/page/Destinos" component={RoutesDestinos} />
              <Route path="/page/Gastos" component={RoutesGastos} />  
              <Route path='/page/Usuarios' component={RoutesUsuarios} />

            </Switch>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  ): <IonApp>
    <IonReactRouter>
      <Route path="/page/login" exact={true} component={Login} />
      <Route path="/" >
        <Redirect to="/page/login" />
      </Route>
    </IonReactRouter>
  </IonApp>;
};

export default App;

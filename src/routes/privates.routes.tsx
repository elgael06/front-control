import { IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route, Switch } from 'react-router';
import Menu from "../components/Menu/Menu";
//pages
import Home from "../pages/home/Home";
import RoutesActividades from "../pages/Actividades/routes";
import RoutesDestinos from "../pages/Destinos/routes";
import RoutesGastos from "../pages/Gastos/routes";
import RoutesPlatillos from "../pages/Platillos/routes";
import RoutesProductos from "../pages/productos/routes";
import RoutesUsuarios from "../pages/Usuarios/routes";

const PrivateRoutes = () => {
    
    return (<IonReactRouter>
    <IonSplitPane contentId="main">
      <Menu />
      <IonRouterOutlet id="main" animated={true} mode='md' >
        <Switch >            
          <Route path="/" exact={true}>
              <Redirect to="/page/Inicio" />
          </Route>
          <Route path="/control/login" exact={true}>
              <Redirect to="/control/Inicio" />
          </Route>
          <Route path="/control" exact={true}>
              <Redirect to="/control/Inicio" />
          </Route>
          <Route path="/control/Inicio" exact={true} component={Home} />
          <Route path="/control/Platillos" component={RoutesPlatillos} />
          <Route path="/control/Actividades" component={RoutesActividades} />
          <Route path="/control/Destinos" component={RoutesDestinos} />
          <Route path="/control/Gastos" component={RoutesGastos} />
          <Route path="/control/Productos" component={RoutesProductos} />
          <Route path='/control/Usuarios' component={RoutesUsuarios} />
        </Switch>
      </IonRouterOutlet>
    </IonSplitPane>
  </IonReactRouter>);
}

export default PrivateRoutes;
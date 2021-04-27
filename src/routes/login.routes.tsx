import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from 'react-router';
import Login from "../pages/Login/Login";


const LoginRoutes = () => {
    
    return (<IonReactRouter>
        <Route path="/control/login" exact={true} component={Login} />
        <Route path="/" >
            <Redirect to="/control/login" />
        </Route>
    </IonReactRouter>);
}

export default LoginRoutes;
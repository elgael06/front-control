import { Route, Switch } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Usuarios from "./Usuarios";


const RoutesUsuarios: React.FC = () => { 

    return <Layout name='Usuarios'>
            <Switch>
                <Route path='/page/Usuarios/' exact={true} component={Usuarios} />
            </Switch>
        </Layout>
}

export default RoutesUsuarios;
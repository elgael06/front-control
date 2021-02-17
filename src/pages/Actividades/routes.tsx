import { Route, Switch } from "react-router";
import Layout from "../../components/Layout/Layout";
import Actividades from "./Actividades";


const RoutesActividades: React.FC = () => { 

    return <Layout name='Actividades'>
            <Switch>
                <Route path='/page/Actividades/' exact={true} component={Actividades} />
            </Switch>
        </Layout>
}

export default RoutesActividades;
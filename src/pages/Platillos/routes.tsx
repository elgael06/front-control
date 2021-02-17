import { Route, Switch } from "react-router"
import Layout from "../../components/Layout/Layout"
import Platillos from "./Platillos";


const RoutesPlatillos:React.FC = () => { 

    return <Layout name='Platillos' >
        <Switch >
            <Route path='/page/Platillos' exact={true} component={Platillos} />
        </Switch>
    </Layout>
}

export default RoutesPlatillos;
import { lazy, Suspense } from 'react';
import { Route, Switch } from "react-router";
import Layout from "../../components/Layout/Layout";

const Platillos = lazy(()=>import("./Platillos"));


const RoutesPlatillos:React.FC = () => { 

    return <Layout name='Platillos' >
        <Suspense fallback={<div>loading...</div>}>
            <Switch >
                <Route path='/control/Platillos' exact={true} component={Platillos} />
            </Switch>
        </Suspense>
    </Layout>
}

export default RoutesPlatillos;
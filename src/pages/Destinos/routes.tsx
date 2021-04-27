import { lazy, Suspense } from 'react';
import { Route, Switch } from "react-router";
import Layout from "../../components/Layout/Layout";

const Destinos = lazy(() => import("./Destinos"));


const RoutesDestinos:React.FC = () => { 

    return <Layout name='Destinos' >
        <Suspense fallback={<div>loading...</div>}>
            <Switch >
                <Route path='/control/Destinos/' exact={true} component={Destinos} />
            </Switch>
        </Suspense>
    </Layout>
}

export default RoutesDestinos;
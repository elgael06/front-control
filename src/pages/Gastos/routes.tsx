import { lazy, Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import './styles.css'

const Gasto =  lazy(()=>import("./Gasto"));
const NuevoGasto =  lazy(()=>import("./NuevoGasto"));


const RoutesGastos: React.FC = () => {
    
    return <Layout name='Gastos'>
        <Suspense fallback={<div>loading...</div>}>
            <Switch>
                <Route path='/control/Gastos/' exact={true} component={Gasto} />
                <Route path='/control/Gastos/nuevo' exact={true} component={NuevoGasto} />            
            </Switch>
        </Suspense>
        </Layout>
}

export default RoutesGastos;
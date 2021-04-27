import { lazy, Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
// paginas
const ListaUsuarios     = lazy(() => import('./ListaUsuarios'));
const usuarioEdicion    = lazy(() => import('./usuarioEdicion'));
const Usuarios          = lazy(() => import('./Usuarios'));


const RoutesUsuarios: React.FC = () => { 

    return <Layout name='Usuarios'>
        <Suspense fallback={<LoadApp />}>
            <Switch>
            <Route path='/control/Usuarios/' exact={true} component={Usuarios} />
            <Route path='/control/Usuarios/nuevo' exact component={usuarioEdicion} />
            <Route path='/control/Usuarios/Edit/:idUser' exact component={usuarioEdicion} />
            <Route path='/control/Usuarios/lista' exact component={ListaUsuarios} />
            </Switch>
        </Suspense>
    </Layout>
}
const LoadApp = ()=> <div>loading app...</div>
export default RoutesUsuarios;
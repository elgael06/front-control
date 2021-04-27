import { lazy, Suspense } from 'react';
import { IonList } from "@ionic/react";
import { Route, Switch } from "react-router"

import menus from './assets/accesos.json';

import Layout from "../../components/Layout/Layout"
import SubMenu from "../../components/SubMenus/SubMenus";
import Title from "../../components/Title";

const Editar = lazy(()=>import( "./Editar"));

const RoutesProductos = () => {
    
    return (<Layout name='Procudtos'>
        <Suspense fallback={<div>Loading...</div>}>            
            <Switch>
                <Route path='/control/Productos' exact>
                    <Title name='Menú' />                    
                    <IonList className='lista-menus'>
                        {menus.map((m: any) => <SubMenu acceso={m} key={m.route} />)}
                    </IonList>
                </Route>
                <Route path='/control/Productos/nuevo' exact component={Editar}/>
            </Switch>
        </Suspense>
    </Layout>)
}

export default RoutesProductos;
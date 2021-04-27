import { IonList } from "@ionic/react";
import SubMenu from "../../components/SubMenus/SubMenus";
import Title from "../../components/Title";

import menus from './assets/menus.json';

const Actividades: React.FC = () => { 

    return <>
        <Title name='Menú' />
        
        <IonList className='lista-menus'>
            {menus.map((m: any) => <SubMenu acceso={m} key={m.route} />)}
        </IonList>
    </>;
}

export default Actividades;
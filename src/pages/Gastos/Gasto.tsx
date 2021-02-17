import { IonIcon, IonItem, IonLabel, IonList } from "@ionic/react";
import { menu, send } from "ionicons/icons";
import Layout from "../../components/Layout/Layout";
import SubMenu from "../../components/SubMenus/SubMenus";
import Title from "../../components/Title";

import menus from './assets/menu.json';


const Gasto:React.FC = () => { 

    return (<>
        <Title name='Menú' />
        
        <IonList className='lista-menus'>
            {menus.map((m: any) => <SubMenu acceso={m} key={m.route} />)}
        </IonList>
    </>);
}


export default Gasto;
import {  IonContent, IonPage } from '@ionic/react';
import HeaderLayout from './HeaderLayout';

import './Layout.css'


const Layout: React.FC<{children:any,name:string}> = ({ children,name})  => {
  return (<IonPage>
    <HeaderLayout name={name} />
    <IonContent fullscreen>
      <div className='container-app'>
				{ children }
      </div>
    </IonContent>
	</IonPage>);
}

export default Layout;
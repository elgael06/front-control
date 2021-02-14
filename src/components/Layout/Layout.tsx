import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import './Layout.css'


const Layout: React.FC<{children:any,name:string}> = ({ 
  children,
  name
})  => {
  return (<IonPage>
  	<IonHeader>
    	<IonToolbar>
      	<IonButtons slot="start">
        	<IonMenuButton />
        </IonButtons>
        <IonTitle>{name}</IonTitle>
        </IonToolbar>
    </IonHeader>

    <IonContent fullscreen>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">{name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <div className='container-app'>
				{ children }
      </div>
    </IonContent>
	</IonPage>);
}

export default Layout;
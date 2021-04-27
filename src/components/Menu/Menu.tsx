import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { peopleCircle, peopleOutline, cardSharp, cardOutline, accessibility, accessibilityOutline,fastFood,navigateCircle, navigateOutline,homeSharp,homeOutline, caretUpCircleOutline, caretUpCircle } from 'ionicons/icons';
import './Menu.css';
import data_app from '../../assets/data_app.json';
import { useSelector } from 'react-redux';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Inicio',
    url: '/control/Inicio',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  {
    title: 'Destinos',
    url: '/control/Destinos',
    iosIcon: navigateOutline,
    mdIcon: navigateCircle
  },
  {
    title: 'Platillos',
    url: '/control/Platillos',
    iosIcon: fastFood,
    mdIcon: fastFood
  },
  {
    title: 'Actividades',
    url: '/control/Actividades',
    iosIcon: accessibility,
    mdIcon: accessibilityOutline
  },
  {
    title: 'Gastos',
    url: '/control/Gastos',
    iosIcon: cardOutline,
    mdIcon: cardSharp
  },
  {
    title: 'Productos',
    url: '/control/Productos',
    iosIcon: caretUpCircleOutline,
    mdIcon: caretUpCircle
  },
  {
    title: 'Usuarios',
    url: '/control/Usuarios',
    iosIcon: peopleOutline ,
    mdIcon: peopleCircle
  },
];

const Menu: React.FC = () => {
  const { name='',email='' } = useSelector((state: any) => state.sesion);
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>{ data_app.name}</IonListHeader>
          <div style={{height:20}}><IonNote><b>Usuario:</b> {name}</IonNote></div>
          <IonNote><small><b>Email:</b> { email }</small></IonNote>
          <hr />
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname.includes(appPage.url)  ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

      </IonContent>
    </IonMenu>
  );
};

export default Menu;

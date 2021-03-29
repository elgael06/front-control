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
import { peopleCircle, peopleOutline, cardSharp, cardOutline, accessibility, accessibilityOutline,fastFood,navigateCircle, navigateOutline,homeSharp,homeOutline } from 'ionicons/icons';
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
    url: '/page/Inicio',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  {
    title: 'Destinos',
    url: '/page/Destinos',
    iosIcon: navigateOutline,
    mdIcon: navigateCircle
  },
  {
    title: 'Platillos',
    url: '/page/Platillos',
    iosIcon: fastFood,
    mdIcon: fastFood
  },
  {
    title: 'Actividades',
    url: '/page/Actividades',
    iosIcon: accessibility,
    mdIcon: accessibilityOutline
  },
  {
    title: 'Gastos',
    url: '/page/Gastos',
    iosIcon: cardOutline,
    mdIcon: cardSharp
  },
  {
    title: 'Usuarios',
    url: '/page/Usuarios',
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
          <IonNote>{name}</IonNote>
          <hr />
          <IonNote>{ email }</IonNote>
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

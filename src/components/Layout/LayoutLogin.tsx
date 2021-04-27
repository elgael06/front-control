import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonImg, IonPage } from "@ionic/react";
import React from "react";

import imagen from '../../pages/Login/assets/mar_1.jpg';

const LayoutLogin:React.FC = ({ children }) => {
    
    return (<IonPage>
        <IonContent >
            <div id='container_div'>
                <IonCard id='card_login' >
                    <IonImg   src={imagen}  />
                    <IonCardHeader >
                        <IonCardTitle>Ingresar</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent >
                        { children}
                    </IonCardContent>
                </IonCard>
            </div>            
        </IonContent>
    </IonPage>);
}
export default LayoutLogin;
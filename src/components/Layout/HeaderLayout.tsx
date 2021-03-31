import { IonButtons, IonHeader, IonMenuButton, IonTitle, IonToolbar } from "@ionic/react";
import ButtonClose from "./ButtonClose";

const HeaderLayout: React.FC<{name:string}> = ({ name=''}) => {
    
    return (<IonHeader>
        <IonToolbar>
      	    <IonButtons slot="start">
        	    <IonMenuButton />
            </IonButtons>
            <IonTitle>{name}</IonTitle>
            <ButtonClose />
        </IonToolbar>
    </IonHeader>);
}

export default HeaderLayout;
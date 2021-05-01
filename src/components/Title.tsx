import { FC } from "react";
import { IonTitle, IonToolbar } from "@ionic/react"
import { Components } from "ionicons";


const Title:FC<{name:string|any}>=({name})=> <IonToolbar>
    <IonTitle>{name} </IonTitle>
</IonToolbar>
        
export default Title;
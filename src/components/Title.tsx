import { IonTitle, IonToolbar } from "@ionic/react"


const Title=({name=''})=> <IonToolbar>
    <IonTitle>{name} </IonTitle>
</IonToolbar>
        
export default Title;
import { IonInput, IonItem, IonLabel, IonList, IonTextarea } from "@ionic/react";


const Descripcion = () => { 

    return (
        <IonList>
            <br/>
            <IonItem>
                <IonLabel position='fixed'>Precio $ </IonLabel>
                <IonInput type='number' min='0'  />
            </IonItem>
            <br/>
            <IonItem>
                <IonLabel position='floating'>Descripcion</IonLabel>
                <IonTextarea />
            </IonItem>
        </IonList>
    );
}

export default Descripcion;
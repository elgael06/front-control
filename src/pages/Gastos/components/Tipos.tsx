import { IonItem, IonLabel, IonList, IonToggle } from "@ionic/react";


const Tipo = () => { 

    return (<IonList>
        <IonItem type='button'><IonLabel>Gasto 1</IonLabel> <IonToggle checked={true} /></IonItem>
        <IonItem type='button'><IonLabel>Gasto 1</IonLabel> <IonToggle checked={false} /></IonItem>
        <IonItem type='button'><IonLabel>Gasto 1</IonLabel> <IonToggle checked={false} /></IonItem>
        <IonItem type='button'><IonLabel>Gasto 1</IonLabel> <IonToggle checked={false} /></IonItem>
        <IonItem type='button'><IonLabel>Gasto 1</IonLabel> <IonToggle checked={false} /></IonItem>
        <IonItem type='button'><IonLabel>Gasto 1</IonLabel> <IonToggle checked={false} /></IonItem>
    </IonList>);
}

export default Tipo;
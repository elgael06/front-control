import { IonBadge, IonButton, IonHeader, IonItem, IonLabel, IonList, IonSegment, IonSegmentButton, IonTitle, IonToggle, IonToolbar } from "@ionic/react";
import { useState } from "react";
import Layout from "../../components/Layout/Layout";

const opciones:string[] = ['Tipo','Descripcion','Comprobante','Resumen'];

const Gastos: React.FC = () => { 
    const [selected, onSelected] = useState('Tipo');

    const onchange = (event:any) => { 
        console.log(event.detail);      
        onSelected(event.detail.value);
    }

    const Selecciones = (name:string,index:number) => <IonSegmentButton key={name} value={name} title={name}>
            <IonLabel>{index+1}</IonLabel>
        </IonSegmentButton>;

    return <Layout name='Gastos'>
        <IonToolbar>
            <IonTitle>{selected}</IonTitle>
            </IonToolbar>
        
        <IonSegment onIonChange={onchange} value={`${selected}`} >
        {opciones.map((value,index) => Selecciones(value,index))}
        </IonSegment>
        <br />
        <Tipo />
        <br />
    </Layout>
}

const Tipo = () => { 

    return <IonList>
        <IonItem type='button'><IonLabel>Gasto 1</IonLabel> <IonToggle checked={true}/></IonItem>
        <IonItem type='button'><IonLabel>Gasto 1</IonLabel> <IonToggle checked={false}/></IonItem>
        <IonItem type='button'><IonLabel>Gasto 1</IonLabel> <IonToggle checked={false}/></IonItem>
        <IonItem type='button'><IonLabel>Gasto 1</IonLabel> <IonToggle checked={false}/></IonItem>
        <IonItem type='button'><IonLabel>Gasto 1</IonLabel> <IonToggle checked={false}/></IonItem>
        <IonItem type='button'><IonLabel>Gasto 1</IonLabel> <IonToggle checked={false}/></IonItem>
    </IonList>
}

export default Gastos;
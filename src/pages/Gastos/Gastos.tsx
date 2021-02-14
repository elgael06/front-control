import { IonBadge, IonButton, IonHeader, IonItem, IonLabel, IonList, IonSegment, IonSegmentButton, IonTitle, IonToggle, IonToolbar } from "@ionic/react";
import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import Descripcion from "./components/Descripcion";
import Tipo from "./components/Tipos";

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
    
    const pasoSeleccion = () => { 
        if (selected == 'Tipo') return <Tipo />;
        else if (selected == 'Descripcion') return <Descripcion />;
    }

    return <Layout name='Gastos'>
        <IonToolbar>
            <IonTitle>{selected}</IonTitle>
            </IonToolbar>
        
        <IonSegment onIonChange={onchange} value={`${selected}`} color='tertiary' >
        {opciones.map((value,index) => Selecciones(value,index))}
        </IonSegment>
        <br />
        {pasoSeleccion()}
        <br />
    </Layout>
}

export default Gastos;
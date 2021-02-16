import { IonBadge, IonButton, IonHeader, IonItem, IonLabel, IonList, IonSegment, IonSegmentButton, IonTitle, IonToggle, IonToolbar } from "@ionic/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Layout from "../../components/Layout/Layout";
import { addLista } from "../../redux/actions/formGasto";
import Descripcion from "./components/Descripcion";
import Tipo from "./components/Tipos";
import lista from './assets/listaGastos.json';

const opciones:string[] = ['Tipo','Descripcion','Comprobante','Resumen'];

const Gastos: React.FC = () => { 
    const [selected, onSelected] = useState('Tipo');
    const dispatch = useDispatch();

    useEffect(() => { 
        dispatch(addLista(lista));
    },[]);

    const onchange = (event:any) => { 
        console.log(event.detail);      
        onSelected(event.detail.value);
    }

    const taps = (name:string,index:number) => <IonSegmentButton key={name} value={name} title={name}>
            <IonLabel>{index+1}</IonLabel>
    </IonSegmentButton>;
    
    const PasoSeleccion = () => { 
        if (selected == 'Tipo') return <Tipo />;
        else if (selected == 'Descripcion') return <Descripcion />;
        else  return null;
    }

    return <Layout name='Gastos'>
        <IonToolbar>
            <IonTitle>{selected}</IonTitle>
            </IonToolbar>
        
        <IonSegment onIonChange={onchange} value={`${selected}`} color='primary' >
        {opciones.map((value,index) => taps(value,index))}
        </IonSegment>
        <br />
        <PasoSeleccion />
        <br />
    </Layout>
}

export default Gastos;
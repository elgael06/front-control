import { IonButton, IonImg, IonLabel,IonSegment, IonSegmentButton } from "@ionic/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addLista } from "../../redux/actions/formGasto";
import Descripcion from "./components/Descripcion";
import Tipo from "./components/Tipos";
import lista from './assets/listaGastos.json';
import Title from "../../components/Title";
import { Plugins, CameraResultType } from '@capacitor/core';
import Comprobante from "./components/Comprobante";
import Resumen from "./components/Resumen";

const { Camera } = Plugins;

const opciones:string[] = ['Tipo','Descripcion','Comprobante','Resumen'];

const NuevoGasto: React.FC = () => { 
    const [selected, onSelected] = useState('Tipo');
    const dispatch = useDispatch();

    useEffect(() => { 
        dispatch(addLista(lista));
    },[]);

    const onchange = (event:any) => { 
        onSelected(event.detail.value);
    }

    const taps = (name:string,index:number) => <IonSegmentButton key={name} value={name} title={name}>
            <IonLabel>{index+1}</IonLabel>
    </IonSegmentButton>;
    
    const PasoSeleccion = () => { 
        if (selected == 'Tipo') return <Tipo />;
        else if (selected == 'Descripcion') return <Descripcion />;
        else if (selected == 'Comprobante') return <Comprobante />;
        else if (selected == 'Resumen') return <Resumen />;
        else  return null;
    }

    return <>
        <Title  name={selected}/>
        
        <IonSegment onIonChange={onchange} value={`${selected}`} color='primary' >
        {opciones.map((value,index) => taps(value,index))}
        </IonSegment>
        <br />
        <PasoSeleccion />
        <br />
    </>
}

export default NuevoGasto;
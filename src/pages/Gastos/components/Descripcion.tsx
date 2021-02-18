import { IonCard, IonCardTitle, IonIcon, IonInput, IonItem, IonLabel, IonList, IonTextarea } from "@ionic/react";
import { reader, wallet } from 'ionicons/icons';
import { useDispatch, useSelector } from "react-redux";
import { selectCosto, selectDesc } from "../../../redux/actions/formGasto";

const Descripcion = () => { 
    const { descripcion='',costo=0 } = useSelector((state: any) => state.formGasto);
    const dispatch = useDispatch();

    const changeDesc = (val: string) => { 
        dispatch(selectDesc(val));
    }
    const changeCost = (val: string) => { 
        dispatch(selectCosto(val));
    }
    return (
        <IonList className='lista'>
            <br />
            <IonCard>
            <IonItem>
                <IonIcon icon={wallet} slot='start' />
                <IonLabel position='fixed'>gasto $ </IonLabel>
                <IonInput type='number' min='0'  value={costo} onIonChange={e=>changeCost(e.detail.value!)} />
            </IonItem>
            </IonCard>
            <br/>
            <IonCard>
                <IonItem >
                    <IonIcon slot='start' icon={reader}/>
                <IonCardTitle > Descripcion</IonCardTitle>
                </IonItem>
                <IonTextarea rows={6} maxlength={150} value={descripcion} onIonChange={e=>changeDesc(e.detail.value!)} />
            </IonCard>
        </IonList>
    );
}

export default Descripcion;
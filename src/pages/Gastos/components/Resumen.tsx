import { IonButton, IonCard, IonImg, IonItem, IonLabel, IonList, IonText } from "@ionic/react";
import { useDispatch, useSelector } from "react-redux";
import { stateGasto } from "../../../redux/reducers/gasto";

import imageFotoBase from '../assets/img/foto.png';


const Resumen: React.FC = () => { 
    const { lista = [], tipo = '',descripcion='',costo=0,imgComp }: stateGasto = useSelector((state: any) => state.formGasto);
    // const dispatch = useDispatch();

    const textGasto = () => { 
        const res = lista.find((value, index, array) => value.id == tipo);
        return res ? res!.text : '';
    }
    return <>
        <IonList className='lista'>
        
        <IonItem>
            <IonLabel className="ion-text-wrap">
                <IonText>Tipo Gasto:</IonText>
                <IonText color="primary">
                    <p>{ textGasto() }</p>
                </IonText>
            </IonLabel>
        </IonItem>

        <IonItem >
            <IonLabel className="ion-text-wrap">
                <IonText>Descripcion Gasto:</IonText>
                <IonText color="primary">
                    <p>{ descripcion}</p>
                </IonText>
            </IonLabel>
        </IonItem>

        <IonItem>
            <IonLabel className="ion-text-wrap">
                <IonText>Costo de gasto:</IonText>
                <IonText color="primary">
                    <p>$ { costo}</p>
                </IonText>
            </IonLabel>
        </IonItem>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <IonCard style={{width:300}}>
                <IonImg src={imgComp || imageFotoBase} />
            </IonCard>
        </div>
        
        </IonList>
        <br/>
        <IonButton expand='block' color='success' > GUARDAR</IonButton>
        </>
}


export default Resumen;
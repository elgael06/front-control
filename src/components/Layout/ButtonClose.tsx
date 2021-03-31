import React from 'react';
import { IonButton, IonIcon } from "@ionic/react";
import { power } from 'ionicons/icons';
import { useDispatch } from 'react-redux';


const ButtonClose: React.FC = () => {
    const dispatch = useDispatch();
    
    return (<IonButton
        color="danger"
        title='salir'
        shape="round"
        size="small"
        slot='end'
        onClick={() => dispatch({type:'REMOVE_SESION'})}
    >
        <IonIcon icon={power} />
    </IonButton>);
}

export default ButtonClose;
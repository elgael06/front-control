import React from 'react';
import { IonButton, IonIcon } from "@ionic/react";
import { power } from 'ionicons/icons';
import { useDispatch } from 'react-redux';
import { cerrarSecion } from '../../redux/actions/sesion.actions';


const ButtonClose: React.FC = () => {
    const dispatch = useDispatch();
    
    return (<IonButton
        color="danger"
        title='salir'
        shape="round"
        size="small"
        slot='end'
        onClick={() => dispatch(cerrarSecion())}
    >
        <IonIcon icon={power} />
    </IonButton>);
}

export default ButtonClose;
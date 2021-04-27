import React from "react";
import { IonLoading } from "@ionic/react";
import { useDispatch, useSelector } from "react-redux";
import { loaddingOff } from "../../redux/actions/effects.actions";
import { efectaInitial } from "../../redux/types/effects.type";


const LoadingComp = () => {
    const { loadding=false }:efectaInitial = useSelector((state: any) => state.effects);
    const dispatch = useDispatch();
    return <IonLoading
        isOpen={loadding}
        onDidDismiss={() => dispatch(loaddingOff())}
        message='cargando...'
    />
}

export default LoadingComp;
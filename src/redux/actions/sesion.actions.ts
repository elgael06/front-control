import { login } from "../../api/login.api";
import { loaddingOff, loaddingOn, menssageOff, menssageOn, modalOn } from "./effects.actions";
import types from '../types/sesion.type';
import { addUserInfo } from "./userInfo.actions";


export const chekSesion = ({ email='',password=''}) => {
    return async (dispatch:Function) => {
        dispatch(loaddingOn());
        const data = await login(email, password);
        dispatch(loaddingOff());
        dispatch(menssageOn({
            status: true,
            text: data.message,
            title: '',
            type: data.status ? 'info' : 'danger'
        }));
        setTimeout(()=>dispatch(menssageOff()),2000);
        if (data.status && data.active) {
            dispatch({ type: types.ADD_SESION, value: { ...data.sesion, status: data.status, token: data.token } });
        } else if (data.status && !data.active) {
            console.log('modal para activacion usuario...',data.info);
            dispatch(addUserInfo(data.info));
            dispatch(modalOn());
        }
    }
}

export const cerrarSecion = () => {
    
    return (dispatch: Function) => {
        dispatch({ type: types.REMOVE_SESION });
    }
}
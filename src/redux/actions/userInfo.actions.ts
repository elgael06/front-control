import { sendConfirmInfoLogin } from '../../api/login.api';
import types, { userInfoInitType } from '../types/userInfo.type';
import { loaddingOff, loaddingOn, menssageOff, menssageOn, modalOff } from './effects.actions';

export const addUserInfo = (data:userInfoInitType) => {
    return (dispatch:Function) => {
        dispatch({ type: types.ADD_INFO_USER_SESION, value: data });
    }
}

export const addUserInfoFecha = (value:string) => {
    return (dispatch:Function) => {
        dispatch({ type: types.ADD_INFO_FECHA, value: value });
    }
}
export const addUserInfoTel = (value:string) => {
    return (dispatch:Function) => {
        dispatch({ type: types.ADD_INFO_TEL, value: value });
    }
}

export const sendConfirmInfo = ({
    email= '',
    password = '',
    nPassword = '',
    date = '',
    phone='',
}) => {

    return async (dispatch: Function) => {
        dispatch(loaddingOn());
        const {message='',status=false} = await sendConfirmInfoLogin({
            email,
            date,
            phone,
            password,
            nPassword,
        });
        dispatch(loaddingOff());
        dispatch(menssageOn({
            status: true,
            text: message,
            title: '',
            type: status ? 'info' : 'danger'
        }));
        if (status) {            
            dispatch(modalOff());
        }
        setTimeout(() => {
            dispatch(menssageOff());
        },2000);
    }
}
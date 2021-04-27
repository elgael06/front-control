import { actionDefault } from "../types/actionDefaut.type";
import types,{ userInfoInitType } from "../types/userInfo.type";


export const userInfoInit: userInfoInitType = {
    access_menu: [],
    feha_nac: '',
    number_phone: '',
    puesto: '',
    status:false
}


export const userInfo = (state:userInfoInitType = userInfoInit, actions :actionDefault) => {
    switch (actions.type) {
        case types.ADD_INFO_USER_SESION: return actions.value;
        case types.ADD_INFO_TEL: return {...state, number_phone: actions.value};
        case types.ADD_INFO_FECHA: return {...state, feha_nac: actions.value};
        default: return state;
    }
}
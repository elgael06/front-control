import { actionDefault } from "../types/actionDefaut.type";
import types,{ userInitial } from "../types/usuarios.type";

export const usuarioSelInit: userInitial = {
    id: '',
    name: '',
    lastName: '',
    email: '',
    create: '',
    puesto:''
}


export const usurioSeleccionado = (state=usuarioSelInit, actions:actionDefault):userInitial => {
    
    switch (actions.type) {
        case types.SELECTED_USER_ID:
            return actions.value;
        case types.DEFAULT_USER_ID:
            return usuarioSelInit;
        case types.USER_NAME:
            return { ...state, name: actions.value };
        case types.USER_LAST_NAME:
            return { ...state, lastName: actions.value };
        case types.USER_EMAIL:
            return { ...state, email: actions.value };
        case types.USER_PUESTO:
            return { ...state, puesto: actions.value };
        default:
            return state;
    }

}
import { actionDefault } from "../types/actionDefaut.type";
import types,{ userInitial } from "../types/usuarios.type";


export const usuarios = (state: userInitial[] = [], action: actionDefault) => {
    switch (action.type) {
        case types.LISTA_USUARIOS:
            return action.value;
        case types.REMOVE_USUARIOS:
            return [];
        default:
            return state;
    }
}
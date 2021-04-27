import { actionDefault } from "../types/actionDefaut.type";
import types,{ sesionStateType } from "../types/sesion.type";


export const sesionInitialState:sesionStateType ={
    create:'',
    email:'',
    id:'',
    lastName:'',
    name:'',
    token:'',
    status:false
} 

export const sesion = (state = sesionInitialState, actions: actionDefault) => {
    
    switch (actions.type) {
        case types.ADD_SESION:
            return {...state,...actions.value};
        case types.REMOVE_SESION:
            return {...state,...sesionInitialState};
        default:
            return state;
    }
}
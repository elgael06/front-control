import { actionDefault } from "../types/actionDefaut.type";
import types,{ efectaInitial } from "../types/effects.type";

export const efectsInitialState: efectaInitial = {
    loadding: false,
    message: {
        status: false,
        text: '',
        title: '',
        type:'info'
    },
    toask: {
        status: false,
        text: '',
        title: '',
        type:'info'
    },
    statusModal:false,
}
export const effects = (state=efectsInitialState,actions:actionDefault):efectaInitial => {
    
    switch (actions.type) {
        case types.ON_LOADDING:
            return { ...state, loadding: true };
        case types.OFF_LOADDING:
            return { ...state, loadding: false };
        case types.ON_MESSAGE:
            return { ...state, message: actions.value };
        case types.OFF_MESSAGE:
            return { ...state, message: efectsInitialState.message };
        case types.ON_TOASK:
            return { ...state, toask: actions.value };
        case types.OFF_TOASK:
            return { ...state, toask: actions.value };
        case types.ON_MODAL:
            return { ...state, statusModal: true };
        case types.OFF_MODAL:
            return { ...state, statusModal: false };
        default:
            return state;
    }
}



import { messageInitial } from "../types/effects.type";
import types from '../types/effects.type';

export const loaddingOn = () => {
    return (dispatch:Function) => {
        dispatch({ type: types.ON_LOADDING });
    }
}
export const loaddingOff = () => {
    return (dispatch:Function) => {
        dispatch({ type: 'OFF_LOADDING' });
    }
}

export const menssageOn = (message:messageInitial) => {
    return (dispatch:Function) => {
        dispatch({ type: types.ON_MESSAGE,value:message });
    }
}
export const menssageOff = () => {
    return (dispatch:Function) => {
        dispatch({ type: types.OFF_MESSAGE });
    }
}

export const toaskOn = (message:messageInitial) => {
    return (dispatch:Function) => {
        dispatch({ type: types.ON_TOASK,value:message });
    }
}
export const toaskOff = () => {
    return (dispatch:Function) => {
        dispatch({ type: types.OFF_TOASK });
    }
}

export const modalOn = () => {
    return (dispatch:Function) => {
        dispatch({ type: types.ON_MODAL });
    }
}
export const modalOff = () => {
    return (dispatch:Function) => {
        dispatch({ type: types.OFF_MODAL });
    }
}
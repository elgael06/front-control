import { getAllUsers, getAUserId, insertUser, updatetUser } from "../../api/users.api"
import { loaddingOff, loaddingOn, menssageOff, menssageOn } from "./effects.actions";
import types from '../types/usuarios.type';
import userInitial from "../../interface/userInitial.interface";


export const optenerUsuarios = () => {
    
    return async (dispatch: Function) => {
        dispatch(loaddingOn());
        dispatch({ type: types.REMOVE_USUARIOS });
        try {
            const value = await getAllUsers();             
            dispatch(menssageOn({
                status: true,
                text: `Total ${value.length} usuarios...`,
                title: '',
                type: 'info'
            }));
            dispatch({ type: types.LISTA_USUARIOS, value });
        } catch(error) {
            dispatch(menssageOn({
                status: true,
                text: `Error al descargar usuarios!!!`,
                title: '',
                type: 'danger'
            }));
        }
        setTimeout(() => {        
            dispatch(menssageOff());
        },2000)
        dispatch(loaddingOff());
    }
}

export const usuarioId = (id='') => {
    return async (dispatch: Function) => {        
        dispatch(loaddingOn());
        try {
            const value = await getAUserId(id);
            console.log('usuario id: ',value);
            
            if (value) {
                dispatch(menssageOn({
                    status: true,
                    text: `usuario: ${id}...`,
                    title: '',
                    type: 'info'
                }));
                dispatch({ type:types.SELECTED_USER_ID, value });
            } else {
                dispatch(menssageOn({
                status: true,
                text: `Error al descargar usuario!!!`,
                title: '',
                type: 'danger'
            }));
            }
        } catch (err) {
            console.error(err);        
        }

        setTimeout(() => {        
            dispatch(menssageOff());
        },2000)
        dispatch(loaddingOff());
    }
}

export const changeUserName = (value: string) => {
    
    return (dispatch:Function) => {
        dispatch({type: types.USER_NAME, value});
    }
}
export const changeLastName = (value: string) => {
    return (dispatch:Function) => {
        dispatch({type: types.USER_LAST_NAME, value});
    }
}
export const changeEmail = (value: string) => {
    return (dispatch:Function) => {
        dispatch({type: types.USER_EMAIL, value});
    }
}
export const changePuesto = (value: string) => {
    return (dispatch:Function) => {
        dispatch({type: types.USER_PUESTO, value});
    }
}

// GUARDAR
export const guardarUsuario = (user:userInitial,callBack:Function) => {
    return async (dispatch: Function) => {
        dispatch(loaddingOn());
        const data = await insertUser(user);

        dispatch(menssageOn({
                    status: true,
                    text: data.message,
                    title: '',
                    type:  data.status ? 'info': 'danger'
                }));
        if (data.status) {
            dispatch({ type: types.DEFAULT_USER_ID });
            callBack();
        }
        dispatch(loaddingOff());
        setTimeout(() => {        
            dispatch(menssageOff());
        },2000)
    }
}
// ACTUALIZAR
export const actualizarUsuario = (id:string,user:userInitial,callBack:Function) => {
    return async (dispatch: Function) => {
        dispatch(loaddingOn());
        const data = await updatetUser(id,user);

        dispatch(menssageOn({
                    status: true,
                    text: data.message,
                    title: '',
                    type:  data.status ? 'info': 'danger'
                }));
        if (data.status) {
            dispatch({ type: types.DEFAULT_USER_ID });
            callBack();
        }
        dispatch(loaddingOff());
        setTimeout(() => {        
            dispatch(menssageOff());
        },2000)
    }
}
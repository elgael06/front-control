import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import setToken from '../functions/setToken';
import { efectsInitialState, effects } from './reducers/effects.reducer';
import { formGasto, initGasto } from './reducers/gasto';
import { sesion, sesionInitialState } from './reducers/sesion.reducer';
import { userInfo, userInfoInit } from './reducers/userInfo.reducer';
import { usuarios } from './reducers/usuarios.reducer';
import { usurioSeleccionado,usuarioSelInit } from './reducers/usurioSeleccionado';

const reducers = combineReducers({
    formGasto,
    sesion,
    effects,
    usuarios,
    usurioSeleccionado,
    userInfo
});

const initialState = {
    formGasto   : initGasto,
    sesion      : sesionInitialState,
    effects     : efectsInitialState,
    usuarios    : [],
    usurioSeleccionado: usuarioSelInit,
    userInfo:userInfoInit
}

const persistedState = localStorage.getItem('reduxState') 
                       ? JSON.parse(localStorage.getItem('reduxState') || JSON.stringify( initialState))
                       : initialState;
                  
export default createStore(
    reducers,
    persistedState,
    applyMiddleware(thunk)
);

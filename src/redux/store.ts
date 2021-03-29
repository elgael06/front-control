import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { formGasto, initGasto } from './reducers/gasto';
import { sesion, sesionInitialState } from './reducers/sesion';

const reducers = combineReducers({
    formGasto,
    sesion,
});

export default createStore(reducers,
    {
        formGasto:initGasto,
        sesion:sesionInitialState
    },
    applyMiddleware(thunk));

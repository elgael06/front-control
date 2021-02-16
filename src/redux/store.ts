import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { formGasto, initGasto } from './reducers/gasto';

const reducers = combineReducers({
    formGasto
});

export default createStore(reducers,
    {
        formGasto:initGasto
    },
    applyMiddleware(thunk));

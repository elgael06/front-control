
export type sesionStateType = {
    create  : string;
    email   : string;
    id      : string;
    lastName: string;
    name    : string;
    token   : string;
    status  : boolean;
};
export type actionType = {
    type    : string,
    value   : sesionStateType,
};

export const sesionInitialState:sesionStateType ={
    create:'',
    email:'',
    id:'',
    lastName:'',
    name:'',
    token:'',
    status:false
} 

export const sesion = (state=sesionInitialState,actions:actionType)=>{
    switch (actions.type) {
        case 'ADD_SESION':
            return {...state,...actions.value};
        case 'REMOVE_SESION':
            return {...state,...sesionInitialState};
        default:
            return state;
    }
}
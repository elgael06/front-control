

export type actionType = {
    type: string,
    value: any,
};
export type gastoLista = {
    id: string,
    text:string
}
export type stateGasto = {
    tipo: string,
    descripcion: string,
    costo: number,
    imgComp: string,
    lista:gastoLista[]
};
export const initGasto:stateGasto = {
    tipo: '',
    descripcion: '',
    costo: 0.0,
    imgComp: '',
    lista:[]
};

export const formGasto = (state=initGasto, action:actionType):stateGasto => { 

    switch (action.type) { 
        case 'addTipo':  return { ...state, tipo: action.value };
        case 'addDesc':  return { ...state, descripcion: action.value };
        case 'addCosto': return { ...state, costo: action.value };
        case 'addImage': return { ...state, imgComp: action.value };
        case 'addLista': return { ...state, lista: action.value };
        default: return state;
    }
} 



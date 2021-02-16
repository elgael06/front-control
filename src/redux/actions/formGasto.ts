import { gastoLista } from "../reducers/gasto";


export const selectGasto = (value:string) => { 
    return async (dispatch:any) => { 
        dispatch({ type: 'addTipo',value });
    }
}
export const selectDesc = (value:string) => { 
    return async (dispatch:any) => { 
        dispatch({ type: 'addDesc',value });
    }
}
export const selectCosto = (value:string) => { 
    return async (dispatch:any) => { 
        dispatch({ type: 'addCosto',value });
    }
}
export const selectImage = (value:string) => { 
    return async (dispatch:any) => { 
        dispatch({ type: 'addImage',value});
    }
}
export const addLista = (value:gastoLista[]) => { 
    return async (dispatch:any) => { 
        dispatch({ type: 'addLista',value});
    }
}
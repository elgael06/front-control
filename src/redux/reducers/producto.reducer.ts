import { actionDefault } from "../types/actionDefaut.type";
import { BARCODE_LIST_PRODUCTO, BARCODE_PRODUCTO, COSTO_PRODUCTO, DESCRIPCION_PRODUCTO, MARGEN_PRODUCTO, MEDIDA_PRODUCTO, PRECIO_PRODUCTO, productoType, RESTORE_PRODUCTO, RM_BARCODE_LIST_PRODUCTO, UNIDADES_PRODUCTO, URL_PHOTO_PRODUCTO } from "../types/producto.type";


export const productoInitState:productoType = {
    urlPhoto        : '',
    description     : '',
    medida          : '',
    unidades        : 0.00,
    costo           : 1.00,
    precio          : 1.20,
    margen          : 20,
    selected_barcode: '',
    barcodes        : []
};

export const producto = (state=productoInitState,actions:actionDefault):productoType => {
    let margen=0;
    switch (actions.type){
        case RESTORE_PRODUCTO:
            return productoInitState;
        case URL_PHOTO_PRODUCTO:
            return {...state,urlPhoto: actions.value};
        case BARCODE_PRODUCTO:
            return {...state,selected_barcode: actions.value};
        case DESCRIPCION_PRODUCTO:
            return {...state,description: actions.value};
        case MEDIDA_PRODUCTO:
            return {...state,medida: actions.value};
        case COSTO_PRODUCTO:
            margen = ((state.precio/actions.value)-1)*100;
            return {...state,costo: actions.value,margen: parseFloat( margen.toFixed(2) )};
        case PRECIO_PRODUCTO:
             margen = ((actions.value/state.costo)-1)*100;
            return {...state,precio: actions.value,margen: parseFloat( margen.toFixed(2) )};
        case UNIDADES_PRODUCTO:
            return {...state,unidades: actions.value};
        case MARGEN_PRODUCTO:
            const new_margen =(actions.value/100)+1;
            console.log(new_margen);
            const precio = state.costo * new_margen;
            return {...state,margen: actions.value,precio:parseFloat( precio.toFixed(2) )};
        case BARCODE_LIST_PRODUCTO:
            return {...state,barcodes: [...state.barcodes,actions.value]};
        case RM_BARCODE_LIST_PRODUCTO:
            return {...state, barcodes:state.barcodes.filter((e:string,id:number)=> id!==actions.value)};
        default:
            return state;
    }
};

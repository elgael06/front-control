import { actionDefault } from "../types/actionDefaut.type";
import { BARCODE_LIST_PRODUCTO, BARCODE_PRODUCTO, COSTO_PRODUCTO, DESCRIPCION_PRODUCTO, MARGEN_PRODUCTO, MEDIDA_PRODUCTO, PRECIO_PRODUCTO, productoType, RESTORE_PRODUCTO, UNIDADES_PRODUCTO, URL_PHOTO_PRODUCTO } from "../types/producto.type";


export const productoInitState:productoType = {
    urlPhoto        : '',
    description     : '',
    medida          : '',
    unidades        : 0.00,
    costo           : 0.01,
    precio          : 0.01,
    margen          : 20,
    selected_barcode: '',
    barcodes        : []
};

export const producto = (state=productoInitState,actions:actionDefault):productoType => {
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
            return {...state,costo: actions.value};
        case PRECIO_PRODUCTO:
            return {...state,precio: actions.value};
        case UNIDADES_PRODUCTO:
            return {...state,unidades: actions.value};
        case MARGEN_PRODUCTO:
            return {...state,margen: actions.value};
        case BARCODE_LIST_PRODUCTO:
            return {...state,barcodes: [...state.barcodes,actions.value]};
        default:
            return state;
    }
};

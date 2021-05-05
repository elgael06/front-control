import { BARCODE_LIST_PRODUCTO, RESTORE_PRODUCTO } from "../types/producto.type";


export const setValue = (type: string, value:string) => {
    console.log('values ',type,value)
    return {
        type,
        value
    };
};

export const restoreProduct = ()=>{

    return {type:RESTORE_PRODUCTO,value:''}
}

export const setListaBarcode = ( value:string)=> {

    return ({
        type:BARCODE_LIST_PRODUCTO,
        value
    });
};
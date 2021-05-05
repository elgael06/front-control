import { BARCODE_LIST_PRODUCTO } from "../types/producto.type";


export const setValue = (type: string, value:string) => {
    console.log('values ',type,value)
    return {
        type,
        value
    };
};

export const setListaBarcode = ( value:string)=> {

    return ({
        type:BARCODE_LIST_PRODUCTO,
        value
    });
};
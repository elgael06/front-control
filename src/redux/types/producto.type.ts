export type productoType  = {
    urlPhoto:string,
    description:string,
    medida:''|'KILO'|'LITRO'|'PIEZA',
    unidades:number,
    costo:number,
    precio:number,
    margen:number,
    selected_barcode:string,
    barcodes:string[]
}

export const RESTORE_PRODUCTO       = 'RESTORE_PRODUCTO';
export const URL_PHOTO_PRODUCTO     = 'URL_PHOTO_PRODUCTO'; 
export const BARCODE_PRODUCTO       = 'BARCODE_PRODUCTO';
export const DESCRIPCION_PRODUCTO   = 'DESCRIPCION_PRODUCTO';
export const MEDIDA_PRODUCTO        = 'MEDIDA_PRODUCTO';
export const UNIDADES_PRODUCTO      = 'UNIDADES_PRODUCTO';
export const COSTO_PRODUCTO         = 'COSTO_PRODUCTO';
export const PRECIO_PRODUCTO        = 'PRECIO_PRODUCTO';
export const MARGEN_PRODUCTO        = 'MARGEN_PRODUCTO';
export const BARCODE_LIST_PRODUCTO  = 'BARCODE_LIST_PRODUCTO';
export const RM_BARCODE_LIST_PRODUCTO  = 'RM_BARCODE_LIST_PRODUCTO';

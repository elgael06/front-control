
import { Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setValue } from "../../../redux/actions/producto.actions";
import { COSTO_PRODUCTO, MARGEN_PRODUCTO, PRECIO_PRODUCTO, productoType } from "../../../redux/types/producto.type";
import FormLogin from "../../Login/components/FormLogin";

const Precio = ()=>{
    const producto:productoType = useSelector((state:any)=> state.producto);
    const dispatch = useDispatch();

    const handleChange = (type:string) => (e:any) =>{
        dispatch(setValue(type,e.target.value))
    }

    return (<>
        <Col xs={6} sm={3}>
            <FormLogin
                title='Costo'
                required={true}
                maxLength={8}
                step={0.01}
                type='number'
                name='Costo'
                placeholder='0.00'
                className='numeric'
                onChange={handleChange(COSTO_PRODUCTO)}
                value={producto.costo}
            />
        </Col>
        {/*  */}
        <Col xs={6} sm={3}>
            <FormLogin
                title='Precio'
                required={true}
                maxLength={8}
                step={0.01}
                type='number'
                name='Precio'
                placeholder='0.00'
                className='numeric'
                onChange={handleChange(PRECIO_PRODUCTO)}
                value={producto.precio}
            />
        </Col>
        {/*  */}
        <Col xs={6} sm={3}>
            <FormLogin
                title='Margen (%)'
                required={true}
                maxLength={5}
                type='number'
                step={0.01}
                name='margen'
                placeholder='0.000 %'
                className='numeric'
                onChange={handleChange(MARGEN_PRODUCTO)}
                value={producto.margen}
            />
        </Col>
    </>);
}

export default Precio;
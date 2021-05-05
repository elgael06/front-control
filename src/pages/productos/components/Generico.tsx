import { Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setValue } from "../../../redux/actions/producto.actions";
import { DESCRIPCION_PRODUCTO, productoType } from "../../../redux/types/producto.type";

import FormLogin from "../../Login/components/FormLogin";
import CaptureProductImg from "./CaptureProductImg";

const Genericos = () => {
    const producto:productoType = useSelector((state:any)=> state.producto);
    const dispatch = useDispatch();

    const handleChange = (e:any) =>{
        dispatch(setValue(DESCRIPCION_PRODUCTO,e.target.value))
    }

    return (<>
        <CaptureProductImg />
        
        <Col sm={6}>
           <FormLogin
               title='Descripcion'
               required={true}
               minLength={4}
               type='text'
               name='producto'
               onChange={handleChange}
               value={producto.description}
               placeholder='Descripcion...'
           />
        </Col> 

        <Col xs={6} sm={3}>
            <FormLogin
                title='IVA'
                name='IVA'
                disabled
                value='16.00 %'
                className='numeric'
            />
        </Col>
    </>);
}

export default Genericos;
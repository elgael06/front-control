import { Col } from "react-bootstrap";


import foto from '../../Gastos/assets/img/foto.png';
import FormLogin from "../../Login/components/FormLogin";
import CaptureProductImg from "./CaptureProductImg";

const Genericos = () => {

    return (<>
        <CaptureProductImg />
        
        <Col sm={6}>
           <FormLogin
               title='Descripcion'
               required={true}
               minLength={4}
               type='text'
               name='producto'
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
import { IonImg } from "@ionic/react";
import { Col } from "react-bootstrap";


import foto from '../../Gastos/assets/img/foto.png';
import FormLogin from "../../Login/components/FormLogin";

const Genericos = () => {

    return (<>
        <Col sm={3}>
           {/* <IonAvatar> */}
            <IonImg style={{height:65}} src={foto} />
           {/* </IonAvatar> */}
           <hr/>
        </Col>           
        
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